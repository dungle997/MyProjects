import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import useLoadUser from './useLoadUser';

const LoadUser = () => {
    const {
        quece
    } = useLoadUser()
    return (  
        <>
            {
                quece && quece.map((user, index) => {
                    return (
                        <View style={styles.load__list} key={user.name}>
                            <View style={styles.load__list__wrapper}>
                                <View style={styles.load__items__image}>
                                    <Image 
                                        source={require('../../assets/images/bankaccount.png')} 
                                        style={{width: 100,
                                                height: 100}}
                                    />
                                </View>
                                <View style={styles.load__items}>
                                    <Text style={styles.text}>Name: {user.name}</Text>
                                    <Text style={styles.text}>Transaction: {user.transaction}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }) 
            }
            
        </>
    );
}

const styles = StyleSheet.create({
    load__list: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
    },
    load__list__wrapper: {
        backgroundColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'

    },
    load__items__image: {
        marginRight: 20,
        marginLeft: 16,
    },
    load__items: {

    },
    text: {
        fontSize: 20
    },
})

export default LoadUser;