import React, { useState } from "react";
import { StyleSheet,ScrollView, TouchableOpacity, Button, TextInput, Text,Image, View, Touchable, _ScrollView } from 'react-native';
import { auth, signInWithEmailAndPassword} from '../src/firebase';


import khana from "../img/khana.PNG"


export default function SignIn({ navigation }) {


   
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [errMsg, setErrMsg] = useState('');
    const [userRole, setUserRole] = useState('BranchManager');

    





    
    const sign = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
       console.log(navigation)
            if(userRole==="NeedyPeople"){
                navigation.navigate("NeedyPeoPleForm")
            }

            else(navigation.navigate("BranchManager"))






            

            // if(userRole==="BranchManager"){
              
            //  ◘navigation.navigate('DecideDish')
     
            // }
            // else (userRole===NeedyPeople){
            //  ◘navigation.navigate('DecideDish')
     
     
            // }



                setErrMsg("user auth sucess");
                setTimeout(() => {
                    setErrMsg('');
                }, 5000)

      

       
                
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
                Sign-In
            </Text>
           
            <TextInput style={styles.input} placeholder="Your G-mail" onChangeText={text => (setemail(text))}></TextInput>
            <TextInput style={styles.input} placeholder="Your Password" onChangeText={text => (setpassword(text))}></TextInput>
            <select  name="role" style={{color:"green",width:"335px",height:"40px",border:"2px",borderColor:"green", marginLeft:"15px"}} onChange={(e) => { setUserRole(e.target.value) }}>
                <option value='branchManager'>BranchManager</option>
                <option value='NeedyPeople'>Needy People</option>
            </select>

            <TouchableOpacity>

                <Text onPress={sign} style={{ textAlign: "center", backgroundColor: "green", color: "Black", height: 40, width: 100, paddingTop: 10, marginLeft: "35%", fontWeight: "bold", fontSize: 20, borderColor: "#841584", borderRadius: 10, }} > SignIn</Text>
            </TouchableOpacity>


            {errMsg ? <Text style={{color:"red",textAlign:"center",fontSize:15,fontWeight:"bold"}}>{errMsg}</Text> : null}
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
        
        color: "green",
        borderRadius: 9,
    },
    Signup: {
        fontSize: 30,
        
        fontWeight: "bold",
        marginTop: 50,
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
