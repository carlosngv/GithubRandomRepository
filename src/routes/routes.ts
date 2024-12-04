import { lazy } from 'react';
import { ErrorPage } from '../shared/pages/ErrorPage';

const lazyAuthLayout = lazy( () => import('../auth/layout/AuthLayout') );
const lazyRepositoryLayout = lazy( () => import('../repository/layout/RepositoryLayout') );

type ReactElement = () => JSX.Element;

interface Route {
    path: string;
    Component: ReactElement | React.LazyExoticComponent<ReactElement>;
    name: string;
}

export const routes: Route[] = [
    { path: '/auth/*', Component: lazyAuthLayout, name: 'AuthLayout' },
    { path: '/repositories/*', Component: lazyRepositoryLayout, name: 'RepositoryLayout' },
    { path: '*', Component: ErrorPage, name: 'ErrorPage' },
]
