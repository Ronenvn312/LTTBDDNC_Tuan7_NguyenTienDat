import React from 'react'
import { Button, TextInput, TouchableOpacity } from 'react-native'

export default function addItem() {
  return (
    <TouchableOpacity>
        <TextInput 
            placeholder='Nhap ten pet'/>
        <TouchableOpacity>
            <Text>ADD Product</Text>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}
