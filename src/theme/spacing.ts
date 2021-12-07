type Factor = number | Array<string | number>;
type Spacing = (factor: Factor, baseSpacing: number, unit?: string) => string;

const calculateSpacing: Spacing = (factor, baseSpacing, unit) => {
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

export const spacing = (baseSpacing: number, unit: string) => (factor: Factor): string => calculateSpacing(factor, baseSpacing, unit);
