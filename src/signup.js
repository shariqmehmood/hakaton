import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, Button, TextInput, Text, View, Touchable } from 'react-native';
import { auth, createUserWithEmailAndPassword, db,doc ,setDoc} from "../src/firebase"
import * as Facebook from 'expo-facebook';
import khana from "../img/khana.png"
export default function Signup({ navigation }) {
    const [userRole, setUserRole] = useState('BranchManager');
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errMsg, setErrMsg] = useState('');

    async function faceboook() {
        try {
          await Facebook.initializeAsync({
            appId: '482340653104593',
          });
          const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            alert("Hi Shariq") 
            navigation.navigate('DecideDish')
            // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
            // type === 'cancel'
        }
    } catch ({ message }) {
        //   alert(`Facebook Login Error: ${message}`);
        }
      }


    const regesterme =  async () => {
    try {
       
        
        let { user } = await createUserWithEmailAndPassword(auth, email, password);
        let dataRef = doc(db, 'users', user.uid)
        console.log(email,password,userRole)
        navigation.navigate('SignIn')
        await setDoc(dataRef, {
            email: user.email,
            uid: user.uid,
            userRole
        });
       
      
    } catch (err) {
        setErrMsg(err.message);
        setTimeout(() => {
            setErrMsg('');
        }, 5000)
    }
}


    return (

        <View>


            <Image source={khana} style={styles.img}></Image>
            <Text style={styles.Signup}>
                Sign-Up
            </Text><Text style={styles.Are}>
                Are U Regester
                 <TouchableOpacity>
                    <Text onPress={()=>{ navigation.navigate('SignIn')}} style={styles.Signin}>
                        signin
                    </Text>
                </TouchableOpacity>
            </Text>
   
            <TextInput style={styles.input} placeholder="Your G-mail" onChangeText={text => (setemail(text))}></TextInput>
            <TextInput style={styles.input} placeholder="Your Password" onChangeText={text => (setpassword(text))}></TextInput>
            <select  name="role" style={{color:"green",width:"335px",height:"40px",border:"2px",borderColor:"green", marginLeft:"15px"}} onChange={(e) => { setUserRole(e.target.value) }}>
                <option value='Needy People'>Needy People</option>
                {/* <option value='branchManager'>BranchManager</option> */}
            </select>
            <TouchableOpacity>

                <Text onPress={regesterme} style={{ textAlign: "center", backgroundColor: "green", color: "Black", height: 40, width: 100, paddingTop: 10, marginLeft: "35%", fontWeight: "bold", fontSize: 20, borderColor: "#841584", borderRadius: 10, }} > SignUp</Text>
            </TouchableOpacity>

            {errMsg ? <Text style={{color:"red",textAlign:"center",fontSize:15,fontWeight:"bold"}}>{errMsg}</Text> : null}
            {/* <Text style={{ marginTop: 5, color: "grey", fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
                OR Countinue With
            </Text> */}


            {/* <View>
                <TouchableOpacity>
                    <View style={{ backgroundColor: "#841584", width: 200, marginLeft: "25%", marginTop: 10, height: 50, borderColor: "#841584", borderRadius: 10 }}>
                        <Text onPress={faceboook} style={{ color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>
                            Facebook
                        </Text>
                    </View>
                </TouchableOpacity>


            </View> */}
           






        </View>
    )
}
const styles = StyleSheet.create({
   img:{
    height: 200,
    width:200,
    marginLeft:70,
   },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "green",
        padding: 10,
        marginTop: 18,
        color: "green",
        borderRadius: 9,
    },
    Signup: {
        fontSize: 30,

        fontWeight: "bold",
        textAlign: "center",
        color: "green"

    }, Are: {
        fontSize: 30,

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


