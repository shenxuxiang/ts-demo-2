import React, { FC, memo, useCallback, useState } from 'react';
import './index.less';

interface IProps {
  text: string;
  [propName: string]: any;
}

let HooksComp: FC<IProps>;
HooksComp = function(props: IProps) {
  const [count, setCount ] = useState(() => {
    console.log('##########');
    return 0;
  });
  const handleStart = useCallback((event: React.TouchEvent) => {
    console.log(event.touches[0].clientX);
    setCount(preCount => {
      console.log(preCount);
      return preCount + 1;
    });
  }, []);

  const handleMove = useCallback((event: React.TouchEvent) => {
    console.log(event.changedTouches[0].clientX);
  }, []);

  return (
    <div onTouchStart={handleStart} onTouchMove={handleMove}>
      {props.text}
      <h1>{count}</h1>
    </div>
  );
};

export default memo(HooksComp);
