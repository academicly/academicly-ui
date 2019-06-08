const sizes = {
  xs: 480,
  sm: 768,
  mds: 960,
  md: 992,
  lgs: 1088,
  lg: 1200
};
export const MediaQuery = {
  phoneSM: `@media only screen and (max-width: ${sizes.xs}px)`,
  phone: `@media (max-width: ${sizes.sm}px)`,
  phoneStrict: `@media only screen and (min-width: ${
    sizes.xs
  }px) and (max-width: ${sizes.sm}px)`,
  tabletSM: `@media (max-width: ${sizes.mds}px)`,
  tablet: `@media (min-width: ${sizes.md}px)`,
  desktopSM: `@media (max-width: ${sizes.lgs}px)`,
  desktop: `@media (min-width: ${sizes.lg}px)`
};
