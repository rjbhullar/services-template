import {
    Ionicons,
    Entypo,
    FontAwesome,
    AntDesign,
    MaterialIcons,
} from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import {useEffect} from 'react'
import {StyleSheet, View, Image, Text, useWindowDimensions} from 'react-native'
import {RectButton, ScrollView} from 'react-native-gesture-handler'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { Button, Divider} from 'react-native-elements'
import Icon from '../components/Icon'
function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name']
    color: string
}) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />
}

let PROFILE_JSON = {
    name: 'Mukul Saini',
    email: 'mukulsaini95@gmail.com',
    mobile: '+91-8802192265',
    cta: [
        {
            icon: {
                family: 'FontAwesome',
                fontWeight: 100,
                color: '#b31b1b',
                name: 'history',
            },
            title: 'Order History',
        },
        {
            icon: {
                family: 'MaterialIcons',
                fontWeight: 100,
                color: '#b31b1b',
                name: 'feedback',
            },
            title: 'Feedback',
        },
        {
            icon: {
                family: 'Entypo',
                fontWeight: 100,
                color: '#b31b1b',
                name: 'help',
            },
            title: 'Help and Support',
        },
        {
            icon: {
                family: 'Entypo',
                fontWeight: 100,
                color: '#b31b1b',
                name: 'share',
            },
            title: 'Invite and Share',
        },
        {
            icon: {
                family: 'Entypo',
                fontWeight: 100,
                color: '#b31b1b',
                name: 'info',
            },
            title: 'About us',
        },
    ],
}

export default function ProfileScreen() {
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height

    return (
        <View style={[styles.container]}>
            <View style={styles.welcomeContainer}>
                <View>
                    <View
                        style={{
                            borderRadius: 1000,
                            borderWidth: 2,
                            padding: 2,
                            width: 130,
                            borderColor: 'gray',
                        }}>
                        <Image
                            source={{
                                uri: 'https://origin.go.gq.com.au/wp-content/uploads/2020/01/eminem-godzilla.jpg',
                            }}
                            style={[styles.welcomeImage, {borderRadius: 1000}]}
                        />
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 7,
                        color: 'white',
                        // width: '100%',
                        textAlign: 'center',
                    }}>
                    {PROFILE_JSON.name}
                </Text>
                <Text
                    style={{
                        // fontWeight: 'bold',
                        // margin: 5,
                        // width: '100%',
                        color: 'white',
                        textAlign: 'center',
                    }}>
                    {PROFILE_JSON.mobile}
                </Text>
                <Text
                    style={{
                        // fontWeight: 'bold',
                        // margin: 5,
                        // width: '100%',
                        color: 'white',
                        textAlign: 'center',
                        fontFamily: 'Cochin',
                    }}>
                    {PROFILE_JSON.email}
                </Text>
            </View>
            <View
                style={{
                    // justifyContent: 'space-evenly',
                    // flex: 1,
                    // flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}>
                {PROFILE_JSON.cta.map((action, index) => (
                    <View
                        key={'action' + index}
                        style={{
                            // justifyContent: 'space-evenly',
                            // flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '90%',
                            borderRadius: 5,
                            // shadowColor: 'grey',
                            backgroundColor: 'white',
                            margin: 10,
                            height: 52,
                            shadowColor: 'blue',
                            // shadowOffset: {width: 0, height: 2},
                            shadowOpacity: 0.1,
                            // shadowRadius: 3,
                            elevation: 3,
                            paddingHorizontal: 7,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            {Icon(action.icon)}
                            {/* <Divider  width={25} /> */}
                        </View>
                        <Text
                            style={{
                                // marginLeft: 5,
                                fontSize: 22,
                                // width: '100%',
                                fontWeight: '500',
                                color: 'black',
                                textAlign: 'center',
                            }}>
                            {action.title}
                        </Text>

                        {Icon({
                            family: 'Entypo',
                            name: 'chevron-right',
                            size: 22,
                            color: 'grey',
                        })}
                        {/* </View> */}
                    </View>
                ))}
            </View>

            {/* <Text
                    style={{
                        // marginHorizontal: 20,
                        marginTop: 30,
                        fontSize: 22,
                        fontWeight: 'bold',
                        width: '100%',
                        color: '#b31b1b',
                        // fontWeight: '500',
                        textAlign: 'center',
                    }}>
                    Logout
                </Text> */}
            <Button
                containerStyle={{borderRadius: 120, width: 100}}
                title="Logout"
                onPress={() => {}}
                // icon={
                //     state.formStatus === 'isSubmitting' && (
                //         <ActivityIndicator
                //             color="#FFFFFF"
                //             style={{marginRight: 10}}
                //         />
                //     )
                // }
                raised
            />
        </View>
    )
}

function OptionButton({icon, label, onPress, isLastOption}) {
    return (
        <RectButton
            style={[styles.option, isLastOption && styles.lastOption]}
            onPress={onPress}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.optionIconContainer}>
                    <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
                </View>
                <View style={{}}>
                    <Text style={styles.optionText}>{label}</Text>
                </View>
            </View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        // padding: 20,
        alignItems: 'center',
        // justifyContent:"center",
    },
    leftSection: {
        // flex: 0.4,
        // alignItems: "center",
        // justifyContent:"center",
    },
    rightSection: {
        // flex: 0.6,
    },
    welcomeContainer: {
        // alignItems: 'center',
        // flex: 0.5,
        height: 300,
        width: "100%",
        // flexDirection: 'row',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b31b1b',
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
    },
    welcomeImage: {
        width: 120,
        height: 120,
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
})
