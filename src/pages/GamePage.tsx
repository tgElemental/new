import { Box, Group } from "@mantine/core";
import { useDrag, useDrop } from "react-dnd";
import { DraggableBlockquote } from "../components/DraggableBlockquote";

import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import { notifications } from "@mantine/notifications";
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
      {/* <DndProvider backend={HTML5Backend}> */}
      <Group justify="center" gap="xl" grow>
        <DraggableBlockquote id="water" icon={wateremoji}>
          آب
        </DraggableBlockquote>
        <DraggableBlockquote id="wind" icon={windemoji}>
          باد
        </DraggableBlockquote>
        <DraggableBlockquote id="soil" icon={soilemoji}>
          خاک
        </DraggableBlockquote>
        <DraggableBlockquote id="fire" icon={fireemoji}>
          آتش
        </DraggableBlockquote>
      </Group>
      {/* </DndProvider> */}
    </>
  );
};

export default GamePage;
