//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LargeButton from './components/LargeButton';
import { Colors } from '../constants/Color';
import { useFonts } from 'expo-font';
// create a component
const Home = () => {
    const [fontsLoaded] = useFonts({
        'avenir': require('../assets/fonts/Avenir.ttf'), // Replace with the path to your custom font file
    });
    if (!fontsLoaded) {
        return null; // Return null or a loading screen while the fonts are being loaded
    }
    return (
        <View style={styles.container} >
            <Image style={{ width: "100%", height: "80%", alignSelf: "flex-start" }} source={{ uri: "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Best-Kid-Friendly-Recipes-1.jpg?w=600&auto=compress%2Cformat&fit=crop&dm=1604880029&s=9f6778c28a8196491c9640ae3b1fa134" }} />
            <View style={styles.onBardingTextContainer}>
                <Text style={styles.heading}>
                    Discover all the best {"\n"} recipes you needed
                </Text>
                <Text style={styles.text}>
                    5000+ healthy recipes made by people {"\n"} for your healthy life
                </Text>
                <LargeButton title='Next' onPress={() => { console.log("test") }} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        backgroundColor: '#2c3e50',
    },
    onBardingTextContainer: {
        position: "absolute",
        width: "100%",
        height: "30%",
        backgroundColor: Colors.secondary,
        bottom: 0,
        borderTopStartRadius: 16,
        borderTopRightRadius: 16,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontFamily: "avenir",
        fontStyle: "normal",
        fontWeight: "800",
        color: "#030319",
        fontSize: 25,
        lineHeight: 26,
        letterSpacing: 2

    },
    text: {
        marginTop: 10,
        fontStyle: "normal",
        color: "#030319",
        fontSize: 14,
        lineHeight: 17,
        textAlign: "center",
        fontFamily: "avenir",

    }
});

//make this component available to the app
export default Home;
