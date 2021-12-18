import React, { useState } from "react";

import { StyleSheet,ScrollView, TouchableOpacity, Button, TextInput, Text,Image, View, Touchable, _ScrollView } from 'react-native';
import ImagePickerExample from "./imgpicker";
import { db ,addDoc,collection} from "../firebase";

export default function NeedypeopleForm(){
    const [name, setname] = useState("")
    const [fname, setfname] = useState("")
    const [cnic, setcnic] = useState("")
    const [DOB, setDOB] = useState("")
    const [familymembercount,setfamilyMembercount] = useState("")
    const [pakages, setpakages] = useState("")
    const [errMsg, setErrMsg] = useState('');
    const [color, setcolor] = useState("green");
    // const [image,setimage]=useState("")



    // 

    const SendRequest= async()=>{
      
        if (name===""){
            setcolor("red")
             
            setErrMsg(" Name Required");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }else if(fname===""){
            setcolor("red")
        
        
            setErrMsg("fname Requried");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
        else if(cnic===""){
            setcolor("red")
        
        
            setErrMsg("cnic Requried");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
            else if(DOB===""){
                setcolor("red")
            
            
                setErrMsg("DOB Requried");
                setTimeout(() => {
                    setErrMsg('');
                }, 5000)
        }
        else if(familymembercount===""){
            setcolor("red")
        
        
            setErrMsg("family person count Requried");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
    }
        else if(pakages===""){
            setcolor("red")
        
        
            setErrMsg("enter pkg Requried");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
    }
   
        else{
        
        
                try {
                    let obj={
                       name,
                       fname,
                       cnic,
                       DOB,
                       familymembercount,
                       pakages,
                       
                    }
                    setname("");
                    let input_text=collection(db, "Needy-People-Request");
                    await addDoc(input_text,obj)
                    
                    setcolor("green")
                    setErrMsg("Sucessfully send Request");
                    setTimeout(() => {
                        setErrMsg('');
                    }, 5000)
                }
                catch  {
                    setErrMsg("Failed To send Request");
                    setTimeout(() => { 
                        setErrMsg('');
                    }, 5000)
                }
          
            }
        }
        
    // 
    return(





        <View>
            <Text style={styles.Signup}>
                Add Bio-Detail
            </Text>

       <TextInput style={styles.input} placeholder="Name" onChangeText={text => (setname(text))}></TextInput>
       <TextInput style={styles.input} placeholder="FName" onChangeText={text => (setfname(text))}></TextInput>
       <TextInput style={styles.input} placeholder="Cnic" onChangeText={text => (setcnic(text))}></TextInput>
       <TextInput style={styles.input} placeholder="DateofBirth" onChangeText={text => (setDOB(text))}></TextInput>
       <TextInput style={styles.input} placeholder="NumberOfFamilyMember" onChangeText={text => (setfamilyMembercount(text))}></TextInput>
       <select  name="role" style={{color:"green",width:"335px",height:"40px",border:"2px",borderColor:"green", marginLeft:"15px"}} onChange={(e) => { setpakages(e.target.value) }}>
                <option value='For Mountly Pkg'>For Mountly Pkg</option>
                <option value='Daily 2 Times'>Daily 2 Times</option>
                <option value='Daily 1 Times'>Daily 1 Times</option>

        </select>

        {errMsg ? <Text style={{color:"red",textAlign:"center",fontSize:15,fontWeight:"bold"}}>{errMsg}</Text> : null}

           <View>
               <ImagePickerExample/>
           </View>

           <Text style={styles.button} onPress={SendRequest}>Send Request</Text>
        
    </View>
        )
}


const styles = StyleSheet.create({
    
    
       input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "green",
        padding: 10,
        
        color: "green",
        borderRadius: 9,
    },Signup: {
        fontSize: 30,
        
        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center",
        color: "green"

    }
    ,
    button:{
        color:"Black",
        fontSize:20,
        border:"2px",
        textAlign:"center",
        borderColor:"green",
        backgroundColor:"green",
        width:200,
        marginLeft:"20%",
        marginTop:5,

        
    }
    
});
