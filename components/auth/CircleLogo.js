import React from 'react';
import { View, Image } from 'react-native';


// You can put your own image and path here

const CircleLogo = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../../assets/logo.jpg")} style={{ width: 300, height: 200, marginVertical: 20 }} />
        </View>
    )
    
};

export default CircleLogo;