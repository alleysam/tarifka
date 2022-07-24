import React from "react";
import { View, Text, Image,ScrollView } from "react-native";

import Style from "./detailCard.style";

const DetailCard = ( props )=>{
    return(
        <View style={Style.container}>
            <View style={Style.imageContainer}>
                <Image resizeMode="contain" style={Style.image} source={{uri:props.imageURL}}/>
            </View>      
            <View style={Style.descContainer}>
                <View style={Style.titleContainer}>
                    <Text style={Style.title}>{props.title}</Text>
                </View>
                <ScrollView>
                    <Text style={Style.desc}>{props.desc}</Text>
                </ScrollView>

            </View>
        </View>
    );
};

export default DetailCard;