# ratyo

Inline style utilities for [Radium](https://github.com/FormidableLabs/radium). It had no dependencies so it should work with other similar libraries. Primarily focused on typography and responsive design.

## Media Queries

Ratyo has a `media` utility function to define a media query.

```js
import { media, em } from 'ratyo';

const desktop = em(50);

export const myStyle = {
  fontSize: em(1),

  [media(desktop)]: {
    fontSize: em(1.2),
  },
},
```

It will generate the following object for `myStyle`.

```js
{
  fontSize: '1em',
  '@media all and (min-width: 50em)': {
    fontSize: '1.2em',
  },
}
```

## Typography

Ratyo includes several typography utilities. It is heavily inspired by [typi](https://github.com/zellwk/typi).

### Modular Scale

```js
import { modularScale, em } from 'ratyo';

const base = 1;
const ratio = 1.618; // golden ratio

const ms = (value) => em(moduleScale(value, base, ratio));

export const myStyle = {
  fontSize: ms(1), // 1.618em
};
```

### Vertical Rhythm

```js
import { verticalRhythm } from 'ratyo';

const baseLine = 1.5;

const vr = (value) => verticalRhythm(value, baseLine);

export const myStyle = {
  margin: vr(1.5), // 1.5 baselines == 2.25rem
};
```

### Font maps

```js
import { fontSizes, em, modularScale } from 'ratyo';

const base = 1;
const ratio = 1.618;
const ms = (value) => modularScale(value, base, ratio);

const mediaQueries = {
  small: em(25),
  large: em(50),
};

export const rules = fontSizes('html', mediaQueries, {
  base: ms(0),
  small: ms(0.245),
  large: ms(0.464),
});
```

It will generate the following rules.

```js
{
  html: {
    fontSize: '100%'
  },
  '@media all and (min-width: 25em)': {
    html: {
      fontSize: '112.5%'
    },
  },
  '@media all and (min-width: 50em)': {
    html: {
      fontSize: '125%'
    },
  },
}
```
