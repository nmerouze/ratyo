export const pct = (value) => `${value}%`;
export const px = (value) => `${value}px`;
export const rem = (value) => `${value}rem`;
export const em = (value) => `${value}em`;

export const modularScale = (value, base, ratio) =>
  (Math.pow(ratio, value) * base).toFixed(3);

export const verticalRhythm = (size, baseline) => rem(size * baseline);

export const media = (size) => `@media all and (min-width: ${size})`;

export const fontSizes = (selector, mediaQueries, sizes) => {
  const rules = {
    [selector]: {
      fontSize: pct(sizes.base * 100)
    },
  };

  Object.keys(mediaQueries).forEach(name => {
    rules[media(mediaQueries[name])] = {
      [selector]: {
        fontSize: pct(sizes[name] * 100),
      },
    };
  });

  return rules;
}
