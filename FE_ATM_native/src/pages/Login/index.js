import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import useLogin from './useLogin';







const Login = () => {
    
    const {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        notify,
        setNotify,
        handleRegister,
        handleLogin,
    } = useLogin()
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    value={email}
                    onChangeText={(email) => { 
                        if (email){
                            setEmailError(false)
                            setNotify(false)
                        }
                        setEmail(email)
                    }}
                />
            </View>

            { emailError && <Text style={styles.message}>Please enter the Email</Text>}
            
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => {
                        setPassword(password)
                        if (password) {
                            setPasswordError(false)
                            setNotify(false)
                        }
                    }}
                />
            </View>

            { passwordError && <Text style={styles.message}>Please enter the Password</Text>}
            { notify && <Text style={styles.message}>{notify}</Text>}

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.register_button}>Register Account</Text>
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
    marginBottom: 15,
    // alignItems: "center",
  },
loginText: {
    color: '#fff',
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
},
message: {
    marginBottom: 15,
    color: 'red',
},

})
export default Login

