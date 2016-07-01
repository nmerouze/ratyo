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

const baseSizes = {
  base: 1,
  small: 1.125,
  large: 1.25,
};

console.log(fontSizes(mediaQueries, baseSizes));

console.log(ms(1));
console.log(vr(1));
