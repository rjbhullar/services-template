import * as React from 'react'
import {Button, Text} from 'react-native-elements'
import {
    FontAwesome,
    Entypo,
    Ionicons,
    MaterialIcons,
    AntDesign,
} from '@expo/vector-icons'

const icons = {FontAwesome, Entypo, Ionicons, MaterialIcons, AntDesign}

const iconCommonProps = {
    size: 20,
    color: '#b31b1b',
    style: {marginRight: 10},
}
export default function Icon(iconDetails) {
    const Icon = icons[iconDetails.family]
    return (
        <>
            <Icon {...iconCommonProps} {...iconDetails} />
            {iconDetails.text && <Text style={iconCommonProps}>{iconDetails.text} </Text>}
        </>
    );
}
