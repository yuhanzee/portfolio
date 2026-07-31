import React from "react";

interface DoodleProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  strokeWidth?: number;
}

// 1. Hand-drawn Oval scribble to wrap around elements (like UX/UI Designer badge)
export const OvalScribble: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg
    viewBox="0 0 220 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="doodle-draw"
      d="M 12 35 C 12 12, 208 8, 208 32 C 208 56, 20 62, 16 38 C 12 24, 180 14, 196 22"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 2. Hand-drawn Underline scribble to place under headings
export const UnderlineScribble: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 3,
  ...props
}) => (
  <svg
    viewBox="0 0 300 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...props}
  >
    <path
      className="doodle-draw"
      d="M 10 8 Q 80 14, 150 7 Q 220 3, 290 11 M 30 14 Q 120 18, 210 12 Q 260 9, 280 15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 3. Hand-drawn Sparkle/Star
export const SparkleDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="doodle-draw"
      d="M 30 4 Q 30 30, 4 30 Q 30 30, 30 56 Q 30 30, 56 30 Q 30 30, 30 4 Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 4. Hand-drawn Arrow pointer (pointing to elements)
export const ArrowDoodle: React.FC<DoodleProps & { direction?: "right" | "left" | "down" | "up-left" | "down-left" | "down-right" | "up-right" }> = ({
  color = "currentColor",
  strokeWidth = 2.5,
  direction = "right",
  ...props
}) => {
  // Arrow rotation angles based on direction
  const rotationMap = {
    right: 0,
    down: 90,
    left: 180,
    up: 270,
    "up-left": -135,
    "down-left": 135,
    "down-right": 45,
    "up-right": -45,
  };
  const angle = rotationMap[direction] || 0;

  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${angle}deg)`, transformOrigin: "center", ...props.style }}
      {...props}
    >
      <path
        className="doodle-draw"
        d="M 10 30 Q 50 15, 85 30 M 60 12 L 88 29 L 64 48 M 15 32 Q 45 28, 75 31"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 5. Hand-drawn Spiral/Orbit to wrap around avatar or text elements
export const SpiralSwirlDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="doodle-draw"
      d="M 150 150 C 130 110, 200 90, 210 140 C 220 200, 110 220, 90 150 C 70 60, 240 50, 250 160 C 260 280, 40 270, 20 130 C 5 20, 280 10, 290 150"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 6. Hand-drawn Curly Bracket for grouping cards or elements
export const CurlyBracketDoodle: React.FC<DoodleProps & { orientation?: "left" | "right" | "top" | "bottom" }> = ({
  color = "currentColor",
  strokeWidth = 3,
  orientation = "left",
  ...props
}) => {
  const rotationMap = {
    left: 0,
    top: 90,
    right: 180,
    bottom: 270,
  };
  const angle = rotationMap[orientation];

  return (
    <svg
      viewBox="0 0 40 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${angle}deg)`, transformOrigin: "center", ...props.style }}
      {...props}
    >
      <path
        className="doodle-draw"
        d="M 30 10 Q 15 15, 15 50 Q 15 80, 5 90 Q 15 100, 15 130 Q 15 165, 30 170"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 7. Hand-drawn Smiley face
export const SmileyDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2.5,
  ...props
}) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Head/Circle */}
    <path
      className="doodle-draw"
      d="M 25 5 C 36 5, 45 14, 45 25 C 45 36, 36 45, 25 45 C 14 45, 5 36, 5 25 C 5 14, 14 5, 24 5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Eyes */}
    <path
      className="doodle-draw-delay"
      d="M 16 18 Q 18 16, 18 20 M 32 18 Q 34 16, 34 20"
      stroke={color}
      strokeWidth={strokeWidth + 0.5}
      strokeLinecap="round"
    />
    {/* Mouth */}
    <path
      className="doodle-draw-delay"
      d="M 14 29 Q 25 38, 36 29"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// 8. Hand-drawn Heart
