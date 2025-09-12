import { registerApplication, start } from 'single-spa';

// registerApplication(
//   'content',
//   () => import('content/Content'),
//   location => location.pathname.startsWith('/')
// );

// registerApplication(
//   'shared-react-app',
//   () => import('sharedReactApp/singleSpa'),
//   location => location.pathname.startsWith('/')
// );

registerApplication(
  'helloWorldComponent',
  () => import('helloWorldComponent/singleSpa'),
  location => location.pathname.startsWith('/')
);


start();
