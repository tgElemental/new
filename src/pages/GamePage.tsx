import {
  Card,
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
  const [modalMessage, setModalMessage] = useState("");

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
        // Handle the response here
        console.log(response.data);
        notifications.show({
          title: "بازی",
          message:
            response.data.element +
            " | " +
            response.data.remain +
            " | " +
            response.data.status +
            " | " +
            response.data.user,
        });
        const modalmessage =
          ` در مقابل  ${elementName} تو، روبات یک ` +
          elementNames[response.data.botelement] +
          ` بازی کرد` +
          response.data.score +
          "امتیاز برات ثبت شد " +
          "یه دونه " +
          elementNames[response.data.extra] +
          "جدید هم گرفتی " +
          response.data.remain +
          " تا دیگه هم از این عنصر داری ";
        setModalMessage(modalmessage); // Set the message to display in the modal
        notifications.clean(); // close notifications
        setModalOpened(true); // Open the modal
      } catch (error) {
        console.error("Error playing game:", error);
        // Handle the error here
      }
    };
  }

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
          <hr />
          <SimpleGrid cols={2}>
            <Card shadow="xs" withBorder>
              قویتر از
            </Card>
            <Card shadow="xs" withBorder>
              ضعیفتر از
            </Card>
            <Card shadow="xs" withBorder>
              برابر با
            </Card>
            <Card shadow="xs" withBorder>
              تولید کننده‌ی
            </Card>
          </SimpleGrid>
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
          <hr />
          <SimpleGrid cols={2}>
            <Card shadow="xs" withBorder>
              قویتر از
            </Card>
            <Card shadow="xs" withBorder>
              ضعیفتر از
            </Card>
            <Card shadow="xs" withBorder>
              برابر با
            </Card>
            <Card shadow="xs" withBorder>
              تولید کننده‌ی
            </Card>
          </SimpleGrid>
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
          <hr />
          <SimpleGrid cols={2}>
            <Card shadow="xs" withBorder>
              قویتر از
            </Card>
            <Card shadow="xs" withBorder>
              ضعیفتر از
            </Card>
            <Card shadow="xs" withBorder>
              برابر با
            </Card>
            <Card shadow="xs" withBorder>
              تولید کننده‌ی
            </Card>
          </SimpleGrid>
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
          <hr />
          <SimpleGrid cols={2}>
            <Card shadow="xs" withBorder>
              قویتر از
            </Card>
            <Card shadow="xs" withBorder>
              ضعیفتر از
            </Card>
            <Card shadow="xs" withBorder>
              برابر با
            </Card>
            <Card shadow="xs" withBorder>
              تولید کننده‌ی
            </Card>
          </SimpleGrid>
        </DraggableBlockquote>
      </SimpleGrid>
      <Modal.Root
        centered
        opened={modalOpened}
        onClose={() => {
          setModalOpened(false);
          setVisible(false);
        }}
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
          <Modal.Body>{modalMessage}</Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default GamePage;
