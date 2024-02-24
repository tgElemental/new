import { useDrag } from "react-dnd";
import { Blockquote } from "@mantine/core";
import { ReactNode } from "react";

interface DraggableBlockquoteProps {
  id: string; // Assuming 'id' is a string, adjust the type as necessary
  icon: ReactNode; // Assuming 'icon' is a ReactNode, adjust the type as necessary
  children: ReactNode; // Assuming 'children' is a ReactNode, adjust the type as necessary
}

export const DraggableBlockquote: React.FC<DraggableBlockquoteProps> = ({
  id,
  icon,
  children,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Blockquote",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Blockquote
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      icon={icon}
      iconSize={60}
      m="xs"
      w={"75%"}
    >
      {children}
    </Blockquote>
  );
};
