import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";

// import FlatListProduct from "../component/FlatListProduct";
import FlatListSP from "../component/FlatListSP";

// const saveProduct = () => {
//     fetch('', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             firstParam: 'yourValue',
//             secondParam: 'yourOtherValue'
//         })
//     });
// }

export default function Screen1({ navigation}) {
    
    const route = useRoute();


    return (
        <View style={{ display: "flex", flex: 1, flexDirection: "column" , paddingTop: 20}}>
            <View style={{ display: "flex", height: "5%", flexDirection: "row", backgroundColor: '#1BA9FF', paddingTop: 5 }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Form')}
                style={{ display: "flex", width: "5%", flexDirection: "row", justifyContent: "flex-start" }}>
                    <Image
                        source={require('../icon/trolai.png')} />
                </TouchableOpacity>
                <Text style={{ display: "flex", width: "85%", textAlign: 'center', justifyContent: 'center' }}>CHAT</Text>
                <TouchableOpacity style={{ flex: 2, flexDirection: "row-reverse", justifyContent: "center" }}>
                    <Image
                        source={require('../icon/giohang.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flexDirection: "column", flex: 1, width: "100%", flexDirection: 'row' }}>
                <FlatListSP />
            </View>
            
          
        </View>

    )
}
