import { Button } from '@mantine/core';
import { IconHeartHandshake } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export default function Nav() {
  // const reversgradient = { from: "#c3b091", to: "#0e87cc", deg: 45 };
  return (
    <>
      <Link to={'/invite'}>
        <Button
          variant="gradient"
          leftSection={<IconHeartHandshake size={14} />}
          size="compact-xs"
        >
          دعوت
        </Button>
      </Link>
    </>
  );
}
