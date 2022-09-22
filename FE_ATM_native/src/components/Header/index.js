import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import useHeader from './useHeader';

function Header() {
    
    const {
        userName, 
        handleAddAtm,
        handleLogout,
    } = useHeader()
    
    return (  
        <View style={styles.container}>
            <TouchableOpacity style={styles.addAtmBtn} onPress={handleAddAtm}>
                <Text style={styles.textBtn}>Add new ATM</Text>
            </TouchableOpacity>

            <View style={styles.userInfo}>
                <Text style={styles.userName}>{userName}</Text>
                <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
                    <Text style={styles.textBtn}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#113255',
        flex: 0,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    }, 
    addAtmBtn: {
        backgroundColor: '#fff',
        height: 40,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 4,
    },
    userInfo: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#fff',
        
    },
    textBtn: {
        // backgroundColor: '#FF1493',
        color: "#000",
        fontWeight: '700',
        fontSize: 16
    },
    logoutBtn: {
        // width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        height: 30,
        borderRadius: 8,
        marginTop: 4,
        padding: 4,
    },
    userName: {
        color: '#fff',
        fontSize: 20
    }
})
export default Header;