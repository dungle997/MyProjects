import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {useDispatch} from 'react-redux'
import { loadDatasAtm } from '../../redux/loadAtmSlice';
import { loadProcessed } from '../../redux/loadProcessedSlice';
import { loadDatas } from '../../redux/loadUserSlice';
import LoadingAtm from '../../components/LoadingAtm';


const MainPage = ({navigation}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadDatas())
        dispatch(loadDatasAtm())
        dispatch(loadProcessed())
    }, [])
    return (  
        <ScrollView>
            <View style={styles.mainpage}>
                <Header/>
                <View style={styles.mainpage__content}>
                    <View style={styles.list__atm}>
                        <LoadingAtm/>
                    </View>
    
                    <View style={styles.quece}>
                        <Text>quece</Text>
                    </View>
    
                </View>
    
                <View style={styles.mainpage__infomation}>
                    <Text>infomation</Text>
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
        // flex: 1
    },  
    mainpage__infomation: {

    }
})
export default MainPage;