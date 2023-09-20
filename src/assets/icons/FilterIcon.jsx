import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M19.062 0H.939C.106 0-.314 1.01.276 1.6L7.5 8.826v8.049c0 .306.15.593.4.768l3.125 2.187a.938.938 0 0 0 1.475-.768V8.826L19.724 1.6c.59-.588.172-1.6-.662-1.6Z"
    />
  </Svg>
)
export default FilterIcon
