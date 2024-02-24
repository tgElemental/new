import { Box, Indicator, SimpleGrid } from "@mantine/core";
import { useDrag, useDrop } from "react-dnd";
import { DraggableBlockquote } from "../components/DraggableBlockquote";

import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import { notifications } from "@mantine/notifications";
import useUser from "../hooks/useUser";
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

const BoxWithDropTarget = () => {
  const [, drop] = useDrop(() => ({
    accept: "Blockquote", // Accepts only Blockquote components
    drop: (item, monitor) => {
      // Handle the drop logic here
      console.log("Blockquote dropped");
      console.log(item);
      console.log(monitor);
      notifications.show({
        title: "بازی",
        message: "یه  دونه کارت عنصر بازی کردی، بزار ببینیم چی میشه !",
      });
    },
  }));

  return (
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
            label={user.water}
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
            label={user.wind}
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
            label={user.earth}
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
            label={user.fire}
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
