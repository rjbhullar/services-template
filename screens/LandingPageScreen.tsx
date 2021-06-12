import * as React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    useWindowDimensions,
} from 'react-native'
import Swiper from 'react-native-swiper'
import EditScreenInfo from '../components/EditScreenInfo'
import {View} from '../components/Themed'
import {Button, Text} from 'react-native-elements'
const LANDING_PAGE_DETAILS = {
    carousalCards: [
        {
            imageURI:
                'https://media.istockphoto.com/vectors/car-painting-vector-id156891453?b=1&k=6&m=156891453&s=612x612&w=0&h=kPCoQxkMzuhxWzrQrHWfUXC9dcfmOhnP84CYevArOFY=',
            heading: [
                {
                    color: 'black',
                    text: 'HRS Services',
                    fontSize: 40,
                },
            ],
            subHeading: [
                {
                    color: 'grey',
                    text: 'Leave it on us ✌️',
                    fontSize: 23,
                },
            ],
        },
        {
            imageURI:
                'https://graphicriver.img.customer.envatousercontent.com/files/308249461/Business-2872-prw.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=3e3065a786e55b612005976c4d701883',
            heading: [
                {
                    color: 'black',
                    text: 'HRS Services',
                    fontSize: 40,
                },
            ],
            subHeading: [
                {
                    color: 'grey',
                    text: 'Best Car Services',
                    fontSize: 23,
                },
            ],
        },
    ],
    ctaPrimary: [
        {
            text: 'Login',
            textColor: 'white',
            bgColor: '#b31b1b',
            fontSize: 25,
            actionType: 'signinHandler',
        },
        {
            text: 'Signup',
            textColor: 'white',
            bgColor: '#b31b1b',
            fontSize: 25,
            actionType: 'signupHandler',
        },
    ],
    ctaSecondary: [
        {
            text: 'Continue as Guest',
            textColor: '#002D62',
            fontSize: 20,
            actionType: 'guestHandlerHandler',
        },
    ],
}
export default function LandingPageScreen({navigation}) {
    const ctaActions = {
        signinHandler: () => {
            navigation.navigate('LoginPage')
        },
        signupHandler: () => {
            navigation.navigate('SignupPage')
        },
    }

    return (
        <View style={styles.container}>
            <Swiper showsPagination={true}>
                {LANDING_PAGE_DETAILS.carousalCards.map((card, index) => (
                    <View key={'card' + index} style={styles.carousalView}>
                        <Image
                            source={{uri: card.imageURI}}
                            style={styles.carousalImage}
                        />
                        {card.heading.map((heading) => (
                            <Text
                                key={'heading' + index}
                                style={{
                                    fontSize: heading.fontSize,
                                    color: heading.color,
                                    // fontFamily: "Roboto"
                                }}>
                                {heading.text}
                            </Text>
                        ))}
                        {card.subHeading.map((subHeading) => (
                            <Text
                                key={'subHeading' + index}
                                style={{
                                    fontSize: subHeading.fontSize,
                                    color: subHeading.color,
                                    // fontFamily: ""
                                }}>
                                {subHeading.text}
                            </Text>
                        ))}
                    </View>
                ))}
            </Swiper>
            <View style={styles.bottomContent}>
                <View style={{flexDirection: 'row'}}>
                    {LANDING_PAGE_DETAILS.ctaPrimary.map((button, index) => (
                        <Button
                            key={'ctaPrimary' + index}
                            containerStyle={{
                                width: 150,
                                margin: 10,
                                borderRadius: 1000,
                            }}
                            buttonStyle={{backgroundColor: button.bgColor}}
                            title={button.text}
                            titleStyle={{
                                color: button.textColor,
                                fontSize: button.fontSize,
                            }}
                            onPress={ctaActions[button.actionType]}
                        />
                    ))}
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                        style={{flex: 1, height: 1, backgroundColor: 'gray'}}
                    />
                    <View>
                        <Text style={{width: 100, textAlign: 'center'}}>
                            OR
                        </Text>
                    </View>
                    <View
                        style={{flex: 1, height: 1, backgroundColor: 'gray'}}
                    />
                </View>
                <View>
                    {LANDING_PAGE_DETAILS.ctaSecondary.map((button, index) => (
                        <Button
                            key={'ctaSecondary' + index}
                            // containerStyle={{ marginVertica  l: 10 }}
                            type="clear"
                            title={button.text}
                            titleStyle={{
                                color: button.textColor,
                                fontSize: button.fontSize,
                            }}
                            buttonStyle={{
                                backgroundColor: '#fff',
                            }}
                            onPress={() => navigation.navigate('HomePage')}
                        />
                    ))}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    bottomContent: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carousalImage: {
        // flex: 1,
        height: '70%',
        width: '100%',
        resizeMode: 'contain',
    },
    carousalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 30,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
})
