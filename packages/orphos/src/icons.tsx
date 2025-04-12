import type { IconProps } from "./types";

function DotFilledIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="6"
      height="6"
      viewBox="0 0 16 16"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="50%" cy="50%" r="50%"></circle>
    </svg>
  );
}

function CreditCardIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function PasskeyIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none">
      <circle
        cx="7"
        cy="10"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 10h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 12v-1a1 1 0 0 1 1-1h1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpinnerIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeDasharray="31.415 31.415" // half of circumference (2π×10 ≈ 62.83)
        transform="rotate(-90 12 12)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function LeftSidebarIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="8" y1="3" x2="8" y2="21" />
    </svg>
  );
}

function LeftSidebarIconFilled(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3V3z"
      />
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export {
  CreditCardIcon,
  DotFilledIcon,
  PasskeyIcon,
  LeftSidebarIcon,
  LeftSidebarIconFilled,
  SpinnerIcon,
};
