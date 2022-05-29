// filter-icon.tsx
// 22-May-2022
import * as React from "react";

// color icon
export const ColorIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <path
      d="M24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913445C15.1363 0.310389 13.5759 -6.88831e-08 12 0L12 12H24Z"
      fill="#FFC93E"
    />
    <path
      d="M-4.76837e-07 12C-4.76837e-07 10.4241 0.310389 8.86371 0.913445 7.4078C1.5165 5.95189 2.40041 4.62902 3.51472 3.51472C4.62902 2.40042 5.95189 1.5165 7.4078 0.913445C8.86371 0.310389 10.4241 -6.88831e-08 12 0L12 12H-4.76837e-07Z"
      fill="#FF3838"
    />
    <path
      d="M5.72236e-07 12C4.3447e-07 13.5759 0.310389 15.1363 0.913446 16.5922C1.5165 18.0481 2.40042 19.371 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24L12 12L5.72236e-07 12Z"
      fill="#73D5FF"
    />
    <path
      d="M24 12C24 13.5759 23.6896 15.1363 23.0866 16.5922C22.4835 18.0481 21.5996 19.371 20.4853 20.4853C19.371 21.5996 18.0481 22.4835 16.5922 23.0866C15.1363 23.6896 13.5759 24 12 24L12 12L24 12Z"
      fill="#3290FF"
    />
  </svg>
);

// clay icon
export const ClayIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <circle cx="12" cy="12" r="11.5" fill="white" stroke="#EFEFEF" />
  </svg>
);

// Gradient icon
export const GradientIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_54_20)" />
    <defs>
      <linearGradient
        id="paint0_linear_54_20"
        x1="12"
        y1="0"
        x2="12"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFDE69" />
        <stop offset="0.392928" stop-color="#FFA63E" />
        <stop offset="1" stop-color="#FF6737" />
      </linearGradient>
    </defs>
  </svg>
);

// Premium icon
export const PremiumIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#454545" />
    <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_54_40)" />
    <defs>
      <linearGradient
        id="paint0_linear_54_40"
        x1="6"
        y1="8.9407e-08"
        x2="12"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.467746" stop-color="#FFE920" stop-opacity="0" />
        <stop offset="0.494792" stop-color="#FFB84D" />
        <stop offset="0.635417" stop-color="#FFBB0D" />
        <stop offset="0.666667" stop-color="#FFBB0D" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// Front icon
export const FrontIcon = ({
  height = "24px",
  width = "24px",
  color = "black",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <path
      d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z"
      fill={color}
    />
  </svg>
);

// Dynamic icon
export const DynamicIcon = ({
  height = "24px",
  width = "24px",
  color = "black",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <path
      d="M6.45228 3.02087C6.04694 2.92732 5.67955 3.16182 5.62178 3.63418L4.00739 16.8341C3.94032 17.3824 4.33565 17.9301 4.82636 18.0434L17.5477 20.9791C17.9531 21.0726 18.3205 20.8382 18.3782 20.3658L19.9926 7.16592C20.0597 6.61755 19.6644 6.06986 19.1737 5.95662L6.45228 3.02087ZM3.63657 3.39138C3.83355 1.78086 5.29997 0.702379 6.90201 1.07209L19.6234 4.00784C21.1401 4.35785 22.1655 5.8742 21.9778 7.40872L20.3635 20.6086C20.1665 22.2191 18.7001 23.2976 17.098 22.9279L4.37664 19.9921C2.85997 19.6421 1.83451 18.1258 2.02218 16.5913L3.63657 3.39138Z"
      fill={color}
    />
  </svg>
);

// ISO icon
export const IsoIcon = ({
  height = "24px",
  width = "24px",
  color = "black",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <path
      d="M10.5021 1.40273C10.9577 1.14023 11.4742 1.00204 12 1.00204C12.5258 1.00204 13.0424 1.14024 13.4979 1.40276L13.5 1.40397L20.5 5.40396C20.87 5.61756 21.189 5.9071 21.4369 6.25228C21.4973 6.31266 21.5508 6.38184 21.5956 6.45927C21.6342 6.52597 21.6642 6.59527 21.686 6.66591C21.8917 7.07935 21.9995 7.53551 22 7.99897V16.001C21.9995 16.5271 21.8606 17.0438 21.5973 17.4993C21.334 17.9547 20.9556 18.333 20.5 18.596L20.4961 18.5982L13.5 22.596L13.4982 22.5971C13.181 22.7799 12.8342 22.9025 12.4753 22.9601C12.3339 23.0366 12.172 23.08 12 23.08C11.828 23.08 11.6661 23.0366 11.5247 22.9601C11.1658 22.9025 10.8191 22.7799 10.5019 22.5971L10.5 22.596L3.50386 18.5982L3.5 18.596C3.04439 18.333 2.66597 17.9547 2.40269 17.4993C2.13941 17.0438 2.00054 16.5271 2 16.001V7.99897C2.00048 7.53544 2.10834 7.0792 2.31407 6.66571C2.33586 6.59514 2.36586 6.52591 2.40441 6.45927C2.44917 6.3819 2.50271 6.31277 2.56304 6.25241C2.8109 5.90718 3.13 5.61759 3.5 5.40397L3.50386 5.40174L10.5021 1.40273ZM13 20.5782L19.5 16.864L19.5016 16.8631C19.6527 16.7754 19.7783 16.6497 19.8658 16.4984C19.9535 16.3466 19.9998 16.1743 20 15.999V8.53754L13 12.5868V20.5782ZM11 12.5868V20.5782L4.5 16.864L4.49842 16.8631C4.34726 16.7754 4.22169 16.6497 4.13423 16.4984C4.04654 16.3467 4.00026 16.1746 4 15.9994V8.53752L11 12.5868ZM12.5039 3.13824L18.961 6.82803L12 10.8547L5.03899 6.82802L11.4961 3.13824L11.5 3.13602C11.652 3.04825 11.8245 3.00204 12 3.00204C12.1755 3.00204 12.348 3.04825 12.5 3.13602L12.5039 3.13824Z"
      fill={color}
    />
  </svg>
);
