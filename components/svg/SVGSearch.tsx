import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
import { memo } from "react"

const SVGSearch = (props: SvgProps) => (
  <Svg
    // @ts-ignore:
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={11.767}
      cy={12.266}
      r={8.989}
      stroke="#94A3B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke="#94A3B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.018 18.985 3.524 3.515"
    />
  </Svg>
)
const Memo = memo(SVGSearch)
export default Memo
