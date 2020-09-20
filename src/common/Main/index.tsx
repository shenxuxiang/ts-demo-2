import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';

interface IProps {
  children: any;
}

export default class Main extends PureComponent<IProps, {}> {
  public render() {
    return (
      <>
        <header className="ts-header">
          <NavLink
            to="/home"
            className="ts-header-item"
            activeClassName="active"
          >
            home
          </NavLink>
          <NavLink
            to="/goods"
            className="ts-header-item"
            activeClassName="active"
          >
            goods
          </NavLink>
        </header>
        {
          React.Children.map(this.props.children, child => child)
        }
      </>
    );
  }
}