import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react'

import ViewAddList from './Components/ViewAddList';
export default function App() {
  const [taskList, settaskList] = useState([])

  const addList =(task)=>{
    settaskList(...taskList,task)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Họ tên : Nguyễn Đức Tùng</Text>
        <Text  style={styles.textHeader}>MSV : PH27567</Text>
       
      </View>
      <ViewAddList onAddList={addList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    marginTop: 40,
    marginLeft: 20,
  },
  textHeader:{
    fontSize:20,
    fontWeight:'bold',
    margin:5
  }
});
