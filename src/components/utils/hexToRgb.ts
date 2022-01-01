export function hexToRgb(hex: string): {
  r: number;
  g: number;
  b: number;
} | null {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 *
 * @param hex #nnnnnn 타입으로 입력되어야 합니다.
 * @param opacity 0~1 사이의 값
 * @returns
 */
export function hexToRgbWithOpacity(hex: string, opacity: number): string {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb?.r},${rgb?.g},${rgb?.b}, ${opacity})`;
}
