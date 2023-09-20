import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const PasswordIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M25.53 8.75a8.6 8.6 0 0 1-10.203 8.45l-1.174 1.32a1.172 1.172 0 0 1-.876.393h-1.819v1.954c0 .648-.525 1.173-1.172 1.173H8.33v1.954c0 .648-.525 1.173-1.173 1.173H1.685a1.173 1.173 0 0 1-1.172-1.173V20.18c0-.31.123-.609.343-.829l7.906-7.906A8.6 8.6 0 0 1 16.93.149c4.765 0 8.6 3.836 8.6 8.6Zm-8.6-2.346a2.345 2.345 0 1 0 4.692 0 2.345 2.345 0 0 0-4.691 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.513.15H25.53v25.017H.513z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default PasswordIcon
