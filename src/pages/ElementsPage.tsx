import { Blockquote, Box, SimpleGrid } from "@mantine/core";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";

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

const ElementsPage = () => {
  const treeemoji = <em-emoji id="deciduous_tree" Size="2em"></em-emoji>;
  const lightemoji = <em-emoji id="sunny" Size="2em"></em-emoji>;
  const windemoji = <em-emoji id="wind_blowing_face" Size="2em"></em-emoji>;
  const soilemoji = <em-emoji id="large_brown_circle" Size="2em"></em-emoji>;
  const fireemoji = <em-emoji id="fire" Size="2em"></em-emoji>;
  const wateremoji = <em-emoji id="droplet" Size="2em"></em-emoji>;

  return (
    <>
      <Box p={"md"}>
        <Blockquote
          color="teal"
          radius="xs"
          iconSize={60}
          icon={treeemoji}
          mt="xl"
        >
          درخت از برخورد خاک و آب برای شما ایجاد می‌شود
        </Blockquote>
      </Box>
      <Box mb={"xl"} p={"md"}>
        <Blockquote
          color="lime"
          radius="xs"
          iconSize={60}
          icon={lightemoji}
          mt="xl"
        >
          نور از برخورد باد و آتش برای شما ایجاد می‌شود
        </Blockquote>
      </Box>
      <SimpleGrid cols={2}>
        <Box m={"xs"} p={"ms"}>
          <Blockquote
            color="cyan"
            radius="xl"
            iconSize={60}
            icon={windemoji}
            mt="xs"
          >
            عنصر باد
          </Blockquote>
        </Box>
        <Box m={"xs"} p={"ms"}>
          <Blockquote
            color="brown"
            radius="xl"
            iconSize={60}
            icon={soilemoji}
            mt="xs"
          >
            عنصر خاک
          </Blockquote>
        </Box>
        <Box m={"xs"} p={"ms"}>
          <Blockquote
            color="blue"
            radius="xl"
            iconSize={60}
            icon={wateremoji}
            mt="xs"
          >
            عنصر آب
          </Blockquote>
        </Box>
        <Box m={"xs"} p={"ms"}>
          <Blockquote
            color="orange"
            radius="xl"
            iconSize={60}
            icon={fireemoji}
            mt="xs"
          >
            آتش
          </Blockquote>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default ElementsPage;
