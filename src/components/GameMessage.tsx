// GameMessage.tsx
import { Alert, Text, Timeline } from '@mantine/core';
import React from 'react';
import data from '@emoji-mart/data';
import { init } from 'emoji-mart';
import ConfettiExplosion from 'react-confetti-explosion';
import { IconInfoCircle } from '@tabler/icons-react';

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
  return (
    <>
      {status === 0 ? (
        <Alert
          variant="filled"
          color="red"
          title="خطا"
          icon={<IconInfoCircle />}
        >
          {text}
        </Alert>
      ) : (
        <>
          <ConfettiExplosion zIndex={9999999999} />
          <Timeline color="green" active={3} lineWidth={3} bulletSize={40}>
            <Timeline.Item
              bullet={renderEmoji(elementName)}
              title={elementName}
            >
              <Text c="dimmed" size="sm">
                عنصر شما
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={renderEmoji(botElementName)}
              title={botElementName}
            >
              <Text c="dimmed" size="sm">
                عنصر رقیب
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
            ) : null}
            {score > 0 ? (
              <Timeline.Item
                bullet={<em-emoji id="moneybag" Size="2em"></em-emoji>}
                title="امتیاز"
                lineVariant="dashed"
              >
                <Text c="dimmed" size="sm">
                  {score}
                </Text>
              </Timeline.Item>
            ) : null}
            <Timeline.Item
              bullet={renderEmoji(elementName)}
              title="باقیمانده"
              lineVariant="dotted"
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
