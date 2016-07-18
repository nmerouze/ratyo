export const pct = (value) => `${value}%`;
export const px = (value) => `${value}px`;
export const rem = (value) => `${value}rem`;
export const em = (value) => `${value}em`;

export const modularScale = (value, base, ratio) =>
  (Math.pow(ratio, value) * base).toFixed(3);

export const verticalRhythm = (size, baseline) => rem(size * baseline);

const query = (size) => `(min-width: ${size})`;
export const media = (size) => `@media ${query(size)}`;

export const fontSizes = (mediaQueries, sizes) => {
  const rules = {
    base: {
      fontSize: pct(sizes.base * 100)
    },

    mediaQueries: {},
  };

  Object.keys(mediaQueries).forEach(name => {
    rules[name] = {
      fontSize: pct(sizes[name] * 100),
    };

    rules.mediaQueries[query(mediaQueries[name])] = rules[name];
  });

  return rules;
}
