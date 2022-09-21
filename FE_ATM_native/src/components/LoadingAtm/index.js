import {useDispatch, useSelector} from 'react-redux'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
// import { Icon } from "@rneui/themed";

// import images from '../../assets/images'

const LoadingAtm = () =>{
    const list = useSelector(state => state.atm.datas) 
    console.log('list = ',list)
    return (  
        <>
            {list && list.map((atm, index) => {
                // console.log(atm)
                return(
                    <View style={styles.atm} key={atm.id}>
                        <View style={styles.atm__button__delete}>
                            {/* <Icon name='close'/> */}
                            {/* <Text>{atm.status}</Text> */}
                            <Image 
                                source={require('../../assets/images/close.jpg')} 
                                style={{width: 30,
                                        height: 30}}
                            />
                        </View>
                        <View style={styles.atm__image}>
                            {/* <img src={images.atm} alt="logo ATM" width='100px'/> */}
                            <Image 
                                source={require('../../assets/images/atm.png')} 
                                style={{width: 120,
                                    height: 120}}
                            />
                        </View>
                        <View>
                            <Text style={styles.atm__status}>{atm.status}</Text>
                        </View>
                        <View>
                            <Text style={styles.atm__name}>{atm.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.atm__username}>{atm.client}</Text>
                        </View>
                        
                    </View>
                )
            })}
        </>
    );
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
export default LoadingAtm;