export interface GetDistance {
  // eslint-disable-next-line
  (t: number, b: number, c: number, d: number): number;
}

export interface TweenType {
  linear: GetDistance;
  easeIn: GetDistance;
  easeOut: GetDistance;
  easeInOut: GetDistance;
  'Quad.easeIn': GetDistance;
  'Quad.easeOut': GetDistance;
  'Quad.easeInOut': GetDistance;
}

const tween: TweenType = {
  linear(t, b, c, d) {
    return (c * t) / d + b;
  },
  easeIn(t, b, c, d) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOut(t, b, c, d) {
    return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  },
  easeInOut(t, b, c, d) {
    if (t === 0) return b;
    if (t === d) return b + c;
    const tm = t / (d / 2);
    if (tm < 1) return (c / 2) * Math.pow(2, 10 * (tm - 1)) + b;
    return (c / 2) * (-Math.pow(2, -10 * (t - 1)) + 2) + b;
  },
  'Quad.easeIn': function(t, b, c, d) {
    // eslint-disable-next-line
    return c * (t /= d) * t + b;
  },
  'Quad.easeOut': function(t, b, c, d) {
    // eslint-disable-next-line
    return -c * (t /= d) * (t - 2) + b;
  },
  'Quad.easeInOut': function(t, b, c, d) {
    // eslint-disable-next-line
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    // eslint-disable-next-line
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  }
};

export default tween;
