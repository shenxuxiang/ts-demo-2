import AsyncLoader from './common/AsyncLoader';

interface Config {
  exact: boolean;
  path: string;
  component: any;
}

const routerList: Array<Config> = [
  {
    exact: true,
    path: '/home',
    component: AsyncLoader(() => import('./pages/Home'))
  },
  {
    exact: true,
    path: '/goods',
    component: AsyncLoader(() => import('./pages/Goods'))
  },
  {
    exact: false,
    path: '*',
    component: AsyncLoader(() => import('./pages/Home'))
  }
];

export default routerList;
