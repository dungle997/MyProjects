import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
// import {  } from "@react-native-material/core";
// import useLogin from './useLogin'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    // console.log('email = ',email)
    // console.log('password = ',password)
    // console.log('confirm = ',confirm)

    // console.log('Log   log')
    const onPressLearnMore = () => {
        console.log("dajfklasjdfl")
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Confirm Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(e) => setConfirm(e)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.register_button}>Return Login Page</Text>
            </TouchableOpacity>
           
        </View>
    )
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},  
inputView:{
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    // alignItems: "center",
  },
  
TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // alignItems: 'center'
    // marginLeft: 20,
},
loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#FF1493",
    // color: '#000',
},
register_button: {
    marginTop: 40,
    fontSize: 16
}

})
export default Register

