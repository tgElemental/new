import { Button, Group } from '@mantine/core';
import WebApp from '@twa-dev/sdk';
import useUser from '../hooks/useUser';
import { useClipboard } from '@mantine/hooks';
import { IconCopy, IconUserPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const InvitePage = () => {
  const clipboard = useClipboard({ timeout: 500 });
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [invitelink, setInvitelink] = useState(''); // State to store invitelink

  useEffect(() => {
    if (user && user.userid) {
      const link = user.userid.toString(36);
      setInvitelink(link);
      setIsLoading(false); // Set loading to false once user state is loaded and invitelink is set
    }
  }, [user]);

  const invite = () => {
    if (!isLoading) {
      WebApp.switchInlineQuery(
        'به  بازی  عناصر  بپیوندید  و ۲۰  عنصر  جدید  برای  بازی  دریافت  کنید https://t.me/elementalgamebot?start=' +
          invitelink,
        ['users']
      );
    }
  };

  return (
    <>
      <h1>دعوت دوستان</h1>
      کد معرف شما : {invitelink} <br />
      دوستان خود را به بازی عناصر دعوت کنید با دعوت هر نفر ۲۰ عنصر جدید، ۵ عدد
      از هر عنصر دریافت می‌کنید. <br />
      <Group gap={'xs'}>
        <Button
          onClick={invite}
          leftSection={<IconUserPlus />}
          disabled={isLoading} // Disable button if loading
        >
          دعوت
        </Button>

        <Button
          color={clipboard.copied ? 'teal' : 'blue'}
          onClick={() =>
            clipboard.copy('https://t.me/elementalgamebot?start=' + invitelink)
          }
          leftSection={<IconCopy />}
          disabled={isLoading} // Disable button if loading
        >
          {clipboard.copied ? 'کپی شد' : 'کپی لینک دعوت'}
        </Button>
      </Group>
      دعوت شده های شما : {user.invited_count}
    </>
  );
};

export default InvitePage;
