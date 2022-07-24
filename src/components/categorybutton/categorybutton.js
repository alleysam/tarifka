import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "./categorybutton.style";

const CategoryButton  = ( props ) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={Style.container}>

            <View style={Style.descContainer}>
                <Text style={Style.text}>{props.title}</Text>
            </View>
            <View style={Style.imgContainer}>
                <Image style={Style.image} resizeMode="contain" source={{uri: props.image }}/>
            </View>

        </TouchableOpacity>
        
    );
};

export default CategoryButton;