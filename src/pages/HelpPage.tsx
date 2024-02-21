import { Center, Loader, SimpleGrid, Skeleton } from "@mantine/core";

const HelpPage = () => {
  return (
    <>
      <h1>راهنما</h1>
      <SimpleGrid cols={3} p={"xs"}>
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
      <Skeleton height={20} mt={10} p={10} width="100%" radius="xs" />
    </>
  );
};

export default HelpPage;
