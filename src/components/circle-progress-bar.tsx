import React from 'react'

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0
  const tooHigh = percentage > 100
  return tooLow ? 0 : tooHigh ? 100 : +percentage
}

interface CircleProps {
  color?: string
  pct?: number
}

interface PieProps extends React.HTMLAttributes<HTMLDivElement> {
  percentage?: number
  color?: string
}

const Circle = ({ color, pct }: CircleProps) => {
  const r = 20
  const circ = 2 * Math.PI * r
  const strokePct = ((100 - pct) * circ) / 100
  return (
    <circle
      r={r}
      cx={175}
      cy={25}
      fill='#334155'
      stroke={strokePct !== circ ? color : ''} // remove color as 0% sets full circumference
      strokeWidth={'4px'}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap='round'
    ></circle>
  )
}

export function CircleProgressBar({ percentage, color }: PieProps) {
  const pct = cleanPercentage(percentage)
  return (
    <svg width={50} height={50}>
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle color='#334155' />
        <Circle color={color} pct={pct} />
      </g>
    </svg>
  )
}
