import { Box, Button, Group } from "@mantine/core";
import { IconDownload, IconHome2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Box pb={10}>
      <Group grow>
        <Link to={"/"}>
          <Button
            variant="gradient"
            leftSection={<IconHome2 size={14} />}
            size="compact-xs"
          >
            {" "}
            شروع
          </Button>
        </Link>
        <Link to={"/help"}>
          <Button
            variant="gradient"
            rightSection={<IconDownload size={14} />}
            size="compact-xs"
          >
            {" "}
            راهنما
          </Button>
        </Link>

        <Link to={"/game"}>
          <Button
            variant="gradient"
            rightSection={<IconDownload size={14} />}
            size="compact-xs"
          >
            {" "}
            بازی
          </Button>
        </Link>

        <Link to={"/invite"}>
          <Button
            variant="gradient"
            rightSection={<IconDownload size={14} />}
            size="compact-xs"
          >
            دعوت
          </Button>
        </Link>

        <Link to={"/ranking"}>
          <Button
            variant="gradient"
            rightSection={<IconDownload size={14} />}
            size="compact-xs"
          >
            رده‌بندی
          </Button>
        </Link>

        <Link to={"/elements"}>
          <Button
            variant="gradient"
            rightSection={<IconDownload size={14} />}
            size="compact-xs"
          >
            عناصر
          </Button>
        </Link>
      </Group>
    </Box>
  );
}
