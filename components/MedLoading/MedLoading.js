import React from 'react'

// Style
import { styles } from "./MedLoadingStyle"

// Components
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import { BlurView } from '@react-native-community/blur'

export default function MedLoading({
    style,
    source,
    blurType,
    blurViewStyle,
    lottieViewStyle,
    backgroundColor,
    lottieViewContainerStyle,
    reducedTransparencyFallbackColor,
}) {
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: backgroundColor
                },
                style
            ]}
        >
            <BlurView
                blurAmount={1}
                blurType={blurType}
                style={[
                    styles.blurView,
                    blurViewStyle
                ]}
                reducedTransparencyFallbackColor={reducedTransparencyFallbackColor}
            />
            <View
                style={[
                    styles.lottieViewContainer,
                    lottieViewContainerStyle
                ]}
            >
                <LottieView
                    loop
                    autoPlay
                    speed={0.8}
                    style={[
                        styles.lottieView,
                        lottieViewStyle
                    ]}
                    source={source}
                />
            </View>
        </View>
    )
}