import { Button } from '@mantine/core';
import { IconHeartHandshake } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export default function Nav() {
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
