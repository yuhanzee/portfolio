import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const SparkleIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2L14.7 9.3L22 12L14.7 14.7L12 22L9.3 14.7L2 12L9.3 9.3L12 2Z" />
  </svg>
);

export const CheckmarkIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const LightBulbIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Tech logos / tools
export const FigmaLogo: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 38 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19 0C8.5 0 0 8.5 0 19C0 24.3 2.2 29.1 5.7 32.5C2.2 35.9 0 40.7 0 46C0 56.5 8.5 65 19 65C24.3 65 29.1 62.8 32.5 59.3C35.9 62.8 40.7 65 46 65C56.5 65 65 56.5 65 46C65 40.7 62.8 35.9 59.3 32.5C62.8 29.1 65 24.3 65 19C65 8.5 56.5 0 46 0H19ZM19 19C19 24.3 14.7 28.5 9.5 28.5C4.3 28.5 0 24.3 0 19C0 13.8 4.3 9.5 9.5 9.5C14.7 9.5 19 13.8 19 19ZM19 46C19 40.7 14.7 36.5 9.5 36.5C4.3 36.5 0 40.7 0 46C0 51.3 4.3 55.5 9.5 55.5C14.7 55.5 19 51.3 19 46ZM19 32.5V32.5V32.5ZM28.5 19C28.5 13.8 32.7 9.5 38 9.5C43.3 9.5 47.5 13.8 47.5 19C47.5 24.3 43.3 28.5 38 28.5C32.7 28.5 28.5 24.3 28.5 19Z" fill="#F24E1E" transform="scale(0.58)"/>
    <path d="M19 32.5C19 27.2 23.3 23 28.5 23H38V42H28.5C23.3 42 19 37.8 19 32.5Z" fill="#A259FF" transform="scale(0.58)"/>
    <path d="M19 46C19 40.7 23.3 36.5 28.5 36.5C33.7 36.5 38 40.7 38 46C38 51.3 33.7 55.5 28.5 55.5C23.3 55.5 19 51.3 19 46Z" fill="#1ABCFE" transform="scale(0.58)"/>
    <path d="M38 42C43.3 42 47.5 37.8 47.5 32.5C47.5 27.2 43.3 23 38 23V42Z" fill="#0ACF83" transform="scale(0.58)"/>
    <path d="M38 19C38 24.3 43.3 28.5 48.5 28.5C53.7 28.5 58 24.3 58 19C58 13.8 53.7 9.5 48.5 9.5C43.3 9.5 38 13.8 38 19Z" fill="#FF7262" transform="scale(0.58)"/>
  </svg>
);

export const AdobeXDLogo: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="24" height="24" rx="4" fill="#2E001F" />
    <text x="4" y="16" fill="#FF61F6" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">Xd</text>
  </svg>
);

export const PhotoshopLogo: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="24" height="24" rx="4" fill="#001833" />
    <text x="5" y="16" fill="#31A8FF" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">Ps</text>
  </svg>
);

export const IllustratorLogo: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="24" height="24" rx="4" fill="#330000" />
    <text x="5" y="16" fill="#FF9A00" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">Ai</text>
  </svg>
);

export const ReactLogo: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const NextjsLogo: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="90" cy="90" r="90" fill="currentColor"/>
    <path d="M149.508 157.52L69.142 54H54V126H65.045V71.706L135.534 162.839C140.669 161.411 145.419 159.57 149.508 157.52ZM126 54H114.955V126H126V54Z" fill="white"/>
  </svg>
);

export const NodejsLogo: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 288"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M144.18 3.52a28.8 28.8 0 0 0-32.36 0L20.18 64.92a28.8 28.8 0 0 0-14.18 25V202a28.8 28.8 0 0 0 14.18 25l91.64 61.4a28.8 28.8 0 0 0 32.36 0l91.64-61.4a28.8 28.8 0 0 0 14.18-25V89.92a28.8 28.8 0 0 0-14.18-25L144.18 3.52z" fill="#339933" />
    <path d="M128 274.65V13.35A21.57 21.57 0 0 0 114.93 16l-82 55a21.57 21.57 0 0 0-10.63 18.73V198a21.57 21.57 0 0 0 10.63 18.73l82 55c4 2.68 8 3.32 13.07 2.92z" fill="#66CC33" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const BehanceIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 16H13a3 3 0 0 1-3-3h11a3 3 0 0 1-3 3zM21 9h-9M12 9a3 3 0 0 0-3-3H4v11h5a3 3 0 0 0 3-3V9zM4 11.5h8" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const AwardIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);
