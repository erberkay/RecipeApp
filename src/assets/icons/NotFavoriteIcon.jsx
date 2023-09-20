import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NotFavoriteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF6B00"
      d="m12.204 2.226-.847.861L11 3.45l-.356-.363-.847-.86v-.001C7.802.19 4.59-.112 2.458 1.682l9.745.544Zm0 0c2-2.036 5.207-2.338 7.339-.544l-7.34.544Zm7.725 7.54c2.218-2.259 2.087-6-.386-8.084l.386 8.084Zm0 0-8.314 8.473a.86.86 0 0 1-1.233 0L2.068 9.766m17.86 0H2.069m0 0c-2.214-2.259-2.083-6.001.39-8.084l-.39 8.084Z"
    />
  </Svg>
)
export default NotFavoriteIcon
