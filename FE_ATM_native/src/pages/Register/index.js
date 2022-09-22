import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import useRegister from './useRegister';

const Register = () => {
    
    const {
        email, 
        setEmail,
        password,
        setPassword,
        confirm,
        setConfirm,
        handleRegister,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        confirmError,
        setConfirmError,
        confirmErrorNoMap,
        setConfirmErrorNoMap,
        login,
        setLogin,
        handleReturnLogin,
    } = useRegister()
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => { 
                        if (email){
                            setEmailError(false)
                            setLogin(false)
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
                    onChangeText={(password) => {
                        setPassword(password)
                        if (password) {
                            setPasswordError(false)
                            setLogin(false)
                        }
                    }}
                />
            </View>
            { passwordError && <Text style={styles.message}>Please enter the Password</Text>}


            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Confirm Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(e) => {
                        setConfirm(e)
                        if (e){
                            setConfirmError(false)
                            setLogin(false)
                        }
                        if (e === password){
                            setConfirmErrorNoMap(false)
                        }
                    }}
                />
            </View>
            { confirmError && <Text style={styles.message}>Please enter the confirm Password</Text>}
            { confirmErrorNoMap && <Text style={styles.message}>Those password did not match. Try again</Text>}

            <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>
            { login && <Text style={styles.messageSuccessed}>Registration completed successfully</Text>}

            <TouchableOpacity onPress={handleReturnLogin}>
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
    marginBottom: 15,
    // flexDirection: 'column'
    // alignItems: "center",
  },
  
TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // alignItems: 'center'
    // marginLeft: 20,
},
registerText: {
    color: '#fff'
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
messageSuccessed: {
    fontSize: 16,
    marginTop: 16,
    color: 'green',
    fontWeight: '500',
}

})
export default Register

