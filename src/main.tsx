import React from 'react';
import ReactDOM from 'react-dom/client';
import { clarity } from 'react-microsoft-clarity';
import { Wrapper } from './Wrapper';
import WebApp from '@twa-dev/sdk';
clarity.init('kzhxxy2ip7');
clarity.consent();
clarity.setTag('miniapp', 'new');
WebApp.ready();
WebApp.expand();
WebApp.setBackgroundColor('#C3B091');
WebApp.setHeaderColor('#0e87cc');
WebApp.enableClosingConfirmation;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>
);
