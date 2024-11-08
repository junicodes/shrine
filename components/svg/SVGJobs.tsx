import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

const SvgJobs = (props: SvgProps) => (
  <Svg
    // @ts-ignore:
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill={props.fill}
    style={[{ marginBottom: -3, marginLeft: 7 }]}
    preserveAspectRatio="xMinYMin slice"
    viewBox="0 0 100 25"
    {...props}
  >
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="M19.058 13.122c.408.031.714.388.683.796l-.188 2.482a3.964 3.964 0 0 1-3.934 3.65H4.148A3.964 3.964 0 0 1 .213 16.4l-.188-2.482a.743.743 0 0 1 .685-.796c.41-.014.764.275.796.685l.187 2.48a2.475 2.475 0 0 0 2.455 2.279h11.47c1.281 0 2.36-1.002 2.456-2.28l.188-2.48c.031-.409.394-.7.796-.684ZM11.159.53a2.932 2.932 0 0 1 2.903 2.55l1.947.001a3.767 3.767 0 0 1 3.758 3.769v3.4c0 .265-.14.508-.367.64-2.44 1.43-5.532 2.264-8.775 2.375v1.778a.742.742 0 0 1-1.483 0v-1.778c-3.24-.11-6.333-.944-8.775-2.375A.74.74 0 0 1 0 10.25V6.84A3.767 3.767 0 0 1 3.768 3.08h1.937A2.932 2.932 0 0 1 8.608.53h2.551Zm4.85 4.035H3.768a2.282 2.282 0 0 0-2.285 2.275v2.978c2.348 1.276 5.307 1.975 8.387 1.976l.013-.001h.011l.471-.005c2.913-.069 5.692-.76 7.919-1.97V6.85c0-1.26-1.02-2.285-2.274-2.285Zm-4.85-2.551H8.608c-.666 0-1.228.453-1.394 1.067h5.339a1.446 1.446 0 0 0-1.394-1.067Z"
      clipRule="evenodd"
    />
  </Svg>
)
const Memo = memo(SvgJobs)
export default Memo
