import React from 'react'
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native'

const data = require('../Data')
export default function FlatListProduct() {
    return (
        <FlatList
            style={{display: "flex",flex: 1, flexDirection: 'column'}}
            numColumns={1}
            data={data}
            key={(item) => item.name}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <TouchableOpacity className="flex-container" style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start' ,width: "100%", backgroundColor:"white"}}>
                    <Image
                        source={item.src_image}
                        style={{ display: 'flex', width: 74, height: 74 , flex: 0.2, flexDirection: 'row'}}
                    />
                    <View style={{  flex: 0.5, flexDirection: 'column'}}>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.producer}</Text>
                    </View>
                    <TouchableOpacity style={{flex: 0.2, justifyContent: 'center', backgroundColor: 'red', flexDirection:'row', width: 120, height: 30, alignItems: 'center', marginTop: 10, marginRight: 10}}>
                        <Text style={{color: 'white'}}>Chat</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            )}
        />
    )
}
