import * as React from "react"
import Svg, { Path } from "react-native-svg"
const UsernameIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M13.022 14.898a7.038 7.038 0 0 0 7.036-7.036A7.038 7.038 0 0 0 13.022.825a7.038 7.038 0 0 0-7.037 7.037 7.038 7.038 0 0 0 7.037 7.036Zm6.254 1.564h-2.692a8.516 8.516 0 0 1-7.124 0H6.767a6.254 6.254 0 0 0-6.254 6.254v.782a2.346 2.346 0 0 0 2.345 2.346h20.328a2.346 2.346 0 0 0 2.345-2.346v-.782c0-3.454-2.8-6.254-6.255-6.254Z"
    />
  </Svg>
)
export default UsernameIcon
