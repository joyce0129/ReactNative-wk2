import React from "react";
import { StyleSheet,Text,View } from "react-native";

const Header = ()=> {
    return(
        <View style={styles.headerstyle}>
            <Text style={styles.textStyle}>Albums</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerstyle:{
        backgroundColor:'#D9D9D9',
        justifyContent:'center',
        alignItems:'center',
        height:90,
        paddingTop:30,
        shadowColor:'#000',
        shadowOffset:{ width:0,height:2},
        shadowOpacity:0.2,
        elevation:2

    },
    textStyle:{
        fontSize:30
    },
});

export default Header;