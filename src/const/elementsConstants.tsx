export type ElementCode =
  | 'water'
  | 'wind'
  | 'soil'
  | 'fire'
  | 'tree'
  | 'light'
  | 'earth';
export const elementFarsi: Record<ElementCode, string> = {
  water: 'آب',
  wind: 'باد',
  soil: 'خاک',
  earth: 'خاک',
  fire: 'آتش',
  tree: 'درخت',
  light: 'نور',
};

export type ElementFarsi =
  | 'آب'
  | 'باد'
  | 'خاک'
  | 'هوا'
  | 'آتش'
  | 'درخت'
  | 'نور'
  | 'نتیجه'
  | 'جایزه'
  | 'امتیاز';
export const elementEmoji: Record<ElementFarsi, string> = {
  آب: '<em-emoji id="droplet" Size="2em"></em-emoji>',
  باد: '<em-emoji id="wind_blowing_face" Size="2em"></em-emoji>',
  خاک: '<em-emoji id="large_brown_circle" Size="2em"></em-emoji>',
  آتش: '<em-emoji id="fire" Size="2em"></em-emoji>',
  هوا: '<em-emoji id="wind_blowing_face" Size="2em"></em-emoji>',
  درخت: '<em-emoji id="deciduous_tree" Size="2em"></em-emoji>',
  نور: '<em-emoji id="sunny" Size="2em"></em-emoji>',
  نتیجه: '<em-emoji id="trophy" Size="2em"></em-emoji>',
  جایزه: '<em-emoji id="gift" Size="2em"></em-emoji>',
  امتیاز: '<em-emoji id="moneybag" Size="2em"></em-emoji>',
};
