import { index, route, type RouteConfig } from '@react-router/dev/routes';

const mainNavigationRoutes = [
  index('routes/home/home.tsx'),
  route('breadcrumb', 'routes/breadcrumb/breadcrumb.tsx'),
  route('form', 'routes/form/form.tsx'),
  route('button', 'routes/button/button.tsx'),
  route('modal', 'routes/modal/modal.tsx'),
  route('pl4integration', 'routes/pl4integration/pl4integration.tsx'),
];

export default [route('', 'routes/layout.tsx', mainNavigationRoutes)] satisfies RouteConfig;
