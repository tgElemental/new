import { Blockquote, Box, Group } from "@mantine/core";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import data from "@emoji-mart/data";
import { init } from "emoji-mart";
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
const GamePage = () => {
  // Create an array of states for each card
  const [{ x: x1, y: y1, border: border1, scale: scale1 }, api1] = useSpring(
    () => ({ x: 0, y: 0, border: "none", scale: 1 }),
  );
  const [{ x: x2, y: y2, border: border2, scale: scale2 }, api2] = useSpring(
    () => ({ x: 0, y: 0, border: "none", scale: 1 }),
  );
  const [{ x: x3, y: y3, border: border3, scale: scale3 }, api3] = useSpring(
    () => ({ x: 0, y: 0, border: "none", scale: 1 }),
  );
  const [{ x: x4, y: y4, border: border4, scale: scale4 }, api4] = useSpring(
    () => ({ x: 0, y: 0, border: "none", scale: 1 }),
  );

  // Define the drag hooks for each card
  const bind1 = useDrag(({ active, down, movement: [mx, my] }) => {
    api1.start({
      x: down ? mx : 0,
      y: down ? my : 0,
      immediate: down,
      border: active ? "solid 2px blue" : "none",
      scale: active ? 1.2 : 1,
    });
  });

  const bind2 = useDrag(({ active, down, movement: [mx, my] }) => {
    api2.start({
      x: down ? mx : 0,
      y: down ? my : 0,
      immediate: down,
      border: active ? "solid 2px blue" : "none",
      scale: active ? 1.2 : 1,
    });
  });

  const bind3 = useDrag(({ active, down, movement: [mx, my] }) => {
    api3.start({
      x: down ? mx : 0,
      y: down ? my : 0,
      immediate: down,
      border: active ? "solid 2px blue" : "none",
      scale: active ? 1.2 : 1,
    });
  });

  const bind4 = useDrag(({ active, down, movement: [mx, my] }) => {
    api4.start({
      x: down ? mx : 0,
      y: down ? my : 0,
      immediate: down,
      border: active ? "solid 2px blue" : "none",
      scale: active ? 1.2 : 1,
    });
  });
  const windemoji = <em-emoji id="wind_blowing_face" Size="2em"></em-emoji>;
  const soilemoji = <em-emoji id="large_brown_circle" Size="2em"></em-emoji>;
  const fireemoji = <em-emoji id="fire" Size="2em"></em-emoji>;
  const wateremoji = <em-emoji id="droplet" Size="2em"></em-emoji>;

  return (
    <>
      <h1>بازی</h1>

      <Box
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

      <Group justify="center" gap="xl" grow>
        <animated.div
          {...bind1()}
          style={{
            x: x1,
            y: y1,
            borderLeft: border1,
            borderBottom: border1,
            scale: scale1,
          }}
        >
          <Blockquote
            color="blue"
            radius="xs"
            icon={wateremoji}
            iconSize={60}
            mt="xs"
          >
            آب
          </Blockquote>
        </animated.div>

        <animated.div
          {...bind2()}
          style={{
            x: x2,
            y: y2,
            borderLeft: border2,
            borderBottom: border2,
            scale: scale2,
          }}
        >
          <Blockquote
            color="teal"
            radius="xs"
            iconSize={60}
            mt="xs"
            icon={windemoji}
          >
            باد
          </Blockquote>
        </animated.div>

        <animated.div
          {...bind3()}
          style={{
            x: x3,
            y: y3,
            borderLeft: border3,
            borderBottom: border3,
            scale: scale3,
          }}
        >
          <Blockquote
            color="brown"
            radius="xs"
            iconSize={60}
            mt="xs"
            icon={soilemoji}
          >
            خاک
          </Blockquote>
        </animated.div>

        <animated.div
          {...bind4()}
          style={{
            x: x4,
            y: y4,
            borderLeft: border4,
            borderBottom: border4,
            scale: scale4,
          }}
        >
          <Blockquote
            color="orange"
            radius="xs"
            iconSize={60}
            mt="xs"
            icon={fireemoji}
          >
            آتش
          </Blockquote>
        </animated.div>
      </Group>
    </>
  );
};

export default GamePage;
