export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
} as const;

export const media = {
  mobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
};
