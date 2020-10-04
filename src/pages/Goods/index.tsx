import React, { Component } from 'react';

interface IProps {
  [propName: string]: any;
}

interface IState {
  [propName: string]: any;
}

export default class Goods extends Component<IProps, IState> {
  public render() {
    return (
      <div>goods123456</div>
    );
  }
}
