import {Ionicons, Entypo, FontAwesome} from '@expo/vector-icons'
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
                    <View>
                        <Text style={{fontWeight: 'bold'}}>
                            <FontAwesome
                                name="user"
                                size={20}
                                style={{paddingLeft: 10}}
                            />
                            Mukul Saini
                        </Text>
                        <Text style={{color: 'gray'}}>
                            <Entypo
                                name="email"
                                size={20}
                                color="black"
                                style={{marginRight: 10}}
                            />
                            mukulsaini95@gmail.com
                        </Text>
                        <Text style={{fontWeight: '600'}}>
                            <Ionicons
                                name="call"
                                size={20}
                                style={{marginRight: 10}}
                            />
                            8802192265
                        </Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    justifyContent: 'space-between',
                    flex: 1,
                    paddingLeft: 10,
                }}>
                <Text style={{fontSize: 25, marginTop: 20}}>
                    <TabBarIcon color="red" name="wallet" /> My Wallet
                </Text>
                {/* <Divider /> */}
                <Text style={{fontSize: 25, marginTop: 20}}>
                    <TabBarIcon color="red" name="history" /> Game History
                </Text>
                {/* <Divider /> */}
                <Text style={{fontSize: 25, marginTop: 20}}>
                    <TabBarIcon color="red" name="user-secret" /> Privacy
                </Text>
                {/* <Divider /> */}
                <Text style={{fontSize: 25, marginTop: 20}}>
                    <TabBarIcon color="red" name="cog" /> Settings
                </Text>
                <View style={{marginVertical: 30}}>
                    <Text
                        style={{
                            fontSize: 30,
                            color: 'red',
                            alignSelf: 'center',
                        }}>
                        {' '}
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
        // backgroundColor: '#fafafa',
        backgroundColor: '#fff',
        padding: 30,
    },
    leftSection: {
        flex: 0.4,
        // alignItems: "center",
        // justifyContent:"center",
    },
    rightSection: {
        flex: 0.6,
        alignItems: 'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        flex: 1,
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
