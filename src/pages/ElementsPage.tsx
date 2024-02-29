import { Blockquote, Box, Indicator, SimpleGrid } from '@mantine/core';
import data from '@emoji-mart/data';
import { init } from 'emoji-mart';
import useUser from '../hooks/useUser';

init({ data });
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'em-emoji': any;
    }
  }
}

const ElementsPage = () => {
  // const user = useUser();
  const { user, isLoading } = useUser();
  const treeemoji = <em-emoji id="deciduous_tree" Size="2em"></em-emoji>;
  const lightemoji = <em-emoji id="sunny" Size="2em"></em-emoji>;
  const windemoji = <em-emoji id="wind_blowing_face" Size="2em"></em-emoji>;
  const soilemoji = <em-emoji id="large_brown_circle" Size="2em"></em-emoji>;
  const fireemoji = <em-emoji id="fire" Size="2em"></em-emoji>;
  const wateremoji = <em-emoji id="droplet" Size="2em"></em-emoji>;

  return (
    <>
      <Box p={'md'}>
        <Blockquote
          color="teal"
          radius="xs"
          iconSize={60}
          icon={treeemoji}
          mt="xl"
        >
          <Indicator
            color="teal"
            size="lg"
            radius="md"
            label={user.tree}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            درخت از برخورد خاک و آب برای شما ایجاد می‌شود
          </Indicator>
        </Blockquote>
      </Box>
      <Box mb={'xl'} p={'md'}>
        <Blockquote
          color="lime"
          radius="xs"
          iconSize={60}
          icon={lightemoji}
          mt="xl"
        >
          <Indicator
            color="lime"
            size="lg"
            radius="md"
            label={user.light}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            نور از برخورد باد و آتش برای شما ایجاد می‌شود
          </Indicator>
        </Blockquote>
      </Box>
      <SimpleGrid cols={2}>
        <Box m={'xs'} p={'ms'}>
          <Blockquote
            color="cyan"
            radius="xl"
            iconSize={60}
            icon={windemoji}
            mt="xs"
          >
            <Indicator
              color="cyan"
              size="lg"
              radius="sm"
              label={isLoading ? '' : user.wind}
              position="middle-start"
              withBorder
              processing={isLoading}
            >
              باد
            </Indicator>
          </Blockquote>
        </Box>
        <Box m={'xs'} p={'ms'}>
          <Blockquote
            color="brown"
            radius="xl"
            iconSize={60}
            icon={soilemoji}
            mt="xs"
          >
            <Indicator
              color="brown"
              size="lg"
              radius="sm"
              label={isLoading ? '' : user.earth}
              position="middle-start"
              withBorder
              processing={isLoading}
            >
              خاک
            </Indicator>
          </Blockquote>
        </Box>
        <Box m={'xs'} p={'ms'}>
          <Blockquote
            color="blue"
            radius="xl"
            iconSize={60}
            icon={wateremoji}
            mt="xs"
          >
            <Indicator
              color="blue"
              size="lg"
              radius="sm"
              label={isLoading ? '' : user.water}
              position="middle-start"
              withBorder
              processing={isLoading}
            >
              آب
            </Indicator>
          </Blockquote>
        </Box>
        <Box m={'xs'} p={'ms'}>
          <Blockquote
            color="orange"
            radius="xl"
            iconSize={60}
            icon={fireemoji}
            mt="xs"
          >
            <Indicator
              color="orange"
              size="lg"
              radius="sm"
              label={isLoading ? '' : user.fire}
              position="middle-start"
              withBorder
              processing={isLoading}
            >
              آتش
            </Indicator>
          </Blockquote>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default ElementsPage;
