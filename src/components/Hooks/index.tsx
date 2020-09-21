import React, { FC, memo, useCallback} from 'react';
import './index.less';

interface IProps {
  text: string;
  [propName: string]: any;
}

let HooksComp: FC<IProps>;
HooksComp = function(props: IProps) {
  const handleStart = useCallback((event: React.TouchEvent) => {
    console.log(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    console.log(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
  }, []);

  const handleMove = useCallback((event: React.TouchEvent) => {
    console.log(event.changedTouches[0]);
  }, []);

  return (
    <div onTouchStart={handleStart} onTouchMove={handleMove}>
      {props.text}
    </div>
  );
};

export default memo(HooksComp);
