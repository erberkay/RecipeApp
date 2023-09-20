import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NotFavoriteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#7B7B7B"
      strokeWidth={1.092}
      d="M12 20c-.338 0-.668-.095-.953-.276a30.315 30.315 0 0 1-6.948-5.582A11.053 11.053 0 0 1 1 6.574a5.821 5.821 0 0 1 1.807-3.996 5.736 5.736 0 0 1 4.067-1.577 6.56 6.56 0 0 1 2.681.602c.842.388 1.593.95 2.205 1.65a.333.333 0 0 0 .472 0 6.604 6.604 0 0 1 2.209-1.651 6.56 6.56 0 0 1 2.685-.6 5.736 5.736 0 0 1 4.067 1.576A5.822 5.822 0 0 1 23 6.574a11.057 11.057 0 0 1-3.102 7.568 30.332 30.332 0 0 1-6.948 5.58c-.285.181-.615.277-.952.276l.001.002Z"
    />
  </Svg>
)
export default NotFavoriteIcon
1