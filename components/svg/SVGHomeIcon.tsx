import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

const SVGHomeIcon = (props: SvgProps) => (
  <Svg
    // @ts-ignore:
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill={props.fill}
    style={[{ marginBottom: -3, marginLeft: 4, borderRadius: 5 }]}
    preserveAspectRatio="xMinYMin slice"
    viewBox="0 0 100 25"
    {...props}
  >
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="M11.864 13.58c1.12 0 2.031.905 2.031 2.017v2.86c0 .24.192.431.438.437h1.772c1.397 0 2.532-1.121 2.532-2.5V8.281a1.559 1.559 0 0 0-.62-1.218l-6.131-4.89a2.247 2.247 0 0 0-2.8.002l-6.09 4.887a1.558 1.558 0 0 0-.634 1.235v8.097c0 1.379 1.136 2.5 2.533 2.5h1.79c.251 0 .456-.2.456-.445a.75.75 0 0 1 .017-.16v-2.692a2.03 2.03 0 0 1 2.018-2.017h2.688Zm4.241 6.71h-1.79c-1.024-.025-1.815-.83-1.815-1.832v-2.86a.63.63 0 0 0-.636-.623H9.18a.63.63 0 0 0-.627.622v2.852c0 .07-.009.136-.028.2a1.85 1.85 0 0 1-1.84 1.64h-1.79c-2.166 0-3.928-1.747-3.928-3.895V8.29c.01-.924.436-1.77 1.171-2.328l6.078-4.878a3.638 3.638 0 0 1 4.538-.001l6.122 4.882a2.937 2.937 0 0 1 1.157 2.306v8.123c0 2.148-1.762 3.895-3.928 3.895Z"
      clipRule="evenodd"
    />
  </Svg>
)
const Memo = memo(SVGHomeIcon)
export default Memo
