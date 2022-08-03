import React from 'react';
import {StyleSheet, Button, Text, View } from 'react-native';

function GameScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Game Screen</Text>
            <Button
            title="Go to Welcome"
            onPress={()=>
                props.navigation.navigate('Welcome')
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

export default GameScreen;