import { Blockquote, Box } from "@mantine/core";
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
  const treeemoji = <em-emoji id="deciduous_tree" Size="5em"></em-emoji>;
  return (
    <>
      <h1>صفحه عناصر</h1>
      <Box m={"xl"} p={"md"}>
        <Blockquote
          color="teal"
          radius="xs"
          iconSize={60}
          icon={treeemoji}
          mt="xl"
        >
          درخت از برخورد خاک و آب برای شما ایجاد میشود
        </Blockquote>
      </Box>
    </>
  );
};

export default ElementsPage;
