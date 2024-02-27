// GameMessage.tsx
import { Text, Timeline } from "@mantine/core";
import { IconGitBranch } from "@tabler/icons-react";
import React from "react";

interface GameMessageProps {
  elementName: string;
  botElementName: string;
  score: number;
  extraElementName?: string;
  remain: number;
  text: string;
}

const GameMessage: React.FC<GameMessageProps> = ({
  elementName,
  botElementName,
  score,
  extraElementName,
  remain,
  text,
}) => {
  return (
    <>
      <Timeline color="green" active={3} lineWidth={3} bulletSize={40}>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="عنصر شما">
          <Text c="dimmed" size="sm">
            {elementName}
          </Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="عنصر رقیب">
          <Text c="dimmed" size="sm">
            {botElementName}
          </Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="نتیجه">
          <Text c="dimmed" size="sm">
            {text}
          </Text>
        </Timeline.Item>
        {extraElementName ? (
          <Timeline.Item bullet={<IconGitBranch size={12} />} title="جایزه">
            <Text c="dimmed" size="sm">
              {extraElementName}
            </Text>
          </Timeline.Item>
        ) : (
          <Timeline.Item
            bullet={<IconGitBranch size={12} />}
            title="بدون جایزه"
          >
            <Text c="dimmed" size="sm">
              نور و درختی نگرفتی
            </Text>
          </Timeline.Item>
        )}
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="امتیاز">
          <Text c="dimmed" size="sm">
            {score}
          </Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="باقیمانده">
          <Text c="dimmed" size="sm">
            {remain}
          </Text>
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default GameMessage;
