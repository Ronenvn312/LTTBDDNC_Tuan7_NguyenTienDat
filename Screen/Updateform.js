import React, { useEffect, useState } from "react";
import { View , Text, ScrollView, TouchableOpacity, TextInput} from 'react-native'
// -- rfc
import { useRoute } from '@react-navigation/native'

export default function Updateform() {
  return (
    <View style={{display: "flex", flex: 1,paddingTop: 30,alignItems: "center"}}>

      <View style={{paddingTop: 20, display: "flex", flex: 1, justifyContent: 'flex-start', flexDirection:'column'}}>
        <TouchableOpacity style={{display: "flex", flex: 0.05, flexDirection: "row"}}>
          <Text style={{fontSize: 32}}> FORM UPDATE ITEM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: "flex", flex: 0.05, flexDirection: "row", alignItems: "center"}}>
          <Text> Name : </Text>
          <TextInput 
            placeholder="Nhap ten Item"
          ></TextInput>
        </TouchableOpacity>
        <TouchableOpacity style={{display: "flex", flex: 0.05, flexDirection: "row", alignItems: "center"}}>
          <Text> Image : </Text>
          <TextInput 
            placeholder="Nhap link image"
          ></TextInput>
        </TouchableOpacity>
        <TouchableOpacity 
          
          style={{backgroundColor: 'green', display: "flex", flex: 0.05, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <Text > Update </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
