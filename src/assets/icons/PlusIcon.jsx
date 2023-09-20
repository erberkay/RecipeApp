import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M2 15h26.182M15.09 2v26"
    />
  </Svg>
)
export default PlusIcon
