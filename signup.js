import React, { useState } from "react";
import { StyleSheet,ScrollView, TouchableOpacity, Button, TextInput, Text, View, Touchable } from 'react-native';



export default function Signup() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    return (

        <View>
            <Text style={styles.Signup}>
                Sign-Up
            </Text><Text style={styles.Are}>
                Are U Regester <TouchableOpacity>
                    <Text style={styles.Signin}>
                        signin
                    </Text>
                </TouchableOpacity>
            </Text>
            <TextInput value={name} style={styles.input} placeholder="Your Name" onChangeText={text => (setname(text))}></TextInput>
            <TextInput style={styles.input} placeholder="Your G-mail" onChangeText={text => (setemail(text))}></TextInput>
            <TextInput style={styles.input} placeholder="Your Password" onChangeText={text => (setpassword(text))}></TextInput>
            <TouchableOpacity>

                <Button

                    title="Sign-Up"
                    color="#841584"
                />
            </TouchableOpacity>
        </View>
       
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#841584",
        padding: 10,
        marginTop: 20,
        color: "#841584",
        borderRadius: 9,
    },
    Signup: {
        fontSize: 30,
        
        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center",
        color: "#841584"

    }, Are: {
        fontSize: 30,
        fontFamily: "sensserif",
        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center",
        color: "grey",
    },
    Signin: {
        fontSize: 25,
        color: "blue",

        textAlign: "center",
    },
});
