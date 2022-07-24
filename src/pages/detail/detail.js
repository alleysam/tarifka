import React from "react";
import { View, Text, FlatList,ActivityIndicator } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";

import CategoryButton from "../../components/categorybutton/categorybutton";

import Style from "./detail.style";

const Detail = ({route, navigation}) => {
    const mealParams = route.params;
    
    const handleItem = (item) => {
        navigation.navigate("Meal",item.idMeal);
    }

    const {loading, data:{meals}, error} = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+mealParams)

    const renderItem = ({item}) => <CategoryButton title={item.strMeal} image={item.strMealThumb} onPress={()=> handleItem(item)}/> 

    if(loading){
        return <ActivityIndicator size={"large"}/>;
    }
    else if(error){
        return <Text>{error}</Text>
    }

    return(
        <View style={Style.container}>
            <FlatList data={meals} renderItem={renderItem}/>
        </View>
    );
};

export default Detail;