import React from 'react'

// Styles
import { styles } from './MedButtonStyle'

// Components
import { TouchableOpacity, Text } from 'react-native'

export default function MedButton({
    style,
    onPress,
    activeOpacity = 0.6,
    disabled,
    borderColor,
    borderWidth,
    backgroundColor,
    textColor,
    fontSize = 16,
    textOpacity,
    fontFamily,
    textStyle,
    text,
}) {

    return (
        <TouchableOpacity
            style={[
                {
                    borderColor: borderColor,
                    borderWidth: borderWidth,
                    backgroundColor: backgroundColor
                },
                style,

                styles.buttonBackground,

            ]}
            onPress={onPress}
            activeOpacity={activeOpacity}
            disabled={disabled}
        >

            <Text
                maxFontSizeMultiplier={1}
                style={[
                    {
                        color: textColor,
                        fontSize: fontSize,
                        opacity: textOpacity,
                        writingDirection: "ltr",
                        includeFontPadding: false,
                        textAlignVertical: 'center',
                        fontFamily: fontFamily ?? "Poppins-SemiBold"
                    },
                    textStyle,
                ]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}