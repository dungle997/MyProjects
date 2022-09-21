import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

const AddingAtm = () => {
    return (    
        <View style={styles.atm} key={atm.id}>
            <View style={styles.atm__image}>
                {/* <img src={images.atm} alt="logo ATM" width='100px'/> */}
                <Image 
                    source={require('../../assets/images/atm.png')} 
                    style={{width: 120,
                        height: 120}}
                />

                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />

            </View>

            <View>
                <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
                    <Text style={styles.loginText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
                    <Text style={styles.loginText}>Create</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
      
    )
}

const styles = StyleSheet.create({
    atm: {
        // marginLeft: 'auto',
        // marginRight: 'auto',
        paddingRight: 30,
        paddingLeft: 40,
        paddingTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        // align
    },
    atm__button__delete: {
        marginLeft: 90
    },
    atm__image: {

    },
    atm__status: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
    },
    atm__name: {
        fontSize: 20,
        color: 'black',
    },
    atm__username: {
        fontSize: 16,
    },
    
})

export default AddingAtm