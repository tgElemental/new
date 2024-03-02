import {
  Center,
  Indicator,
  LoadingOverlay,
  Modal,
  SimpleGrid,
  Space,
} from '@mantine/core';
import { DraggableBlockquote } from '../components/DraggableBlockquote';
import data from '@emoji-mart/data';
import { init } from 'emoji-mart';
import { notifications } from '@mantine/notifications';
import useUser from '../hooks/useUser';
import axios from 'axios';
import GameMessage from '../components/GameMessage';
import { useSetState } from '@mantine/hooks';
import WebApp from '@twa-dev/sdk';
import { useCallback } from 'react';
const vibration = WebApp.HapticFeedback;

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

const GamePage = () => {
  const createEmojiComponent = (id: string, size = '2em') => (
    <div style={{ zIndex: 10 }}>
      <em-emoji id={id} Size={size}></em-emoji>
    </div>
  );

  const windemoji = createEmojiComponent('wind_blowing_face');
  const soilemoji = createEmojiComponent('large_brown_circle');
  const fireemoji = createEmojiComponent('fire');
  const wateremoji = createEmojiComponent('droplet');
  const { user, isLoading } = useUser();
  const [state, setState] = useSetState({
    visible: false,
    modalOpened: false,
    elementName: '',
    botElementName: '',
    score: 0,
    extra: '',
    remain: 0,
    text: '',
    status: 1,
  });

  const showNotification = (elementName: string, message: string) => {
    notifications.show({
      title: elementName,
      message: message,
      loading: true,
    });
  };

  const clicking = useCallback(
    (element: string) => {
      vibration.impactOccurred('heavy');
      const elementNames: { [key: string]: string } = {
        water: 'آب',
        wind: 'باد',
        soil: 'خاک',
        fire: 'آتش',
        tree: 'درخت',
        light: 'نور',
      };
      const elementName = elementNames[element];
      const message = `یه دونه کارت عنصر ${elementName} بازی کردی، بزار ببینیم چی میشه !`;
      return async () => {
        setState({ visible: true });
        showNotification(elementName, message);
        try {
          const response = await axios.get(
            `https://api.rahomaskan.com/api/game?element=${element}&uid=${user.userid}`
          );

          setState({
            elementName: elementNames[element],
            botElementName: elementNames[response.data.botelement],
            score: response.data.score,
            extra: response.data.extra ? elementNames[response.data.extra] : '',
            remain: response.data.remain,
            modalOpened: true,
            text: response.data.text,
            status: response.data.status,
          });
          notifications.clean(); // close notifications
        } catch (error) {
          console.error('Error playing game:', error);
          notifications.show({
            title: 'خراب شد',
            message: 'اینترنتت وصله؟',
          });
        }
      };
    },
    [user.userid, showNotification, setState]
  );

  const { refresh } = useUser();
  const refreshUserData = async () => {
    await refresh();
  };

  const handleModalClose = () => {
    setState({ modalOpened: false, visible: false });
    refreshUserData(); // Refresh user data after modal closes
  };

  return (
    <>
      <Space h={'xl'} />
      <SimpleGrid cols={2}>
        <DraggableBlockquote
          color={'blue'}
          id="water"
          icon={wateremoji}
          onClick={clicking('water')}
          // bg={'blue'}
        >
          <LoadingOverlay
            visible={state.visible}
            zIndex={9}
            loaderProps={{ color: 'dark', type: 'bars', size: 'xs' }}
            bg={'blue'}
          />
          <Indicator
            disabled={user.water == 0}
            color="blue"
            size="lg"
            radius="md"
            label={isLoading ? '' : user.water}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            آب
          </Indicator>
        </DraggableBlockquote>
        <DraggableBlockquote
          color={'cyan'}
          // bg={'cyan'}
          id="wind"
          icon={windemoji}
          onClick={clicking('wind')}
        >
          <LoadingOverlay
            visible={state.visible}
            zIndex={9}
            loaderProps={{ color: 'dark', type: 'bars', size: 'xs' }}
            bg={'teal'}
          />
          <Indicator
            disabled={user.wind == 0}
            color="cyan"
            size="lg"
            radius="md"
            label={isLoading ? '' : user.wind}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            باد
          </Indicator>
        </DraggableBlockquote>
        <DraggableBlockquote
          color={'brown'}
          // bg={'brown'}
          id="soil"
          icon={soilemoji}
          onClick={clicking('soil')}
        >
          <LoadingOverlay
            visible={state.visible}
            zIndex={9}
            loaderProps={{ color: 'dark', type: 'bars', size: 'xs' }}
            bg={'brown'}
          />
          <Indicator
            disabled={user.earth == 0}
            color="brown"
            size="lg"
            radius="md"
            label={isLoading ? '' : user.earth}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            خاک
          </Indicator>
        </DraggableBlockquote>
        <DraggableBlockquote
          // bg={'orange'}
          id="fire"
          icon={fireemoji}
          onClick={clicking('fire')}
          color={'orange'}
        >
          <LoadingOverlay
            visible={state.visible}
            zIndex={9}
            loaderProps={{ color: 'dark', type: 'bars', size: 'xs' }}
            bg={'orange'}
          />
          <Indicator
            disabled={user.fire == 0}
            color="orange"
            size="lg"
            radius="md"
            label={isLoading ? '' : user.fire}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            آتش
          </Indicator>
        </DraggableBlockquote>
      </SimpleGrid>

      <Modal.Root
        centered
        opened={state.modalOpened}
        onClose={handleModalClose}
        transitionProps={{
          transition: 'slide-down',
          duration: 300,
          timingFunction: 'linear',
        }}
        size="75%"
      >
        <Modal.Overlay />
        <Modal.Content bg={state.status === 0 ? 'red' : 'white'}>
          <Modal.Header bg={state.status === 0 ? 'red' : 'white'}>
            <Modal.Title style={{ fontWeight: 900, fontSize: 20 }}>
              <Center>نتیجه این راند</Center>
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          {/* <Modal.Body>{modalMessage}</Modal.Body> */}
          <Modal.Body>
            <GameMessage
              status={state.status}
              elementName={state.elementName}
              botElementName={state.botElementName}
              score={state.score}
              extraElementName={state.extra}
              remain={state.remain}
              text={state.text}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default GamePage;
