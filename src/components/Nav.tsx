import { Button, Group } from "@mantine/core";
import { IconDownload, IconHome2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Nav() {
  const reversgradient = { from: "#c3b091", to: "#0e87cc", deg: 45 };
  return (
    <>
      <Group gap="xs">
        <Link to={"/"}>
          <Button
            variant="gradient"
            gradient={reversgradient}
            leftSection={<IconHome2 size={14} />}
            size="compact-xs"
          >
            شروع
          </Button>
        </Link>
        <Link to={"/help"}>
          <Button
            variant="gradient"
            gradient={reversgradient}
            rightSection={<IconDownload size={14} />}
            size="compact-xs"
          >
            راهنما
          </Button>
        </Link>

        <Link to={"/game"}>
          <Button
            variant="gradient"
            gradient={reversgradient}
            rightSection={<IconDownload size={14} />}
            size="compact-xs"
          >
            بازی
          </Button>
        </Link>
      </Group>
      <Group justify="flex-end" gap="xs">
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
    </>
  );
}
