import React, { Component, createRef, MouseEventHandler } from 'react';
import scrollToPosition from '../../utils/scrollToPosition';
import { DigitalAnimate } from '../../utils/numberIterator';
import HooksComp from '../../components/Hooks';

import './index.less';
interface IProps {
  [propName: string]: any;
}

interface IState {
  [propName: string]: any;
}

export default class Home extends Component<IProps, IState> {
  public mainRef: any;
  public titleRef: any;
  public handleClick: MouseEventHandler<HTMLDivElement>

  public constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
      text: 'hello world'
    };
    this.mainRef = createRef();
    this.titleRef = createRef();
    this.handleClick = this.handleClicks.bind(this);
  }

  public componentDidMount() {
    const animate = new DigitalAnimate(this.titleRef.current, 0, 5, 1, 0, 1000);
    animate.start();
  }

  public handleClicks (event: React.MouseEvent){
    scrollToPosition(0, this.mainRef.current, 10);
    this.setState({ text: 'hi~' });
  }

  public render() {
    return (
      <div ref={this.mainRef} className="mt-main" onClick={this.handleClick}>
        <div ref={this.titleRef}>5s</div>
        <HooksComp text={this.state.text} />
        <div style={{ height: 300, background: 'green' }}>green</div>
        <div style={{ height: 300, background: 'white' }}>white</div>
        <div style={{ height: 300, background: 'black' }}>black</div>
        <div style={{ height: 300, background: 'skyblue' }}>skyblue</div>
        <h1>home ${this.state.count}</h1>
      </div>
    );
  }
}
