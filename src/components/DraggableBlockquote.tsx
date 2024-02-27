import {
  Blockquote,
  Card,
  Group,
  SimpleGrid,
  Space,
  ThemeIcon,
} from "@mantine/core";
import {
  IconSeeding,
  IconShieldChevron,
  IconShovel,
} from "@tabler/icons-react";
import { ReactNode } from "react";

interface DraggableBlockquoteProps {
  id: string; // Assuming 'id' is a string, adjust the type as necessary
  icon: ReactNode; // Assuming 'icon' is a ReactNode, adjust the type as necessary
  children: ReactNode; // Assuming 'children' is a ReactNode, adjust the type as necessary
  onClick?: () => void;
}

export const DraggableBlockquote: React.FC<DraggableBlockquoteProps> = ({
  icon,
  children,
  onClick,
}) => {
  return (
    <Blockquote
      onClick={onClick}
      onTouchEndCapture={onClick}
      icon={icon}
      iconSize={60}
      m="xs"
      pl={5}
      pb={5}
      pr={"xs"}
      pt={"xs"}
      w={"95%"}
      ms={"xs"}
      radius={0}
    >
      <Space h="xl" />
      {children}
      <Space h="xl" />
      <SimpleGrid cols={2}>
        <Card padding="xs" shadow="xs" withBorder radius={0} bg={"blue"}></Card>
        <Card padding="xs" shadow="xs" withBorder radius={0} bg={"cyan"}></Card>
        <Card
          padding="xs"
          shadow="xs"
          withBorder
          radius={0}
          bg={"indigo"}
        ></Card>
        <Card padding="xs" shadow="xs" withBorder radius={0} bg={"pink"}></Card>
      </SimpleGrid>
      <Space h="xl" />
      <Group gap={"xs"} justify="space-between">
        <ThemeIcon radius="xl" size="xl" color="green">
          <IconSeeding style={{ width: "70%", height: "70%" }} />
        </ThemeIcon>
        <ThemeIcon radius="xl" size="xl" color="indigo">
          <IconShovel style={{ width: "70%", height: "70%" }} />
        </ThemeIcon>
        <ThemeIcon radius="xl" size="xl" color="violet">
          <IconShieldChevron style={{ width: "70%", height: "70%" }} />
        </ThemeIcon>
      </Group>
    </Blockquote>
  );
};
