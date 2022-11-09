const templateHeight = 932;
const templateWidth = 430;
export const verticalScale = (size: number, height: number) =>
  (height / templateHeight) * size;

export const horizontalScale = (size: number, width: number) =>
  (width / templateWidth) * size;
