import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={` 
    
    @font-face { font-family: 'Euclid Circular A Regular'; font-style: normal; font-weight: 700; font-display: swap; src: local('Euclid-Circular-A-Regular'), url(public/fonts/Euclid-Circular-A-Regular.ttf) format('ttf'); }}
    `}
  />
);
