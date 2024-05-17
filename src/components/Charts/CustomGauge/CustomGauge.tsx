type Band = {
  start: number;
  end: number;
  color: string;
  label?: string;
};

type GaugeProps = {
  value: number;
  min: number;
  max: number;
  bands: Band[];
};

export const CustomGauge = ({ value, min, max, bands }: GaugeProps) => {
  const cx = 100;
  const cy = 100;
  // INCREASE THE RADIUS TO INCREASE OVERALL SIZE OF GAUGE
  const radius = 90;
  // INCREASE BAND HEIGHT WITH bandWidth VALUE
  const bandWidth = 45;
  const needleLength = 60;
  const needleWidth = 9;
  const needleBaseWidth = 11;

  const calculateAngle = (val: number, minValue: number, maxValue: number) => {
    const ratio = (val - minValue) / (maxValue - minValue);
    // ADJUST THE GAUGE WITH angle VALUE
    const angle = ratio * 180 - 180;
    return angle;
  };

  const needleAngle = calculateAngle(value, min, max);

  // ADJUST NEEDLE TIP COORDINATES
  const needleTipX =
    cx + needleLength * Math.cos(needleAngle * (Math.PI / 180));
  const needleTipY =
    cy + needleLength * Math.sin(needleAngle * (Math.PI / 180));

  return (
    <svg width="200" height="120">
      {/* DRAW INDIVIDUAL BAND */}
      {bands.map((band, index) => {
        const bandAngleStart = calculateAngle(band.start, min, max);
        const bandAngleEnd = calculateAngle(band.end, min, max);

        return (
          <g key={index}>
            <path
              d={`
                M ${cx + radius * Math.cos(bandAngleStart * (Math.PI / 180))}
                ${cy + radius * Math.sin(bandAngleStart * (Math.PI / 180))}
                A ${radius} ${radius} 0 0 1
                ${cx + radius * Math.cos(bandAngleEnd * (Math.PI / 180))}
                ${cy + radius * Math.sin(bandAngleEnd * (Math.PI / 180))}
                L ${cx + (radius - bandWidth) * Math.cos(bandAngleEnd * (Math.PI / 180))}
                ${cy + (radius - bandWidth) * Math.sin(bandAngleEnd * (Math.PI / 180))}
                A ${radius - bandWidth} ${radius - bandWidth} 0 0 0
                ${cx + (radius - bandWidth) * Math.cos(bandAngleStart * (Math.PI / 180))}
                ${cy + (radius - bandWidth) * Math.sin(bandAngleStart * (Math.PI / 180))}
                Z
              `}
              fill={band.color}
              stroke="#E0E0E0"
              strokeWidth={2}
            />
            {/* FOR DRAWING CURVED TEXT INSIDE THE BAND */}
            {band.label && (
              <text
                fontSize="10"
                fontWeight="bold"
                fill="#FFFFFF"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                <textPath xlinkHref={`#bandPath${index}`} startOffset="50%">
                  <tspan dy={10}>{band.label}</tspan>
                </textPath>
              </text>
            )}
            {/* DEFINED THE PATH FOR textPath */}
            <path
              id={`bandPath${index}`}
              d={`
                M ${cx + radius * Math.cos(bandAngleStart * (Math.PI / 180))}
                ${cy + radius * Math.sin(bandAngleStart * (Math.PI / 180))}
                A ${radius} ${radius} 0 0 1
                ${cx + radius * Math.cos(bandAngleEnd * (Math.PI / 180))}
                ${cy + radius * Math.sin(bandAngleEnd * (Math.PI / 180))}
              `}
              style={{ visibility: 'hidden' }}
            />
          </g>
        );
      })}

      {/* FOR DRAWING THE NEEDLE */}
      <path
        d={`
          M ${needleTipX} ${needleTipY}
          L ${cx + (needleWidth / 2) * Math.cos((needleAngle - 90) * (Math.PI / 180))} ${cy + (needleWidth / 2) * Math.sin((needleAngle - 90) * (Math.PI / 180))}
          L ${cx + (needleBaseWidth / 2) * Math.cos((needleAngle - 90) * (Math.PI / 180))} ${cy + (needleBaseWidth / 2) * Math.sin((needleAngle - 90) * (Math.PI / 180))}
          L ${cx - (needleBaseWidth / 2) * Math.cos((needleAngle - 90) * (Math.PI / 180))} ${cy - (needleBaseWidth / 2) * Math.sin((needleAngle - 90) * (Math.PI / 180))}
          L ${cx - (needleWidth / 2) * Math.cos((needleAngle - 90) * (Math.PI / 180))} ${cy - (needleWidth / 2) * Math.sin((needleAngle - 90) * (Math.PI / 180))}
          Z
        `}
        fill="#263238"
        stroke="#263238"
        strokeWidth={1}
      />
      {/*FOR DRAWING CIRCLE NEEDED FOR MAKING THE NEEDLE */}
      <circle cx={cx} cy={cy} r="7" fill="#263238" />
    </svg>
  );
};
