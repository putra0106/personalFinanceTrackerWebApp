export function convertStringRpToNumber(converter) {
  const numberString = converter.replace(/[^0-9]/g, "");
  return parseInt(numberString, 10);
}
