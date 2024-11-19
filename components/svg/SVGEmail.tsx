import * as React from "react"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"


const SVGForgetPasswordEmail = (props: any) => (
  <Svg
    // @ts-ignore:
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle
      cx={24}
      cy={24}
      r={23.5}
      fill="none"
      fillOpacity={0.04}
      stroke={props.stroke}
    />
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M31 17H17a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2Z"
    />
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 19 9 6 9-6"
    />
  </Svg>
)
export default SVGForgetPasswordEmail;
