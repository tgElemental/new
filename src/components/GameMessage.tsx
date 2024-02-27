// GameMessage.tsx
import { Text, Timeline } from "@mantine/core";
import { IconGitBranch } from "@tabler/icons-react";
import React from "react";
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
interface GameMessageProps {
  elementName: string;
  botElementName: string;
  score: number;
  extraElementName?: string;
  remain: number;
  text: string;
}
interface EmojiMap {
  [key: string]: JSX.Element;
}

const elementToEmojiMap: EmojiMap = {
  آب: <em-emoji id="droplet" Size="2em"></em-emoji>,
  باد: <em-emoji id="wind_blowing_face" Size="2em"></em-emoji>,
  خاک: <em-emoji id="large_brown_circle" Size="2em"></em-emoji>,
  آتش: <em-emoji id="fire" Size="2em"></em-emoji>,
  هوا: <em-emoji id="wind_blowing_face" Size="2em"></em-emoji>,
  درخت: <em-emoji id="deciduous_tree" Size="2em"></em-emoji>,
  نور: <em-emoji id="sunny" Size="2em"></em-emoji>,
};
const renderEmoji = (elementName: string) => {
  return (
    elementToEmojiMap[elementName] || (
      <em-emoji id="question_mark" Size="2em"></em-emoji>
    )
  ); // Fallback to a question mark emoji if the element name is not found
};
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
        <Timeline.Item bullet={renderEmoji(elementName)} title="عنصر شما">
          <Text c="dimmed" size="sm">
            {elementName}
          </Text>
        </Timeline.Item>
        <Timeline.Item bullet={renderEmoji(botElementName)} title="عنصر رقیب">
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
