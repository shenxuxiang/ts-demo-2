import React, { PureComponent, ReactNode } from 'react';
import { isEmpty } from '../utils';

type AsyncLoader = (compLoader: () => Promise<any>) => ReactNode;

interface IProps {
  [propName: string]: any;
}

interface IState {
  [propName: string]: any;
}

let asyncLoader: AsyncLoader;
asyncLoader = function(compLoader) {
  return class extends PureComponent<IProps, IState> {
    public readonly state: IState;

    public constructor(props: IProps) {
      super(props);
      this.state = {
        Comp: null
      };
    }

    public componentDidMount() {
      compLoader().then((response) => {
        this.setState({ Comp: response.default });
      });
    }

    public render() {
      const { Comp } = this.state;
      return isEmpty(Comp) ? <div>loading...</div> : <Comp {...this.props} /> ;
    }
  };
};

export default asyncLoader;
