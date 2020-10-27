interface INext {
  value: number | undefined;
  done: boolean;
}

interface IIteratorObj {
  next: () => INext;
}

type INumberIterator = (initValue: number, endValue: number, step: number, fixed: number) => IIteratorObj;

let numberIterator: INumberIterator;
numberIterator = function (initValue, endValue, step, fixed) {
  const offset: number = endValue - initValue;
  const times: number = Math.ceil(Math.abs(offset / step));
  const direction = Math.sign(offset);
  let start = 0;
  let value = initValue;
  let done = false;
  return {
    next: function() {
      start++;
      value = Number((value + step * direction).toFixed(fixed));
      done = start >= times;
      return {
        value: done ? undefined : value,
        done
      };
    }
  };
};

class DigitalAnimate {
  public element: HTMLElement;
  public initValue: number;
  public endValue: number;
  public step: number;
  public time: number;
  public it: IIteratorObj;
  public interval: number | null;

  public constructor (element: HTMLElement, initValue: number, endValue: number, step: number, fixed: number, time: number) {
    this.element = element;
    this.initValue = initValue;
    this.endValue = endValue;
    this.step = step;
    this.time = time;
    this.it = numberIterator(initValue, endValue, step, fixed);
    this.element.innerHTML = `${initValue}`;
    this.interval = null;
  }
  // 开始
  public start (cb?: Function) {
    this.interval = window.setTimeout(() => {
      const { value, done } = this.it.next();
      if (done) {
        this.element.innerHTML = `${this.endValue}`;
        if (cb) cb();
      } else {
        this.element.innerHTML = `${value}`;
        this.start(cb);
      }
    }, this.time);
  }
  // 清除
  public clear() {
    if (this.interval) {
      clearTimeout(this.interval);
      this.interval = null;
    }
  }
}

export {
  numberIterator,
  DigitalAnimate
};
