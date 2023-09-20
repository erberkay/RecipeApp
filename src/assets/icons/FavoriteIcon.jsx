import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FavoriteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF6B00"
      d="M19.865 1.3c-2.355-1.981-5.857-1.625-8.018.576l-.847.86-.846-.86C7.997-.325 4.49-.681 2.136 1.299c-2.698 2.273-2.84 6.353-.425 8.817l8.314 8.474a1.36 1.36 0 0 0 1.946 0l8.315-8.474c2.419-2.464 2.277-6.544-.421-8.817Z"
    />
  </Svg>
)
export default FavoriteIcon
