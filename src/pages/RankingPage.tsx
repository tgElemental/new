import { useState, useEffect } from 'react';
import {
  Text,
  Card,
  Center,
  Group,
  Loader,
  SimpleGrid,
  Badge,
  Button,
  Stack,
  Skeleton,
  Box,
  Divider,
} from '@mantine/core';
import data from '@emoji-mart/data';
import { init } from 'emoji-mart';
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
interface RankingItem {
  name: string;
  score: number;
  tree: number;
  light: number;
}

const RankingPage = () => {
  const [data, setData] = useState<RankingItem[]>([]);
  const [treeData, setTreeData] = useState<RankingItem[]>([]);
  const [lightData, setLightData] = useState<RankingItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const treeResponse = await fetch(
          'https://api.rahomaskan.com/api/ranking/tree'
        );
        const lightResponse = await fetch(
          'https://api.rahomaskan.com/api/ranking/light'
        );
        const treeData = await treeResponse.json();
        const lightData = await lightResponse.json();

        setTreeData(treeData);
        setLightData(lightData);
        const response = await fetch('https://api.rahomaskan.com/api/ranking');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const getRankText = (index: number) => {
    if (index === 0) {
      return <em-emoji id="first_place_medal" Size="4em"></em-emoji>;
    } else if (index === 1) {
      return <em-emoji id="second_place_medal" Size="4em"></em-emoji>;
    } else if (index === 2) {
      return <em-emoji id="third_place_medal" Size="4em"></em-emoji>;
    } else {
      return `نفر ${index + 1}`;
    }
  };

  const getTopThree = (data: RankingItem[]) => {
    return data.sort((a, b) => b.tree - a.tree).slice(0, 3);
  };

  if (loading) {
    return (
      <>
        <SimpleGrid cols={3} p={'xs'}>
          <Skeleton height={150} width={'100%'} mb="xl" />
          <Skeleton height={150} width={'100%'} mb="xl" />
          <Skeleton height={150} width={'100%'} mb="xl" />
        </SimpleGrid>
        <Center>
          <Loader color="blue" size="xl" type="dots" />
        </Center>
        <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
        <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
        <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
        <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
        <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
      </>
    );
  }

  const topTreeUsers = getTopThree(treeData);
  const topLightUsers = getTopThree(lightData);

  return (
    <>
      {loading ? (
        <>
          <SimpleGrid cols={3} p={'xs'}>
            <Skeleton height={150} width={'100%'} mb="xl" />
            <Skeleton height={150} width={'100%'} mb="xl" />
            <Skeleton height={150} width={'100%'} mb="xl" />
          </SimpleGrid>
          <Center>
            <Loader color="blue" size="xl" type="dots" />
          </Center>
          <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
          <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
          <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
          <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
          <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
        </>
      ) : (
        <>
          <Divider
            my="xs"
            variant="dashed"
            labelPosition="center"
            label={
              <>
                <em-emoji id="moneybag" Size="2em"></em-emoji>
                <Box ml={5}>امتیاز</Box>
              </>
            }
          />
          <SimpleGrid cols={3} p={'xs'}>
            {data.slice(0, 3).map((item, index) => (
              <Card withBorder shadow="sm" radius="md" key={index}>
                <Card.Section withBorder inheritPadding py="xs">
                  <Group justify="space-between">
                    <Text fw={900} style={{ textAlign: 'center' }}>
                      {getRankText(index)}
                    </Text>
                  </Group>
                </Card.Section>
                <Text mih={'50'} mt="sm" c="dimmed" size="sm">
                  <Text span inherit c="var(--mantine-color-anchor)">
                    {item.name}
                  </Text>
                </Text>
                <Card.Section mt="sm">
                  <Group gap="2px" grow>
                    <Button
                      variant="light"
                      size="compact-xs"
                      p={0}
                      m={0}
                      leftSection={
                        <em-emoji id="moneybag" Size="1em"></em-emoji>
                      }
                    >
                      {item.score}
                    </Button>
                    <Button
                      variant="light"
                      size="compact-xs"
                      p={0}
                      m={0}
                      leftSection={
                        <em-emoji id="deciduous_tree" Size="1em"></em-emoji>
                      }
                    >
                      {item.tree}
                    </Button>
                  </Group>
                </Card.Section>
              </Card>
            ))}
          </SimpleGrid>

          <Divider
            my="xs"
            variant="dashed"
            labelPosition="center"
            label={
              <>
                <em-emoji id="deciduous_tree" Size="2em"></em-emoji>
                <Box ml={5}>درخت</Box>
              </>
            }
          />
          <SimpleGrid cols={3} p={'xs'}>
            {topTreeUsers.map((item, index) => (
              <Card
                key={index}
                withBorder
                shadow="sm"
                radius="md"
                bg={'teal'}
                style={{
                  padding: index === 0 ? '20px' : index === 1 ? '15px' : '10px',
                  margin: index === 0 ? '0' : index === 1 ? '10px' : '20px',
                }}
              >
                <Card.Section withBorder inheritPadding py="xs">
                  {/* <Badge size="xl" variant="outline" color="white">{index +  1}</Badge> */}
                  <div>{item.name}</div>
                  <div>{item.tree} عنصر</div>
                </Card.Section>
              </Card>
            ))}
          </SimpleGrid>
          <Divider
            my="xs"
            variant="dashed"
            labelPosition="center"
            label={
              <>
                <em-emoji id="sunny" Size="2em"></em-emoji>
                <Box ml={5}>نور</Box>
              </>
            }
          />
          <SimpleGrid cols={3} p={'xs'}>
            {topLightUsers.map((item, index) => (
              <Card
                key={index}
                withBorder
                shadow="sm"
                radius="md"
                bg={'orange'}
                variant="light"
                style={{
                  padding: index === 0 ? '20px' : index === 1 ? '15px' : '10px',
                  margin: index === 0 ? '0' : index === 1 ? '10px' : '20px',
                }}
              >
                <Card.Section withBorder inheritPadding py="xs">
                  {/* <Badge size="xl" variant="outline" color="white" >{index +  1}</Badge> */}
                  <div>{item.name}</div>
                  <div>{item.light} عنصر</div>
                </Card.Section>
              </Card>
            ))}
          </SimpleGrid>

          <Stack
            // h={300}
            pt={'lg'}
            pr={'xs'}
            pl={'xs'}
            bg="var(--mantine-color-body)"
            align="flex-start"
            gap="xs"
          >
            {data.slice(3).map((item, index) => (
              <Button
                justify="space-between"
                fullWidth
                leftSection={<Badge>{index + 4} </Badge>}
                rightSection={item.score + ' درخت | ' + item.light + ' نور '}
                variant="default"
                mt="md"
              >
                {item.name}
              </Button>
            ))}
          </Stack>
        </>
      )}
    </>
  );
};

export default RankingPage;
