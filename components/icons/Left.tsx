import Svg, {Path} from 'react-native-svg';

interface ArrowProps {
    width? : number,
    height? : number,
    color?: string,

}
const Left = ({color='#ffffff', width= 10, height= 10}:ArrowProps) => {
  return (
    <Svg width = {width} height={height} viewBox="0 0 483.049 483.049"> 
        <Path fill={color} d="M 362 213 v 270 l -242 -244 z" />
	    <Path fill={color} d="M 363 0 v 240 h -242 z" />
    </Svg>
  )
}

export default Left











