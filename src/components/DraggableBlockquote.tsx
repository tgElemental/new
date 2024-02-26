import { Blockquote, Card, SimpleGrid } from "@mantine/core";
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
    >
      {children}
      <hr />
      <SimpleGrid cols={2}>
        <Card padding="xs" shadow="xs" withBorder>
          قویتر از
        </Card>
        <Card padding="xs" shadow="xs" withBorder>
          ضعیفتر از
        </Card>
        <Card padding="xs" shadow="xs" withBorder>
          برابر با
        </Card>
        <Card padding="xs" shadow="xs" withBorder>
          تولید کننده‌ی
        </Card>
      </SimpleGrid>
    </Blockquote>
  );
};
