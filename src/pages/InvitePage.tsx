import { Button } from "@mantine/core";
import WebApp from "@twa-dev/sdk";
import useUser from "../hooks/useUser";

const InvitePage = () => {
  const user = useUser();
  const invitelink: string = user.userid.toString(36);
  const invite = () =>
    WebApp.switchInlineQuery(
      "به بازی عناصر بپیوندید و ۲۰ عنصر جدید برای بازی دریافت کنید https://t.me/elementalgamebot?start=" +
        invitelink,
      ["users"],
    );
  return (
    <>
      <h1>دعوت دوستان</h1>
      کد معرف شما : {invitelink} <br />
      دوستان خود را به بازی عناصر دعوت کنید با دعوت هر نفر ۲۰ عنصر جدید دریافت
      <br />
      میکنید ۵ عدد از هر عنصر <br />
      <Button onClick={invite}>دعوت</Button>
      <br />
      دعوت شده های شما : {user.invited_count}
      {/* <SimpleGrid cols={3} p={"xs"}>
        <Skeleton height={150} width={"100%"} mb="xl" />
        <Skeleton height={150} width={"100%"} mb="xl" />
        <Skeleton height={150} width={"100%"} mb="xl" />
      </SimpleGrid>
      <Center>
        <Loader color="blue" size="xl" type="dots" />
      </Center>
      <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
      <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
      <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
      <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
      <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" /> */}
    </>
  );
};

export default InvitePage;
