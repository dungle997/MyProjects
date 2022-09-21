import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function Header() {
    return (  
        <View style={styles.container}>
            <TouchableOpacity style={styles.addAtmBtn}>
                <Text style={styles.textBtn}>Add new ATM</Text>
            </TouchableOpacity>

            <View style={styles.userInfo}>
                <Text style={styles.userName}>DungLQ</Text>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Text style={styles.textBtn}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
        flex: 0,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16

        
    }, 
    addAtmBtn: {
        backgroundColor: '#FF1493',
        height: 40,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    userInfo: {
        flex: 0,
        flexDirection: 'column',
        // backgroundColor: '#fff',
        
    },
    textBtn: {
        backgroundColor: '#FF1493',
        color: "#fff",
        flex: 0,
    },
    logoutBtn: {
        // width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF1493",
        height: 30,
        flex: 0
    },
    userName: {
        color: '#fff',
        fontSize: 20
    }
})

export default Header;