import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        height:Dimensions.get("window").height/8,
        width:Dimensions.get("window").width/1.03,
        backgroundColor:"#E84545",
        borderBottomEndRadius:40,
        borderTopEndRadius:40,
        paddingLeft:25,
        marginBottom:5,

        
    },
    image:{
        height:Dimensions.get("window").height/7.5,
        width:Dimensions.get("window").width/3.5,

    },
    text:{
        fontWeight:"bold",
        fontSize:25,
        color:"white",
    },
    descContainer:{
        width:200,
    
    },
    imgContainer:{
        justifyContent:"flex-end",
    }

});