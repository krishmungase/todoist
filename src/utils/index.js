export function strSlice(str, num = 250) {
  const length = str.length;
  if (length > num) return str.slice(0, num) + "...";
  return str;
}