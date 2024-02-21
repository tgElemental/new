import { useState, useEffect } from "react";
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
} from "@mantine/core";
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
interface RankingItem {
  name: string;
  score: number;
  tree: number;
}

const RankingPage = () => {
  const [data, setData] = useState<RankingItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.rahomaskan.com/api/ranking");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
  return (
    <>
      {loading ? (
        <>
          <SimpleGrid cols={3} p={"xs"}>
            <Skeleton height={150} width={"100%"} mb="xl" />
            <Skeleton height={150} width={"100%"} mb="xl" />
            <Skeleton height={150} width={"100%"} mb="xl" />
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
          <SimpleGrid cols={3} p={"xs"}>
            {data.slice(0, 3).map((item, index) => (
              <Card withBorder shadow="sm" radius="md" key={index}>
                <Card.Section withBorder inheritPadding py="xs">
                  <Group justify="space-between">
                    <Text fw={900} style={{ textAlign: "center" }}>
                      {getRankText(index)}
                    </Text>
                  </Group>
                </Card.Section>
                <Text mt="sm" c="dimmed" size="sm">
                  <Text span mih={"50"} inherit c="var(--mantine-color-anchor)">
                    {item.name}
                  </Text>
                </Text>
                <Card.Section mt="sm">
                  <Group gap="xs" grow>
                    <Button
                      p={0}
                      m={0}
                      leftSection={
                        <em-emoji id="moneybag" Size="1em"></em-emoji>
                      }
                    >
                      {item.score}
                    </Button>
                    <Button
                      p={0}
                      m={0}
                      rightSection={
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
          <Stack
            // h={300}
            pt={"lg"}
            pr={"xs"}
            pl={"xs"}
            bg="var(--mantine-color-body)"
            align="flex-start"
            gap="xs"
          >
            {data.slice(3).map((item, index) => (
              <Button
                justify="space-between"
                fullWidth
                leftSection={<Badge>{index + 4} </Badge>}
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
