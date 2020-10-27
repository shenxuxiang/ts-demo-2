import Tween, { TweenType } from './Tween';

type GetOffsetTop = (element: HTMLElement) => number;

type GetScrollTop = (element: HTMLElement | Window) => number;

type ScrollToPosition = (target: HTMLElement | number, box?: HTMLElement | Window, speed?: number, timingFunction?: keyof TweenType) => void;

(function() {
  const map: Array<string> = ['webkit', 'moz'];

  for (let i = 0; !window.requestAnimationFrame; i++) {
    const key = `${map[i]}RequestAnimationFrame`;
    const cancelKey = `${map[i]}CancelAnimationFrame`;
    if (key in window) {
      window.requestAnimationFrame = window[(key as (keyof Window))];
      window.cancelAnimationFrame = window[(cancelKey as (keyof Window))];
      break;
    }
  }

  if (!window.requestAnimationFrame) {
    let startTime = 0;
    window.requestAnimationFrame = function(cb: Function | undefined): number {
      let time: number = 17 - (Date.now() - startTime);
      time = time < 0 ? 0 : time;
      const interval: number = window.setTimeout(() => {
        if (typeof cb === 'function') {
          cb();
          startTime = Date.now();
        }
      }, time);
      return interval;
    };
    window.cancelAnimationFrame = function(id: number): void {
      clearTimeout(id);
    };
  }
})();


let getOffsetTop: GetOffsetTop;
getOffsetTop = function(element) {
  let top = element.offsetTop;
  let ele = (element.offsetParent as HTMLElement);
  while (ele) {
    top += ele.offsetTop;
    ele = (ele.offsetParent as HTMLElement);
  }
  return top;
};

let getScrollTop: GetScrollTop;
getScrollTop = function(element = window) {
  if (element === window) {
    return window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
  } else {
    return (element as HTMLElement).scrollTop;
  }
};

let scrollTopPosition: ScrollToPosition;
scrollTopPosition = function(target, box = window, speed = 30, timingFunction = 'easeOut') {
  const targetPos: number = typeof target === 'number' ? target : getOffsetTop(target);
  const currentPos: number = getScrollTop(box);
  const offset: number = targetPos - currentPos;
  const times: number = Math.ceil(Math.abs(offset / speed));
  let start = 0;
  function loop(): void {
    start++;
    let dist: number = Tween[timingFunction](start, currentPos, offset, times);
    if (box === window) {
      box.scrollTo(0, dist);
    } else {
      (box as HTMLElement).scrollTop = dist;
    }
    if (start < times) {
      requestAnimationFrame(loop);
    }
  }
  loop();
};

export default scrollTopPosition;
