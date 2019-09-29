import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import Loading from 'components/Loading';

// 引入页面
const Home = loadable({
    loader: () => import('pages/home'),
    loading: Loading,
    timeout: 10000, // 10 seconds
});
const Page = loadable({
    loader: () => import('pages/page'),
    loading: Loading,
    timeout: 10000,
});
const Counter = loadable({
    loader: () => import('pages/counter'),
    loading: Loading,
    timeout: 10000,
});
const UserInfo = loadable({
    loader: () => import('pages/UserInfo'),
    loading: Loading,
    timeout: 10000,
});
const NotFound = loadable({
    loader: () => import('pages/notfound'),
    loading: Loading,
    timeout: 10000,
});

// 路由
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page" component={Page}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/userinfo" component={UserInfo}/>
        <Route component={NotFound}/>
    </Switch>
);

export default getRouter;