import * as React from 'react'
import { Button } from 'react-native-elements'

export default function ClearButton({onPress, title}) {
    return (
        <Button
            buttonStyle={{
                backgroundColor: null,
            }}
            titleStyle={{
                color: '#b31b1b',
            }}
            type="clear"
            title={title}
            onPress={onPress}
        />
    )
}
