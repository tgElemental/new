// GameMessage.tsx
import { Alert, Text, Timeline } from '@mantine/core';
import React from 'react';
import data from '@emoji-mart/data';
import { init } from 'emoji-mart';
import ConfettiExplosion from 'react-confetti-explosion';
import { IconInfoCircle } from '@tabler/icons-react';
import { ElementFarsi, elementEmojiid } from '../const/elementsConstants';
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
              bullet={
                <em-emoji
                  id={elementEmojiid[elementName as ElementFarsi]}
                  size="2em"
                ></em-emoji>
              }
              title={elementName}
            >
              <Text c="dimmed" size="sm">
                عنصر شما
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={
                <em-emoji
                  id={elementEmojiid[botElementName as ElementFarsi]}
                  size="2em"
                ></em-emoji>
              }
              title={botElementName}
            >
              <Text c="dimmed" size="sm">
                عنصر رقیب
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={
                <em-emoji
                  id={elementEmojiid['نتیجه' as ElementFarsi]}
                  size="2em"
                ></em-emoji>
              }
              title="نتیجه"
            >
              <Text c="dimmed" size="sm">
                {text}
              </Text>
            </Timeline.Item>
            {extraElementName ? (
              <Timeline.Item
                bullet={
                  <em-emoji
                    id={elementEmojiid['جایزه' as ElementFarsi]}
                    size="2em"
                  ></em-emoji>
                }
                title="جایزه"
              >
                <ConfettiExplosion
                  zIndex={9999999999}
                  particleCount={20}
                  colors={['green']}
                  width={20}
                  height={20}
                />
                <Text c="dimmed" size="sm">
                  {extraElementName}
                </Text>
              </Timeline.Item>
            ) : null}
            {score > 0 ? (
              <Timeline.Item
                bullet={
                  <em-emoji
                    id={elementEmojiid['امتیاز' as ElementFarsi]}
                    size="2em"
                  ></em-emoji>
                }
                title="امتیاز"
                lineVariant="dashed"
              >
                <Text c="dimmed" size="sm">
                  {score}
                </Text>
              </Timeline.Item>
            ) : null}
            <Timeline.Item
              bullet={
                <em-emoji
                  id={elementEmojiid[elementName as ElementFarsi]}
                  size="2em"
                ></em-emoji>
              }
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
