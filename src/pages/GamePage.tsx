import {
  Center,
  Indicator,
  LoadingOverlay,
  Modal,
  SimpleGrid,
} from "@mantine/core";
import { DraggableBlockquote } from "../components/DraggableBlockquote";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import { notifications } from "@mantine/notifications";
import useUser from "../hooks/useUser";
import axios from "axios";
import GameMessage from "../components/GameMessage";
import { useSetState } from "@mantine/hooks";

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

const GamePage = () => {
  const windemoji = (
    <div style={{ zIndex: 10 }}>
      <em-emoji id="wind_blowing_face" Size="2em"></em-emoji>
    </div>
  );
  const soilemoji = (
    <div style={{ zIndex: 10 }}>
      <em-emoji id="large_brown_circle" Size="2em"></em-emoji>
    </div>
  );
  const fireemoji = (
    <div style={{ zIndex: 10 }}>
      <em-emoji id="fire" Size="2em"></em-emoji>
    </div>
  );
  const wateremoji = (
    <div style={{ zIndex: 10 }}>
      <em-emoji id="droplet" Size="2em"></em-emoji>
    </div>
  );
  const { user, isLoading } = useUser();
  const [state, setState] = useSetState({
    visible: false,
    modalOpened: false,
    elementName: "",
    botElementName: "",
    score: 0,
    extra: "",
    remain: 0,
    text: "",
    status: 1,
  });

  const showNotification = (elementName: string, message: string) => {
    notifications.show({
      title: elementName,
      message: message,
      loading: true,
    });
  };

  function clicking(element: string): () => void {
    const elementNames: { [key: string]: string } = {
      water: "آب",
      wind: "باد",
      soil: "خاک",
      fire: "آتش",
      tree: "درخت",
      light: "نور",
    };
    const elementName = elementNames[element]; // Use 'element' directly
    const message = `یه   دونه   کارت   عنصر  ${elementName}  بازی   کردی،   بزار   ببینیم   چی   میشه !`;
    // notifications.show({
    //   title: elementName,
    //   message: message,
    //   loading: true,
    // });
    return async () => {
      setState({ visible: true });
      showNotification(elementName, message);
      try {
        const response = await axios.get(
          `https://api.rahomaskan.com/api/game?element=${element}&uid=${user.userid}`,
        );
        setState({
          elementName: elementNames[element],
          botElementName: elementNames[response.data.botelement],
          score: response.data.score,
          extra: response.data.extra ? elementNames[response.data.extra] : "",
          remain: response.data.remain,
          modalOpened: true,
          text: response.data.text,
          status: response.data.status,
        });
        notifications.clean(); // close notifications
      } catch (error) {
        console.error("Error playing game:", error);
      }
    };
  }

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
      <SimpleGrid cols={2}>
        <DraggableBlockquote
          id="water"
          icon={wateremoji}
          onClick={clicking("water")}
        >
          <LoadingOverlay
            visible={state.visible}
            zIndex={9}
            overlayProps={{ radius: "sm", blur: 2 }}
            loaderProps={{ color: "pink", type: "bars" }}
            bg={"blue"}
          />
          <Indicator
            color="blue"
            size="lg"
            radius="md"
            label={isLoading ? "" : user.water}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            آب
          </Indicator>
        </DraggableBlockquote>
        <DraggableBlockquote
          id="wind"
          icon={windemoji}
          onClick={clicking("wind")}
        >
          <LoadingOverlay
            visible={state.visible}
            zIndex={9}
            overlayProps={{ radius: "sm", blur: 2 }}
            loaderProps={{ color: "pink", type: "bars" }}
            bg={"teal"}
          />
          <Indicator
            color="teal"
            size="lg"
            radius="md"
            label={isLoading ? "" : user.wind}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            باد
          </Indicator>
        </DraggableBlockquote>
        <DraggableBlockquote
          id="soil"
          icon={soilemoji}
          onClick={clicking("soil")}
        >
          <LoadingOverlay
            visible={state.visible}
            zIndex={9}
            overlayProps={{ radius: "sm", blur: 2 }}
            loaderProps={{ color: "pink", type: "bars" }}
            bg={"brown"}
          />
          <Indicator
            color="brown"
            size="lg"
            radius="md"
            label={isLoading ? "" : user.earth}
            position="middle-start"
            withBorder
            processing={isLoading}
          >
            خاک
          </Indicator>
        </DraggableBlockquote>
        <DraggableBlockquote
          id="fire"
          icon={fireemoji}
          onClick={clicking("fire")}
        >
          <LoadingOverlay
            visible={state.visible}
            zIndex={9}
            overlayProps={{ radius: "sm", blur: 2 }}
            loaderProps={{ color: "pink", type: "bars" }}
            bg={"orange"}
          />
          <Indicator
            color="orange"
            size="lg"
            radius="md"
            label={isLoading ? "" : user.fire}
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
          transition: "slide-down",
          duration: 300,
          timingFunction: "linear",
        }}
        size="75%"
      >
        <Modal.Overlay />
        <Modal.Content bg={state.status === 0 ? "red" : "white"}>
          <Modal.Header>
            <Modal.Title
              style={{ fontWeight: 900, fontSize: 20 }}
              bg={state.status === 0 ? "red" : "white"}
            >
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
