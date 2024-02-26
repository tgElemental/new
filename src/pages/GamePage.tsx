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
import { useState } from "react";
import axios from "axios";
import GameMessage from "../components/GameMessage"; // Adjust the import path as necessary

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
  const [visible, setVisible] = useState(false);
  const [modalOpened, setModalOpened] = useState(false); // State to control modal visibility
  // const [modalMessage, setModalMessage] = useState("");
  const [elementName, setElementName] = useState("");
  const [botelementName, setBotElementName] = useState("");

  const [score, setScore] = useState(0);
  const [extra, setExtra] = useState("");
  const [remain, setRemain] = useState(0);

  function clicking(element: string): () => void {
    return async () => {
      setVisible(true);
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

      notifications.show({
        title: elementName,
        message: message,
        loading: true,
      });
      try {
        const response = await axios.get(
          `https://api.rahomaskan.com/api/game?element=${element}&uid=${user.userid}`,
        );

        // const modalmessage =
        //   `در  مقابل <strong>${elementName}</strong>  تو،  روبات  یک <strong>${elementNames[response.data.botelement]}</strong>  بازی  کرد<br />` +
        //   `${response.data.score}  امتیاز  برات  ثبت  شد ` +
        //   (response.data.extra
        //     ? `<strong>یه  دونه ${elementNames[response.data.extra]}  جدید  هم  گرفتی</strong> `
        //     : "هیچ  عنصر  اضافی  دریافت  نشد") +
        //   `<br />${response.data.remain}  تا  دیگه  هم  از  این  عنصر  داری`;

        setElementName(elementNames[element]);

        // setModalMessage(modalmessage);
        setBotElementName(elementNames[response.data.botelement]);
        setScore(response.data.score);
        setExtra(response.data.extra ? elementNames[response.data.extra] : "");
        setRemain(response.data.remain);
        notifications.clean(); // close notifications
        setModalOpened(true); // Open the modal
      } catch (error) {
        console.error("Error playing game:", error);
        // Handle the error here
      }
    };
  }

  const { refresh } = useUser();
  const refreshUserData = async () => {
    // Assuming useUser has a method to refresh data
    await refresh();
  };

  const handleModalClose = () => {
    setModalOpened(false);
    setVisible(false);
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
            visible={visible}
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
            visible={visible}
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
            visible={visible}
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
            visible={visible}
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
        opened={modalOpened}
        onClose={handleModalClose}
        transitionProps={{
          transition: "slide-down",
          duration: 300,
          timingFunction: "linear",
        }}
        size="75%"
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title style={{ fontWeight: 900, fontSize: 20 }}>
              <Center>نتیجه این راند</Center>
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          {/* <Modal.Body>{modalMessage}</Modal.Body> */}
          <Modal.Body>
            <GameMessage
              elementName={elementName}
              botElementName={botelementName}
              score={score}
              extraElementName={extra}
              remain={remain}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default GamePage;