export const HeartDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="doodle-draw"
      d="M 20 34 C 18 32, 4 22, 4 14 C 4 7, 10 4, 16 7 C 18 8, 20 11, 20 11 C 20 11, 22 8, 24 7 C 30 4, 36 7, 36 14 C 36 22, 22 32, 20 34"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 9. Lotus flower – Yuhansi's favourite flower
export const LotusDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path className="doodle-draw" d="M40 60 C40 60, 25 45, 26 30 C27 18, 40 14, 40 14 C40 14, 53 18, 54 30 C55 45, 40 60, 40 60Z"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path className="doodle-draw-delay" d="M28 55 C28 55, 10 46, 10 32 C10 20, 22 18, 28 22 C22 34, 24 48, 28 55Z"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path className="doodle-draw-delay" d="M52 55 C52 55, 70 46, 70 32 C70 20, 58 18, 52 22 C58 34, 56 48, 52 55Z"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path className="doodle-draw-delay" d="M40 60 Q38 68, 36 74 M36 68 Q26 65, 20 70"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

// 10. Coffee Mug – mug collector
export const MugDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path className="doodle-draw" d="M15 30 L18 65 Q18 68, 22 68 L52 68 Q56 68, 56 65 L59 30 Z"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path className="doodle-draw-delay" d="M56 38 Q70 38, 70 48 Q70 58, 56 58"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path className="doodle-draw-delay" d="M27 22 Q29 16, 27 10 M37 22 Q39 15, 37 10 M47 22 Q49 16, 47 10"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

// 11. Swan – Hansi = Swan in Sinhala
export const SwanDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path className="doodle-draw" d="M20 50 Q35 30, 55 35 Q75 40, 80 50 Q75 62, 45 62 Q25 62, 20 50Z"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path className="doodle-draw" d="M30 50 Q28 35, 35 22 Q40 12, 45 14 Q52 17, 48 26 Q44 33, 40 38"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path className="doodle-draw-delay" d="M44 14 L52 12 L50 16"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path className="doodle-draw-delay" d="M38 48 Q55 42, 68 46"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path className="doodle-draw-delay" d="M10 65 Q35 60, 60 64 Q75 66, 88 63"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray="3 3"/>
  </svg>
);

// 12. Paw print – animal lover
export const PawDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path className="doodle-draw" d="M35 35 C22 35, 16 46, 20 55 C24 64, 46 64, 50 55 C54 46, 48 35, 35 35Z"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <ellipse className="doodle-draw-delay" cx="22" cy="26" rx="5" ry="7" stroke={color} strokeWidth={strokeWidth}/>
    <ellipse className="doodle-draw-delay" cx="33" cy="20" rx="5" ry="7" stroke={color} strokeWidth={strokeWidth}/>
    <ellipse className="doodle-draw-delay" cx="44" cy="22" rx="5" ry="7" stroke={color} strokeWidth={strokeWidth}/>
    <ellipse className="doodle-draw-delay" cx="53" cy="30" rx="5" ry="6" stroke={color} strokeWidth={strokeWidth}/>
  </svg>
);

// 13. Rain Cloud – love of nature & rain
export const RainCloudDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path className="doodle-draw"
      d="M15 45 Q12 45, 12 38 Q12 28, 22 26 Q24 16, 36 16 Q46 16, 50 24 Q58 22, 62 30 Q70 30, 70 40 Q70 46, 62 46 Z"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path className="doodle-draw-delay" d="M22 52 L18 62 M32 54 L28 66 M42 52 L38 64 M52 54 L48 64 M62 52 L58 62"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

