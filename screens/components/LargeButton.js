//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Color';

// create a component
const LargeButton = ({ title = "Button", onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 40,
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: "60%",
        borderRadius: 20
    },
    buttonText: {
        color: Colors.secondary,
        fontSize: 17,
        fontWeight: 'bold',
    }

});

//make this component available to the app
export default LargeButton;
