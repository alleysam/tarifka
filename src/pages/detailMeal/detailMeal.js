import React from "react";
import { View, Text, ActivityIndicator, Button, Linking } from "react-native";

import useFetch from "../../hooks/useFetch/useFetch";

import Style from "./detailMeal.stil";

import DetailCard from "../../components/detailCard/detailCard";

const DetailMeal = ({ route }) =>{

    const id = route.params;
    const {data:{meals}, loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id);
    
    const openLink = () => {
        Linking.openURL(meals[0].strYoutube);
    };

    if(loading){
        return <ActivityIndicator size={"large"}/>;
    }
    else if(error){
        return <Text>{error}</Text>
    }


        


    return(
        <View style={Style.container}>
            <DetailCard 
            imageURL={meals[0].strMealThumb} 
            title={meals[0].strMeal} 
            desc={meals[0].strInstructions}/>
            <View>
                <Button 
                title={"Youtube"}
                color={"#F55353"}
                onPress={openLink}/>
            </View>
        </View>
        

    );
};

export default DetailMeal;