import React from 'react';
import styles from './style';
import { View, Text } from 'react-native'
import Button from '../../components/Button/Button';

export default AccessHomeView = (props) => {

    const goToHome = () => {
        props.navigation.navigate('Main');
    }    

    return(
        <View style={styles.container}>
             <Button style={styles.buttonEnter} title="Entrar" onPress={goToHome} /> 
        </View>    
    )

}