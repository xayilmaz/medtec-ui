import React from 'react'

// Styles
import { styles } from './MedGradientButtonStyle'

// Components
import { TouchableOpacity, Text } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

export default function MedGradientButton({
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
    colorArray = [
        '#EED484',
        '#E8CE7E',
        '#E3C878',
        '#DDC272',
    ]
}) {

    return (
        <LinearGradient
            colors={colorArray}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 12 }}

        >
            <TouchableOpacity
                style={[
                    {
                        borderColor: borderColor,
                        borderWidth: borderWidth,
                        backgroundColor: "transparent",
                    },
                    style,
                    styles.buttonBackground,
                ]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
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
        </LinearGradient>
    )
}