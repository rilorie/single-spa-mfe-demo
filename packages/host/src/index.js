import { registerApplication, start } from 'single-spa';

registerApplication(
  'content',
  () => import('content/Content'),
  location => location.pathname.startsWith('/')
);

start();
