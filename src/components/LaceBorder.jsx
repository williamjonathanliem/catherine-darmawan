/**
 * LaceBorder — an SVG repeating lace frieze.
 * Renders a horizontal lace-like strip with petals, arcs and connecting threads.
 */
export default function LaceBorder({ flip = false, color = '#d4959a', opacity = 1 }) {
  const unit = 48; // width of one repeating tile
  const h    = 28; // strip height

  return (
    <div style={{
      width: '100%',
      lineHeight: 0,
      transform: flip ? 'scaleY(-1)' : undefined,
      opacity,
      pointerEvents: 'none',
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height={h}
        style={{ display: 'block' }}
      >
        <defs>
          {/* One lace tile */}
          <pattern id={`lace-${flip}`} x="0" y="0" width={unit} height={h} patternUnits="userSpaceOnUse">
            {/* Top baseline */}
            <line x1="0" y1="1" x2={unit} y2="1" stroke={color} strokeWidth="0.75" />

            {/* Vertical drop threads */}
            <line x1="0"        y1="1" x2="0"        y2="14" stroke={color} strokeWidth="0.5" />
            <line x1={unit/2}   y1="1" x2={unit/2}   y2="10" stroke={color} strokeWidth="0.5" />
            <line x1={unit}     y1="1" x2={unit}     y2="14" stroke={color} strokeWidth="0.5" />
            <line x1={unit/4}   y1="1" x2={unit/4}   y2="7"  stroke={color} strokeWidth="0.4" strokeDasharray="1.5 1.5" />
            <line x1={unit*3/4} y1="1" x2={unit*3/4} y2="7"  stroke={color} strokeWidth="0.4" strokeDasharray="1.5 1.5" />

            {/* Diagonal crossing threads */}
            <line x1="0"      y1="14" x2={unit/2} y2="10" stroke={color} strokeWidth="0.4" />
            <line x1={unit}   y1="14" x2={unit/2} y2="10" stroke={color} strokeWidth="0.4" />

            {/* Small diamond at mid-top join */}
            <rect x={unit/2-2.5} y="8.5" width="4" height="4"
              stroke={color} strokeWidth="0.6" fill="none"
              transform={`rotate(45 ${unit/2} 10.5)`} />

            {/* Large scallop arc / petal at bottom */}
            <path
              d={`M0,14 Q${unit/4},26 ${unit/2},26 Q${unit*3/4},26 ${unit},14`}
              stroke={color} strokeWidth="0.75" fill="none"
            />

            {/* Inner petal echo */}
            <path
              d={`M6,14 Q${unit/4},22 ${unit/2},22 Q${unit*3/4},22 ${unit-6},14`}
              stroke={color} strokeWidth="0.4" fill="none" opacity="0.5"
            />

            {/* Small rosette at petal tip */}
            <circle cx={unit/2} cy="24" r="2"   stroke={color} strokeWidth="0.6" fill="none" />
            <circle cx={unit/2} cy="24" r="0.8" fill={color} />

            {/* Corner dots */}
            <circle cx="0"    cy="14" r="1.2" fill={color} />
            <circle cx={unit} cy="14" r="1.2" fill={color} />

            {/* Tiny cross-stitch details on scallop */}
            <circle cx={unit/4}   cy="20" r="0.7" fill={color} opacity="0.5" />
            <circle cx={unit*3/4} cy="20" r="0.7" fill={color} opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height={h} fill={`url(#lace-${flip})`} />
      </svg>
    </div>
  );
}
