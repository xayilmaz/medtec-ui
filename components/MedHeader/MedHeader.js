import { useRef, memo } from 'react'

// Style
import { styles } from './MedHeaderStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Assets
import { ArrowLeftOutline } from '../../icons/index'

// Components
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

const MedHeader = ({
    title,
    titleFontSize = 20,
    isLoading,
    rightIcon,
    rigthIconOnPress,
    rightIconActivity,
    rightButtonText,
    rightButtonOnPress,
    rightButtonActivity,
    rightButtonFontSize = 14,
    customGoBackEvent,
    goBackActive = true,
    customHeaderContainerStyle,
    textFontFamily = "Poppins-Medium",
    textColor
}) => {

    const navigation = useNavigation()

    const buttonEnableRef = useRef(false)

    const goBackEvent = () => {
        if (!buttonEnableRef.current) {
            buttonEnableRef.current = true
            navigation.goBack()
        }
    }

    return (
        <View style={[
            styles.container,
            customHeaderContainerStyle
        ]}>
            <View style={styles.textBody}>
                <Text
                    numberOfLines={1}
                    style={[
                        styles.text,
                        {
                            color: textColor,
                            fontSize: titleFontSize,
                            fontFamily: textFontFamily,
                            includeFontPadding: false,
                        }
                    ]}
                >
                    {title}
                </Text>
            </View>

            {goBackActive && (
                <TouchableOpacity
                    style={{ zIndex: 99999, position: 'absolute', alignSelf: "flex-start" }}
                    hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
                    onPress={() => {
                        if (customGoBackEvent) {
                            customGoBackEvent()
                        }
                        else {
                            goBackEvent()
                        }
                    }}
                >
                    <ArrowLeftOutline
                        width={24}
                        height={24}
                        fill={textColor}
                    />
                </TouchableOpacity>
            )}

            {
                rightButtonText && (
                    <View style={styles.saveButton}>
                        {
                            isLoading ?
                                <ActivityIndicator />
                                :
                                <TouchableOpacity
                                    style={{ zIndex: 14 }}
                                    onPress={rightButtonOnPress}
                                    disabled={!rightButtonActivity}
                                    hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
                                >
                                    <Text
                                        style={{
                                            color: textColor,
                                            fontSize: rightButtonFontSize,
                                            fontFamily: textFontFamily,
                                            includeFontPadding: false,
                                        }}
                                        opacity={rightButtonActivity ? 1 : 0.4}
                                    >
                                        {rightButtonText}
                                    </Text>
                                </TouchableOpacity>
                        }
                    </View>
                )}

            {
                rightIcon && (
                    <View style={styles.saveButton}>
                        {
                            isLoading ?
                                <ActivityIndicator />
                                :
                                <TouchableOpacity
                                    style={{ zIndex: 15 }}
                                    onPress={rigthIconOnPress}
                                    disabled={rightIconActivity}
                                    hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
                                >
                                    {rightIcon}
                                </TouchableOpacity>
                        }

                    </View>
                )
            }
        </View>
    )
}

export default memo(MedHeader)