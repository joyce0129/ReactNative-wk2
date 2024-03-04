import React from "react";
import { StyleSheet,Text,View,Image,ScrollView } from "react-native";


const Albumlist =()=>{
    return(
        <ScrollView>
            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                    <Image 
                    style={styles.thumbnailStyle}
                    source={{ 
                        uri:'https://i.pinimg.com/originals/f4/2e/f9/f42ef9cd5053d38a2a011ba7f7a2206c.png'
                }}/>
                <View style={styles.headerContentStyle}>
                    <Text>Lauv</Text>
                    <Text>~How I'am Feeling~</Text>
                </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image 
                    style={styles.imageStyle}
                    source={{
                        uri:
                        "https://i.pinimg.com/originals/a6/1a/c5/a61ac59efd73ff5b8705dd666c97cefa.jpg"
                    }}/>
                </View>
            </View>


            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                    <Image style={styles.thumbnailStyle}
                    source={{ uri:'https://i.pinimg.com/originals/f4/2e/f9/f42ef9cd5053d38a2a011ba7f7a2206c.png'
                }}/>
                <View style={styles.headerContentStyle}>
                    <Text>Lauv</Text>
                    <Text>I met you when I was 18.</Text>
                </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{
                        uri:
                        "https://i.pinimg.com/originals/40/16/22/40162247dcfd906c8e01d9296702ada7.jpg"
                    }}/>
                </View>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                    <Image style={styles.thumbnailStyle}
                    source={{ 
                        uri:'https://i.pinimg.com/originals/f4/2e/f9/f42ef9cd5053d38a2a011ba7f7a2206c.png'
                }}/>
                <View style={styles.headerContentStyle}>
                    <Text>Lauv</Text>
                    <Text>All 4 Nothing</Text>
                </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{
                        uri:
                        "https://i.pinimg.com/originals/8f/d2/02/8fd202f4a768123211194ddb8111e923.jpg"
                    }}/>
                </View>
            </View>


            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                    <Image style={styles.thumbnailStyle}
                    source={{ 
                        uri:'https://i.pinimg.com/originals/f4/2e/f9/f42ef9cd5053d38a2a011ba7f7a2206c.png'
                }}/>
                <View style={styles.headerContentStyle}>
                    <Text>Lauv</Text>
                    <Text>I'am so tired.</Text>
                </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{
                        uri:
                        "https://i.pinimg.com/originals/39/ea/c0/39eac052264205226ebaacee00a44255.jpg"
                    }}/>
                </View>
            </View>


            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                    <Image style={styles.thumbnailStyle}
                    source={{ 
                        uri:'https://i.pinimg.com/originals/f4/2e/f9/f42ef9cd5053d38a2a011ba7f7a2206c.png'
                }}/>
                <View style={styles.headerContentStyle}>
                    <Text>Lauv</Text>
                    <Text>26</Text>
                </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle}
                    source={{
                        uri:
                        "https://i.pinimg.com/originals/d8/f9/0b/d8f90b98e620604e6e9f42e0f4e987dd.jpg"
                    }}/>
                </View>
            </View>

        </ScrollView>

    );
}






const styles = StyleSheet.create({
    thumbnailContainerStyle: {
      flexDirection: "row",
      justifyContent: "flex-start"
    },
    thumbnailStyle: {
      height: 50,
      width: 50,
      margin: 5
    },
    headerContentStyle: {
      flexDirection: "column",
      justifyContent: "space-around",
      paddingLeft: 10
    },
    cardContainerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: "#ddd",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    },
    cardSectionStyle: {
      padding: 5,
      backgroundColor: "#fff",
      borderColor: "#ddd",
      borderBottomWidth: 1
    },
    imageStyle: {
      height: 300,
      width: null
    }
  });
  
  export default Albumlist;
