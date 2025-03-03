export const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1200px',
} as const;

export const media = {
  mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
  largeDesktop: `@media screen and (min-width: ${breakpoints.largeDesktop})`,
};