// 14. Paint brush – purple design touch
export const PurpleBrushDoodle: React.FC<DoodleProps> = ({
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path className="doodle-draw" d="M20 10 L55 45" stroke={color} strokeWidth={strokeWidth + 1} strokeLinecap="round"/>
    <path className="doodle-draw-delay" d="M48 40 L58 50 L55 53 L45 43Z"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path className="doodle-draw-delay" d="M55 53 Q62 56, 65 62 Q60 68, 52 64 Q50 57, 55 53Z"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    <path className="doodle-draw-delay" d="M10 65 Q30 55, 50 62 Q60 65, 70 60"
      stroke={color} strokeWidth={strokeWidth + 1} strokeLinecap="round" strokeDasharray="4 2"/>
  </svg>
);
export function ForestDoodle(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Tree */}
      <path d="M32 8 L22 22 H28 L18 36 H26 L14 50 H50 L38 36 H46 L36 22 H42 Z" />
      <path d="M32 50 V58" />

      {/* Small tree */}
      <path d="M50 30 L44 38 H47 L41 46 H59 L53 38 H56 Z" />
      <path d="M50 46 V52" />
    </svg>
  );
}

// 15. Paper Plane Left with dashed loop trail
export const PaperPlaneLeftDoodle: React.FC<DoodleProps> = ({
  color = "#A78BFA",
  strokeWidth = 2,
  ...props
}) => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Dashed trail */}
    <path
      d="M 10 100 C 30 110, 60 100, 70 80 C 80 60, 50 40, 30 60 C 10 80, 40 100, 90 70 C 110 58, 125 45, 135 35"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
    {/* Paper Plane */}
    <g transform="translate(125, 10) rotate(15) scale(0.6)">
      <path
        d="M 50 5 L 5 45 L 22 35 L 35 48 L 38 32 L 48 22 Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth * 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 50 5 L 22 35"
        stroke={color}
        strokeWidth={strokeWidth * 1.5}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

// 16. Paper Plane Right with dashed loop trail
export const PaperPlaneRightDoodle: React.FC<DoodleProps> = ({
  color = "#8B5CF6",
  strokeWidth = 2,
  ...props
}) => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Dashed trail */}
    <path
      d="M 150 90 C 130 95, 100 90, 90 75 C 80 60, 110 40, 120 55 C 130 70, 100 85, 45 45 C 35 38, 25 28, 15 15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
    {/* Paper Plane */}
    <g transform="translate(110, 20) rotate(-25) scale(0.7)">
      <path
        d="M 50 5 L 5 45 L 22 35 L 35 48 L 38 32 L 48 22 Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth * 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 50 5 L 22 35"
        stroke={color}
        strokeWidth={strokeWidth * 1.5}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

// 17. 3 Yellow Rays above Creative Work
export const CreativeWorkRays: React.FC<DoodleProps> = ({
  color = "#FACC15",
  strokeWidth = 2.5,
  ...props
}) => (
  <svg viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M 12 20 L 4 5 M 25 18 L 25 2 M 38 20 L 46 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

// 18. Yellow wave scribble under Subtitle
export const YellowWaveUnderline: React.FC<DoodleProps> = ({
  color = "#FACC15",
  strokeWidth = 3,
  ...props
}) => (
  <svg viewBox="0 0 280 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" {...props}>
    <path
      d="M 5 15 Q 40 5, 80 18 Q 120 28, 160 12 Q 200 2, 240 18 L 265 15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <circle cx="273" cy="14" r="2.5" fill={color} />
  </svg>
);

// 19. 3 Purple rays above Hello,
export const HelloRays: React.FC<DoodleProps> = ({
  color = "#8B5CF6",
  strokeWidth = 2.5,
  ...props
}) => (
  <svg viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M 8 26 L 2 8 M 18 24 L 18 4 M 28 26 L 34 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

// 20. Yellow star outline doodle
export const StarOutlineDoodle: React.FC<DoodleProps> = ({
  color = "#FACC15",
  strokeWidth = 2,
  ...props
}) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M 20 2 L 25 14 L 38 15 L 28 24 L 31 37 L 20 30 L 9 37 L 12 24 L 2 15 L 15 14 Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 21. Curved yellow arrow for detail-oriented portrait callout
export const YellowCurvedArrow: React.FC<DoodleProps> = ({
  color = "#FACC15",
  strokeWidth = 2.5,
  ...props
}) => (
  <svg viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M 10 5 C 35 15, 45 35, 18 50 M 15 42 L 18 50 L 26 48"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);