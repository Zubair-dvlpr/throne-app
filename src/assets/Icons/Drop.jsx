import * as React from "react";
const Drop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={50}
    viewBox="0 0 26 50"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_b_150_3511)">
      <rect width={26} height={50} rx={13} fill="white" fillOpacity={0.2} />
      <rect
        x={0.25}
        y={0.25}
        width={25.5}
        height={49.5}
        rx={12.75}
        stroke="white"
        strokeWidth={0.5}
      />
    </g>
    <circle cx={13} cy={11} r={5} fill="white" />
    <defs>
      <filter
        id="filter0_b_150_3511"
        x={-22}
        y={-22}
        width={70}
        height={94}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={11} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_150_3511"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_150_3511"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default Drop;
