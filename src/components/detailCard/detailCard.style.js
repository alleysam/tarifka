import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems:"center",


        
    },
    title:{
        margin:25,
        fontSize:25,
        fontWeight:"bold",
        color:"white",
    },
    imageContainer:{
        alignItems:"center",
        backgroundColor:"white",
        width:Dimensions.get("window").width,
        marginBottom:10,
    },  
    image:{
        height: Dimensions.get("window").height/3,
        width:Dimensions.get("window").width,
    },
    desc:{
        color:"#FEB139",
        fontWeight:"bold",
        fontSize:15,
    },
    descContainer:{
        height:Dimensions.get("window").height/2,
        width:Dimensions.get("window").width/1.02,

        borderRadius:5,
        padding:10,
        backgroundColor:"#143F6B",
    },
    titleContainer:{
        alignItems:"center",
    }
});