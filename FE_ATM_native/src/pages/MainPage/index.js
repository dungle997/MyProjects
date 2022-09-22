import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../components/Header';
import LoadingAtm from '../../components/LoadingAtm';
import AddingAtm from '../../components/AddingAtm';
import LoadUser from '../../components/LoadingUser/LoadUser';
import useMainPage from './useMainPage';

const MainPage = () => {
    const {
        stateAddAtm,
        subarr,
    } = useMainPage()
    return (  
        <ScrollView>
            <View style={styles.mainpage}>
                <Header/>
                <View style={styles.mainpage__content}>
                    <View style={styles.list__atm}>
                        <LoadingAtm/>
                        {stateAddAtm && <AddingAtm/>}
                    </View>
    
                    <View style={styles.quece}>
                        <LoadUser/>
                    </View>
    
                </View>
    
                <View style={styles.mainpage__infomation}>
                    <Text style={{fontSize: 16}}>Transaction Done: {subarr.join(', ')}</Text>
                </View>
                
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    mainpage: {
        flex: 0,
        flexDirection: 'column',

    },
    mainpage__content: {
        flex: 0,
        flexDirection: 'column',
    },
    list__atm: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },  
    quece: {
        marginTop: 24,
        backgroundColor: 'black',
        paddingBottom: 4,
        paddingTop: 4,
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 8,
    },  
    mainpage__infomation: {
        padding: 12,
    }
})
export default MainPage;