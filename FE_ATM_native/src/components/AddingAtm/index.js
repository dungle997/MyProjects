import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import useAddingAtm from './useAddingAtm';



const AddingAtm = () => {
    const {
        name,
        setName,
        handleCancel,
        handleCreate,
    } = useAddingAtm()

    return (    
        <View style={styles.atm}>
            <View style={styles.atm__image}>
                {/* <img src={images.atm} alt="logo ATM" width='100px'/> */}
                <Image 
                    source={require('../../assets/images/atm.png')} 
                    style={{width: 120,
                        height: 120,    
                    }}
                />

                <TextInput 
                    style={styles.TextInput}
                    placeholder="ATM Name"
                    placeholderTextColor="#003f5c"
                    value={name}
                    // secureTextEntry={true}
                    onChangeText={(e) => setName(e)}
                />

            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.addBtn} onPress={handleCancel}>
                    <Text style={styles.addText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addBtn} onPress={handleCreate}>
                    <Text style={styles.addText}>Create</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
      
    )
}

const styles = StyleSheet.create({
    atm: {
        marginLeft: 22,
        // marginRight: 'auto',
        // paddingRight: 30,
        padding: 16,
        paddingTop: 24,
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'thistle',
        borderWidth: 1
        // borderStyle:
        // align
    },
    TextInput: {
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        marginTop: 10,
        marginBottom: 10,


    },
    atm__image: {

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addBtn: {
        // flex: 1,
        backgroundColor: '#1273eb',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 4,
        paddingLeft: 4,

    }, 
    addText: {
        height: 28,
        // alignSelf:'stretch',
        color: '#fff'
    },
    
    
})

export default AddingAtm