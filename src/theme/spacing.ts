import baseTheme from './baseTheme';

type Factor = number | Array<string | number>;
type Spacing = (factor: Factor, baseSpacing?: number, unit?: string) => string;

export const spacing: Spacing = (factor, baseSpacing = baseTheme.spacing.base, unit = baseTheme.spacing.unit) => {
  try {
    let multiplier;
    if (typeof factor === 'number') {
      multiplier = [factor];
    } else if (!Array.isArray(factor)) {
      throw new Error('factor needs to be an number or an array');
    } else {
      multiplier = factor;
    }
    const spacingString = multiplier.reduce((finalStr, curr) => {
      let value: string;
      if (typeof curr === 'number') {
        value = `${baseSpacing * curr}${unit}`;
      } else if (typeof curr === 'string') {
        value = curr;
      } else {
        return String(finalStr);
      }
      return `${finalStr} ${value}`;
    }, '');
    return String(spacingString).trim();
  } catch (err) {
    console.error('theme.spacing error: ', err);
    throw err;
  }
};
