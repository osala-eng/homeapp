import Svg, {Polygon} from 'react-native-svg';

interface ArrowProps {
    width? : number,
    height? : number,
    color?: string,

}
const Uparrow = ({color='#ffffff', width= 10, height= 10}:ArrowProps) => {
  return (
    <Svg width = {width} height={height} viewBox="0 0 483.049 483.049" >
        <Polygon fill ={color} points="241.524,121.155 241.524,361.894 483.049,361.894"/>
	    <Polygon fill={color} points="0,361.894 241.524,361.894 241.524,121.155"/>
    </Svg>
  )
}

export default Uparrow