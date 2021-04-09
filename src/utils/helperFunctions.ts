export function findObjectValue(obj: any, key: string, nestedKey?: string): string | undefined {
  try {
    if (!obj || !key) {
      console.info('helo');
      throw null;
    }
    JSON.stringify(obj, (_, nestedValue) => {
      if (nestedValue && nestedValue[key]) {
        // if value is found, stops the recursion right now with the throw
        // and return the value from catch
        throw nestedValue;
      }
      return nestedValue;
    });
  } catch (result) {
    const value = result[key];
    if (value) {
      return typeof value === 'object' && nestedKey ? value[nestedKey] : value;
    }
    return;
  }
}
