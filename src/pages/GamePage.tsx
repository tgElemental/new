import { Box, Indicator, LoadingOverlay, SimpleGrid } from "@mantine/core";
import { useDrag, useDrop } from "react-dnd";
import { DraggableBlockquote } from "../components/DraggableBlockquote";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import { notifications } from "@mantine/notifications";
import useUser from "../hooks/useUser";
import { useState } from "react";
import axios from "axios";
// import useUser from "../hooks/useUser";

init({ data });
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      "em-emoji": any;
    }
  }
}

const playGame = async (element: string, uid: number) => {
  try {
    const response = await axios.get(
      `https://api.rahomaskan.com/api/game?element=${element}&uid=${uid}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error playing game:", error);
    throw error;
  }
};

const BoxWithDropTarget = () => {
  const elementNames = {
    water: "آب",
    wind: "باد",
    soil: "خاک",
    fire: "آتش",
  };

  const initialUserState = useUser();
  const [user, setUser] = useState(initialUserState); // Assuming you have an initial state for the user
  const [visible, setVisible] = useState(false);
  //@ts-ignore
  const handleDrop = async (item: DragItem, monitor) => {
    setVisible(true);
    console.log(monitor);
    //@ts-ignore
    const elementName = elementNames[item.id];
    const message = `یه   دونه   کارت   عنصر  ${elementName}  بازی   کردی،   بزار   ببینیم   چی   میشه !`;
    notifications.show({
      title: elementName,
      message: message,
    });
    try {
      console.log(monitor);
      const result = await playGame(item.id, user.user.userid);

      // Update the user's data based on the result
      setUser({ ...user, [item.id]: result.remain });
      // Show a notification
      notifications.show({
        title: elementName,
        message: `${result.remain} | ${result.user} | ${result.status} | ${result.element}`,
        color: result.status === 1 ? "green" : "red",
      });
    } catch (error) {
      // Handle error
      notifications.show({
        title: "Error",
        message: "Failed to play game",
        color: "red",
      });
    } finally {
      setVisible(false);
    }
  };

  const [, drop] = useDrop(() => ({
    accept: "Blockquote",
    drop: handleDrop,
  }));

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "pink", type: "bars" }}
        />

        <Box
          ref={drop}
          m={"xl"}
          p={"lg"}
          style={{
            height: "200px",
            border: "2px dashed #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          نوبت شماست!
          <br />
          عنصر خود را انتخاب کنید و بازی کنید
        </Box>
      </Box>
    </>
  );
};

const GamePage = () => {
  const windemoji = <em-emoji id="wind_blowing_face" Size="2em"></em-emoji>;
  const soilemoji = <em-emoji id="large_brown_circle" Size="2em"></em-emoji>;
  const fireemoji = <em-emoji id="fire" Size="2em"></em-emoji>;
  const wateremoji = <em-emoji id="droplet" Size="2em"></em-emoji>;
  // const user = useUser();
  const { user, isLoading } = useUser();
  const [{}] = useDrag(() => ({
    // const [{ isDragging }, drag] = useDrag(() => ({
    type: "Blockquote", // The type of the draggable item
    item: { id: "unique-id" }, // An optional object with data about the item
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <>
      <h1>بازی</h1>
      <BoxWithDropTarget />
      <SimpleGrid cols={2}>
        <DraggableBlockquote id="water" icon={wateremoji}>
          <Indicator
            color="blue"
            size="lg"
            radius="md"
            label={isLoading ? "" : user.water}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            آب
          </Indicator>
        </DraggableBlockquote>
        <DraggableBlockquote id="wind" icon={windemoji}>
          <Indicator
            color="teal"
            size="lg"
            radius="md"
            label={isLoading ? "" : user.wind}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            باد
          </Indicator>
        </DraggableBlockquote>
        <DraggableBlockquote id="soil" icon={soilemoji}>
          <Indicator
            color="brown"
            size="lg"
            radius="md"
            label={isLoading ? "" : user.earth}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            خاک
          </Indicator>
        </DraggableBlockquote>
        <DraggableBlockquote id="fire" icon={fireemoji}>
          <Indicator
            color="orange"
            size="lg"
            radius="md"
            label={isLoading ? "" : user.fire}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            آتش
          </Indicator>
        </DraggableBlockquote>
      </SimpleGrid>
    </>
  );
};

export default GamePage;
