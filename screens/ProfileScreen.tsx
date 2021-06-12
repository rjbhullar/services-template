import {
    Ionicons,
    Entypo,
    FontAwesome,
    AntDesign,
    MaterialIcons,
} from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import {StyleSheet, View, Image, Text, useWindowDimensions} from 'react-native'
import {RectButton, ScrollView} from 'react-native-gesture-handler'

function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name']
    color: string
}) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />
}

export default function LinksScreen() {
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height
    return (
        <View style={[styles.container]}>
            <View style={styles.welcomeContainer}>
                <View style={[styles.leftSection]}>
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
                <View style={styles.rightSection}>
                    <View
                        style={{
                            flexDirection: 'row',
                            padding: 5,
                        }}>
                        <FontAwesome name="user" size={25} color="#b31b1b" />
                        <Text
                            style={{
                                fontWeight: 'bold',
                                margin: 5,
                                width: '100%',
                            }}>
                            Mukul Saini
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 5}}>
                        <Entypo name="email" size={20} color="#b31b1b" />
                        <Text
                            style={{
                                fontWeight: 'bold',
                                margin: 5,
                                width: '100%',
                            }}>
                            mukulsaini95@gmail.com
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 5}}>
                        <Ionicons name="call" size={20} color="#b31b1b" />
                        <Text
                            style={{
                                fontWeight: '600',
                                margin: 5,
                            }}>
                            8802192265
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
            </View>
            <View
                style={{
                    justifyContent: 'space-evenly',
                    flex: 1,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        // paddingVertical: 10,
                        alignItems: 'center',
                    }}>
                    <AntDesign name="profile" size={30} color="#2f95dc" />
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontSize: 20,
                            width: '100%',
                            fontWeight: '500',
                        }}>
                        My Profile
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        alignItems: 'center',
                    }}>
                    <MaterialIcons name="feedback" size={30} color="#2f95dc" />
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontSize: 20,
                            width: '100%',
                            fontWeight: '500',
                        }}>
                        Feedback
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        alignItems: 'center',
                    }}>
                    <Entypo name="help-with-circle" size={30} color="#2f95dc" />
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontSize: 20,
                            width: '100%',
                            fontWeight: '500',
                        }}>
                        Help and Support
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        alignItems: 'center',
                    }}>
                    <AntDesign name="sharealt" size={30} color="#2f95dc" />
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontSize: 20,
                            width: '100%',
                            fontWeight: '500',
                        }}>
                        Invite and Share
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        alignItems: 'center',
                    }}>
                    <Entypo name="info-with-circle" size={30} color="#2f95dc" />
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontSize: 20,
                            width: '100%',
                            fontWeight: '500',
                        }}>
                        About Us
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    flex: 0.2,
                    alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <AntDesign name="poweroff" size={30} color="red" />
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontSize: 20,
                            width: '100%',
                            fontWeight: '500',
                        }}>
                        Logout
                    </Text>
                </View>
            </View>
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
        backgroundColor: '#fafafa',
        padding: 20,
    },
    leftSection: {
        flex: 0.4,
        // alignItems: "center",
        // justifyContent:"center",
    },
    rightSection: {
        flex: 0.6,
    },
    welcomeContainer: {
        alignItems: 'center',
        flex: 0.5,
        flexDirection: 'row',
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
