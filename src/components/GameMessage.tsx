// GameMessage.tsx
import { Card, Text, Timeline } from "@mantine/core";
import React from "react";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import ConfettiExplosion from "react-confetti-explosion";
import WebApp from "@twa-dev/sdk";

const vibration = WebApp.HapticFeedback;

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
  status: number;
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
  status,
}) => {
  {
    status === 0 ? "" : vibration.impactOccurred("heavy");
  }
  return (
    <>
      {status === 0 ? (
        <Card color="white" shadow="xl" m={"xl"} p={"xl"}>
          {text}
        </Card>
      ) : (
        <>
          <ConfettiExplosion zIndex={9999999999} />
          <Timeline color="green" active={3} lineWidth={3} bulletSize={40}>
            <Timeline.Item bullet={renderEmoji(elementName)} title="عنصر  شما">
              <Text c="dimmed" size="sm">
                {elementName}
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={renderEmoji(botElementName)}
              title="عنصر  رقیب"
            >
              <Text c="dimmed" size="sm">
                {botElementName}
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<em-emoji id="trophy" Size="2em"></em-emoji>}
              title="نتیجه"
            >
              <Text c="dimmed" size="sm">
                {text}
              </Text>
            </Timeline.Item>
            {extraElementName ? (
              <Timeline.Item
                bullet={<em-emoji id="gift" Size="2em"></em-emoji>}
                title="جایزه"
              >
                <Text c="dimmed" size="sm">
                  {extraElementName}
                </Text>
              </Timeline.Item>
            ) : (
              ""
            )}
            <Timeline.Item
              bullet={<em-emoji id="moneybag" Size="2em"></em-emoji>}
              title="امتیاز"
            >
              <Text c="dimmed" size="sm">
                {score}
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<em-emoji id="package" Size="2em"></em-emoji>}
              title="باقیمانده"
            >
              <Text c="dimmed" size="sm">
                {remain}
              </Text>
            </Timeline.Item>
          </Timeline>
        </>
      )}
    </>
  );
};

export default GameMessage;
