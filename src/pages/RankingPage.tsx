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
}

const RankingPage = () => {
  const icon = <em-emoji id="moneybag" Size="2em"></em-emoji>;
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

  return (
    <>
      {loading ? (
        <Center>
          <Loader color="blue" size="xl" type="dots" />
        </Center>
      ) : (
        <>
          <SimpleGrid cols={3} p={"xs"}>
            {data.slice(0, 3).map((item, index) => (
              <Card withBorder shadow="sm" radius="md" key={index}>
                <Card.Section withBorder inheritPadding py="xs">
                  <Group justify="space-between">
                    <Text fw={900}>{`نفر ${index + 1}`} </Text>
                  </Group>
                </Card.Section>
                <Text mt="sm" c="dimmed" size="sm">
                  <Text span inherit c="var(--mantine-color-anchor)">
                    {item.name}
                  </Text>
                </Text>
                <Card.Section mt="sm">
                  <Button
                    justify="space-between"
                    fullWidth
                    leftSection={icon}
                    variant="default"
                  >
                    {item.score}
                  </Button>
                </Card.Section>
              </Card>
            ))}
          </SimpleGrid>
          <Stack
            // h={300}
            pt={"lg"}
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
