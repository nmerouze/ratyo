import { modularScale, verticalRhythm, fontSizes, em } from '../src';

const base = 1;
const ratio = 1.618;
const baseline = 1.4;

const ms = (value) => modularScale(value, base, ratio);
const vr = (value) => verticalRhythm(value, baseline);

const mediaQueries = {
  small: em(25),
  large: em(50),
};

const htmlSizes = {
  base: ms(0),
  small: ms(0.245),
  large: ms(0.464),
};

const rules = {
  ...fontSizes('html', mediaQueries, htmlSizes)
};

console.log(rules);

console.log(ms(1));
console.log(vr(1));
