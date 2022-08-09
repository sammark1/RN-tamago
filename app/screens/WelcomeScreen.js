import React from 'react';
import {StyleSheet, Button, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Welcome Screen</Text>
            <Button
            title="Go to Game"
            onPress={()=>
                props.navigation.navigate('Game')
            }
            />
            <Button
            title="Quit"
            onPress={()=>
                props.navigation.navigate('Title')
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default WelcomeScreen;