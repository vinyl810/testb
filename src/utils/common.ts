export const d2r = (degree: number): number => {
  return degree * (Math.PI / 180);
};

export const r2d = (radian: number): number => {
  return radian / (Math.PI / 180);
};

export const getRandomArb = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
