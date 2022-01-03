import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';


const Home = () => {
    const [showFilter, setShowFilter] = useState(false)
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



            {/* Welcome text */}
            <View style={{ padding: 30, display: 'flex', marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>

                <Text style={{ fontSize: 32, marginRight: '10%', color: '#09051C', fontFamily: 'PTSans-Bold', fontWeight: 'bold', flex: 2 }}>Find Your Favorite Food</Text>
                <TouchableHighlight

                    style={{
                        borderRadius: 15, backgroundColor: 'white', elevation: 6, width: 50, height: 50, shadowColor: '#bfbfbf',
                        shadowOffset: { width: -2, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                    <Image resizeMode="contain" style={{ width: 30, height: 30 }} source={{ uri: "https://img.icons8.com/material-outlined/24/000000/appointment-reminders--v1.png" }} />
                </TouchableHighlight >
            </View>




            {/* Text input and Filter icon */}
            <View style={{ paddingLeft: 30, paddingRight: 30, paddingBottom: 20, display: 'flex', flexDirection: 'row' }}>
                <View style={{ flex: 2, marginRight: 5 }}>

                    <TextInput placeholder="What do you want to order." placeholderTextColor="#DA6317" style={{ backgroundColor: '#F9A84D', borderRadius: 15, paddingLeft: 40, bottom: 0, fontFamily: 'PTSans-Regular' }}>

                    </TextInput>
                    <Image style={{ width: 25, height: 25, position: 'absolute', top: 12, left: 10 }} source={require('../assets/icons/search.png')} />
                </View>

                {
                    showFilter == false ? (<TouchableHighlight
                        onPress={() => {
                            setShowFilter(!showFilter)
                        }}
                        style={{
                            borderRadius: 15, backgroundColor: '#F9A84D', elevation: 0, width: 50, height: 50, shadowColor: '#bfbfbf',
                            shadowOffset: { width: -2, height: 4 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                        <Image resizeMode="contain" style={{ width: 25, height: 25 }} source={require('../assets/icons/switch.png')} />
                    </TouchableHighlight >) : (<View></View>)
                }
            </View>





            {/* Filter section */}
            {showFilter == true ? (<View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15, height: '100%' }}>
                <Text style={{ color: 'black', fontFamily: 'PTSans-Bold', fontWeight: 'bold' }}>Type</Text>
                <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}>

                    <TouchableHighlight style={{ width: 100, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}>Restaurant</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ width: 80, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}>Menu</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                <Text style={{ color: 'black', fontFamily: 'PTSans-Bold', fontWeight: 'bold', marginTop: 15 }}>Location</Text>
                <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}>

                    <TouchableHighlight style={{ width: 80, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}>1 Km</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ width: 80, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}> {'>10 Km'}</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ width: 80, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}> {'<10 Km'}</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                <Text style={{ color: 'black', fontFamily: 'PTSans-Bold', fontWeight: 'bold', marginTop: 15 }}>Food</Text>
                <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}>

                    <TouchableHighlight style={{ width: 80, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}>Cake</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ width: 70, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}> Soup</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ width: 120, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}> Main Course</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                <View style={{ marginTop: 25, display: 'flex', flexDirection: 'row' }}>

                    <TouchableHighlight style={{ width: 120, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}>Appetizer</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ width: 120, height: 40, backgroundColor: '#F9A84D', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <View >
                            <Text style={{ fontFamily: 'PTSans-Bold', color: '#DA6317' }}> Dessert</Text>
                        </View>
                    </TouchableHighlight>





                </View>
                <View style={{ color: 'black', backgroundColor: '#55CB7F', position: 'absolute', width: '100%', bottom: '40%', height: 60, marginLeft: 30, marginRight: 30, borderRadius: 15, elevation: 3 }}>
                    <TouchableHighlight onPress={() => {
                        setShowFilter(!showFilter)
                    }} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }} >
                        <Text style={{ color: 'white', fontFamily: 'PTSans-Bold' }}>Search</Text>
                    </TouchableHighlight>
                </View>

            </View>) : (<View></View>)}


            {/* Content and products */}
            {showFilter == false ? (<View >
                <ScrollView style={{ marginLeft: 30, marginRight: 30, padding: 14, backgroundColor: '#FAFBFF' }}>
                    {/* Nearest restaurant category */}
                    <View >

                        <View style={{ display: 'flex', flexDirection: 'row', margin: 8 }}>
                            <Text style={{ color: 'black', fontFamily: 'PTSans-Bold', flex: 2 }}>Nearest Restaurant</Text>

                            <TouchableHighlight>
                                <Text style={{ color: '#FF7C32', fontFamily: 'PTSans-Regular', fontSize: 12, textAlign: 'right' }}>View More</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>


                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>


                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>


                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>


                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>
                            <View style={{ elevation: 2, height: 200, backgroundColor: 'white', flex: 1, borderRadius: 14, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/images/vegan.png')} />
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Bold', fontSize: 18 }}>Vegan Resto</Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'PTSans-Regular', fontSize: 13 }}>12 Mins</Text>
                            </View>


                        </View>

                    </View>
                </ScrollView>
            </View>) : (<View></View>)}


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