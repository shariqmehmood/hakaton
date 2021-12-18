// import React, { useState } from "react";
// import { StyleSheet, Share, View, Text, TextInput, TouchableOpacity } from "react-native";
// import ShareExample from "./share";

// export default function DecideDish() {
//     const [dish1, setdish1] = useState('');
//     const [dish2, setdish2] = useState('');
//     const [dish3, setdish3] = useState('');
//     const [errMsg, setErrMsg] = useState('');
    
//     const salectDish = () => {
//         let num = Math.random() * 3
//         let a = Math.ceil(num)
//         //    console.log(a)
//         if (a === 1) {
           
//             setErrMsg(dish1)
//         }
//         else if (a === 2) {
          
//             setErrMsg(dish2)
//         }
//         else (
           
//             setErrMsg(dish3)


//         )
//     }

  

//     return (
//         <View>
//             <Text style={{ color: "#841584", textAlign: "center", fontSize: 30, fontWeight: "bold", marginTop: 30 }}>
//                 Dish Selecter
//             </Text>


//             <View>
//                 <TextInput value={dish1} style={styles.input} placeholder=" Dish 1" onChangeText={text => (setdish1(text))}></TextInput>
//                 <TextInput value={dish2} style={styles.input} placeholder="Dish 2" onChangeText={text => (setdish2(text))}></TextInput>
//                 <TextInput value={dish3} style={styles.input} placeholder="Dish 3" onChangeText={text => (setdish3(text))}></TextInput>
//             </View>



//             <View>
//                 <TouchableOpacity>
//                     <View style={{ backgroundColor: "#841584", width: 230, marginLeft: "20%", marginTop: 10, height: 50, borderColor: "#841584", borderRadius: 10, }}>
//                         <Text onPress={salectDish} style={{ color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>
//                             Cheak Disigion
//                         </Text>
//                     </View>
//                 </TouchableOpacity>


//             </View>






//             {errMsg ?
//                 <Text style={{ fontSize: 40, textAlign: "center", marginTop: 20, }}>
//                     <View>
//                         <Text>
//                              Dish Salectd For You {'\n'}{'\n'}{'\n'}
//                         </Text>
//                     </View>
//                     <Text style={{ margin:"10px auto", fontSize: 30, color: "black" }} >
//                         {errMsg}
//                     </Text>
                    
//                     <ShareExample/>
//                 </Text>
//                 : null}







//         </View>


//     )
// }

// const styles = StyleSheet.create({

//     input: {
//         height: 50,
//         margin: 12,
//         borderWidth: 1,
//         borderColor: "#841584",
//         padding: 10,
//         marginTop: 18,
//         color: "#841584",
//         borderRadius: 9,
//     },
//     input1: {
//         height: "auto",
//         width: "auto",
//         textAlign: "center",

//         marginTop: 20,
//         padding: 20,
//         color: "#841584",

//         fontSize: 40,
//         fontWeight: "bold",
//     },
//     input2: {
//         height: "auto",
//         width: "auto",
//         fontSize: 30,

//         borderWidth: 1,
//         borderColor: "#841584",
//         borderRadius: 9,
//         marginTop: "5"

//     },


// });




import React, { useState } from "react";
import { StyleSheet, Share, View, Text, TextInput, TouchableOpacity } from "react-native";
export default function DecideDish() {

    return(
        <View>
           <Text>qewqewqewq</Text>
        </View>
    )
}