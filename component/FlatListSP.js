
import { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, Image, Text, View, FlatList, Button, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
export default function FlatListSP({ navigation }) {

  const route = useRoute();

  const [a, setA] = useState(0);
  var [obj, setObj] = useState([]);
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const get = () => {
    fetch("https://6348caf2a59874146b10f39c.mockapi.io/api/user")
      .then(function (res) { return res.json() })
      .then(function (data) {
        setObj(obj = data)
        console.log(data)

      })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error);
        throw error;
      })
  };
  useEffect(() => {
    get();
  }, []);

  const put = () => {
    fetch(`https://6348caf2a59874146b10f39c.mockapi.io/api/user`, {
      method: "POST",
      body: JSON.stringify({ "name": name, "url_image": "http://placeimg.com/640/480/animals" }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    get()
  };
  const deleteItem = (itemId) => {
    fetch(`https://6348caf2a59874146b10f39c.mockapi.io/api/user/${itemId}`,
      {
        method: "DELETE"
      }
    );
    get();
  }
  return (
    <View style={{ display: "flex", flex: 1, flexDirection: 'column' }}>
      <FlatList
        style={{ display: "flex", flex: 1, flexDirection: 'column' }}
        numColumns={1}
        data={obj}
        key={(item) => item.name}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-container" style={{ padding: 10, display: "flex", flexDirection: 'row', justifyContent: 'flex-start', width: "100%", backgroundColor: "white" }}>
            <Image
              source={{ uri: item.url_image }}
              style={{ display: 'flex', width: 74, height: 74, flex: 0.2, flexDirection: 'row' }}
            />
            <View style={{ display: 'flex', flex: 0.4, paddingLeft: 20, flexDirection: 'column' }}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Form')}              
               style={{ display: 'flex', flex: 0.2, justifyContent: 'center', backgroundColor: 'red', flexDirection: 'row', width: 120, height: 30, alignItems: 'center', marginTop: 10, marginRight: 10 }}>
              <Text style={{ color: 'white' }}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 0.2, justifyContent: 'center', backgroundColor: 'red', flexDirection: 'row', width: 120, height: 30, alignItems: 'center', marginTop: 10, marginRight: 10 }}
              onPress={() => deleteItem(item.id)}
            >
              <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={{ display: 'flex', flex: 0.1, flexDirection: "row", justifyContent: 'flex-start' }}>
        <TextInput
          style={{ paddingLeft: 20, display: 'flex', flex: 0.75 }}
          placeholder="Nhap ten san pham"
          onChangeText={(val) => setName(val)}
        ></TextInput>
        <TouchableOpacity
          style={{ display: 'flex', flex: 0.25, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
          onPress={() => put()}
        >
          <Text style={{ flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center", color: "white", fontSize: 19 }}>ADD</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

