import React,{useState,useEffect} from "react";
import { Text,View,FlatList,ActivityIndicator} from "react-native";
import CategoryButton from "../../components/categorybutton/categorybutton";

import Style from "./categories.stil";

import useFetch from "../../hooks/useFetch/useFetch";

const Categories = ({ navigation }) => {

    const { data:{categories}, loading, error }  = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    const handleItem = (item) =>{
        navigation.navigate("Detail",item.strCategory);
    }

    const renderItem = ({item}) => <CategoryButton title={item.strCategory} onPress={ () => handleItem(item)} image={item.strCategoryThumb}/> 

    if(loading){
        return <ActivityIndicator size={"large"}/>;
    }
    else if(error){
        return <Text>{error}</Text>
    }

    return(
        <View style={Style.container}>
            <FlatList data={categories} renderItem={renderItem}/>
        </View>
    );
};

export default Categories;