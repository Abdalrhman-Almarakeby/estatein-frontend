export function upperFirst(input: string): string {
  if (!input) return input;
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function formatWithComma(number: number): string {
  return number.toLocaleString("en-US");
}
