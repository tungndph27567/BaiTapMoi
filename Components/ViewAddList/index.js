import { View, StyleSheet, Button, TextInput, FlatList,Keyboard } from 'react-native'
import React, { useState } from 'react'

const ViewAddList = (props) => {
    const [name, setname] = useState('')
    const [infor, setinfor] = useState('')
    const [img, setimg] = useState('')
    const onAddList =() =>{
        props.onAddList(name,infor,img)
        setname('')
        setinfor('')
        setimg('')
        Keyboard.dismiss();
       
    }
   
    const [hideView, sethideView] = useState(false)
    return (
        <>
            <View style={styles.btnView}>
                <Button title='Thêm mới'
                    onPress={() => sethideView(!hideView)}
                />
            </View>
            {
                hideView ?
                    <>
                        <View style={styles.inputs}>
                            <TextInput placeholder='Nhập tên'
                                style={styles.input}
                                onChangeText={(text) => setname(text)}
                            />
                            <TextInput placeholder='Nhập mô tả'
                                style={styles.input}
                                onChangeText={(text) => setinfor(text)}
                            />
                            <TextInput placeholder='Nhập link ảnh'
                                style={styles.input}
                                onChangeText={(text) => setimg(text)}
                            />
                        </View>
                        <View style={styles.addView}>
                            <Button title='Hủy' />
                            <Button title='Thêm '
                            onPress={onAddList} />
                        </View>
                    </>
                    : null
            }
           
          
        </>
    )
}
const styles = StyleSheet.create({
    btnView: {
        alignItems: 'flex-end',
        marginRight: 10
    },
    input: {
        paddingLeft: 10,
        marginTop: 10,
        height: 30,
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,

    },
    inputs: {
        alignItems: "center",
        justifyContent: "center",
    },
    addView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },




})
export default ViewAddList