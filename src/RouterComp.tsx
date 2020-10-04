import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routerList from './RouterList';
import Main from './common/Main';

export default function RouterComp() {
  return (
    <HashRouter>
      <Main>
        <Switch>
          {
            routerList.map(opts => <Route {...opts} key={opts.path} />)
          }
        </Switch>
      </Main>
    </HashRouter>
  );
}


