import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'


const Home = () => {
    return (
        <View style={{ flex: 1, color: '#09051C', position: 'relative', backgroundColor: '#fff' }}>
            <View style={{ position: 'absolute', top: 0 }}>
                <Image resizeMode="contain" source={require("../assets/images/background.png")} style={{ width: '100%', height: undefined, aspectRatio: 1, marginTop: -85 }} />

                <LinearGradient
                    colors={['rgba(255,255,255,0.85)', 'white']}
                    style={styles.linearGradient}


                >

                </LinearGradient>
            </View>

            <View style={{ padding: 40, height: '20%', display: 'flex', marginTop: 30, flexDirection: 'row',justifyContent:'center',alignItems:"center" }}>

                <Text style={{ fontSize: 32, marginRight: '10%', color: '#09051C', fontFamily: 'PTSans-Bold', fontWeight: 'bold', flex: 2 }}>Find Your Favorite Food</Text>
                <TouchableHighlight  style={{
                    borderRadius: 15, backgroundColor: 'white', elevation: 6, width: 50, height: 50, shadowColor: '#bfbfbf',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    alignItems:'center',justifyContent:'center'
                }}>
                    <Image resizeMode="contain" style={{width:30,height:30,display:"flex"}} source={{uri:"https://img.icons8.com/material-outlined/24/000000/appointment-reminders--v1.png"}} />
                </TouchableHighlight >
            </View>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
})