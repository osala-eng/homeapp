import Svg, {Path} from 'react-native-svg';

interface ArrowProps {
    width? : number,
    height? : number,
    color?: string,

}
const Right = ({color='#ffffff', width= 10, height= 10}:ArrowProps) => {
  return (
    <Svg width = {width} height={height} viewBox="0 0 483.049 483.049"> 
        <Path fill={color} d="M121.155 241.524v241.525l240.739-241.525z" />
	    <Path fill={color} d="M121.155 0v241.524h240.739z" />
    </Svg>
  )
}

export default Right









