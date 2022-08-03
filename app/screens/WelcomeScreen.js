import React from 'react';
import { Button, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View>
            <Text>Welcome Screen</Text>
            <Button
            title="Go to Game"
            onPress={()=>
                props.navigation.navigate('Game')
            }
            />
        </View>
    );
}

export default WelcomeScreen;