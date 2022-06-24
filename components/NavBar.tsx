import * as React from 'react';
import PropTypes from 'prop-types';
import { Text ,TouchableOpacity ,View} from 'react-native';
import styles from '../StyleSheet';
import ArrowBack from './icons/ArrowBack';
import MenuIcon from './icons/MenuIcon';


const MyComponent = ({ room }:{room: String}) => (
    <View style={styles.top}>
        <TouchableOpacity style ={styles.back}>
           <ArrowBack width={20} height={20}/>
        </TouchableOpacity>        
        <Text style={styles.text}>
            {room}
        </Text>
        <TouchableOpacity style = {styles.info}>
            <MenuIcon width={20} height={20} />
        </TouchableOpacity>
    </View>
);


export default MyComponent
