import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import colors from '../../utils/colors';
import RoundButton from '../../components/RoundButton';
import Icons from '../../assets/icons';
import fonts from '../../utils/fonts';

const Levels = ({
    data,
    navigation
}) => {

    const renderItem = ({ item }) => {
        return (
            <>
                {item?.locked && <View style={styles.shadowContainer}>
                    <TouchableOpacity style={styles.lockIconContainer} onPress={() => navigation.navigate("UnlockLevels")}>
                        <Image
                            source={Icons?.lockIcon}
                            style={{ width: 30, height: 30, resizeMode: "contain", tintColor: colors.appWhite }}
                        />
                    </TouchableOpacity>
                </View>}
                <TouchableOpacity style={[styles.renderContainer, {
                    borderBottomWidth: item === data[data?.length - 1] ? 0 : 1
                }]} disabled={item?.locked}
                    onPress={() => {navigation.navigate("LevelsScreen", { letters: item?.letters, completed: item?.completed, level:item?.level })}}>
                    <FlatList
                        data={item?.letters}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        scrollEnabled={false}
                        contentContainerStyle={{ width: "auto" }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.leftContainer}>
                                    <View style={{ width: "auto" }}>
                                        <RoundButton
                                            title={item?.arabic}
                                            disabled={true}
                                        />
                                        <Text style={styles.engText}>{item?.eng}</Text>
                                    </View>
                                </View>
                            )

                        }}
                    />
                    <View style={styles.boxContainer}>
                        <View style={styles.boxImageRowContainer}>
                            <Image
                                source={item?.completed >= 1 ? Icons.lampIcon : Icons?.whiteLampIcon}
                                style={[styles.lampIconStyle, { marginHorizontal: 3 }]}
                            />
                            <Image
                                source={item?.completed >= 2 ? Icons.lampIcon : Icons?.whiteLampIcon}
                                style={styles.lampIconStyle}
                            />
                        </View>
                        <Image
                            source={item?.completed >= 3 ? Icons.lampIcon : Icons?.whiteLampIcon}
                            style={styles.lampIconStyle}
                        />
                        <Text style={styles.titleText}>{item?.title}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Levels

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        marginVertical: 10
    },
    renderContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderBottomWidth: 1,
        borderColor: colors.appBorder
    },
    leftContainer: {
        width: "auto",
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 5
    },
    boxContainer: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: colors.appBorder,
        borderRadius: 5,
        alignItems: "center",
        marginLeft: "auto",
        paddingVertical: 5,
        backgroundColor: colors.appLightPink,
        borderColor: colors.appBorder,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginBottom: "auto"
    },
    titleText: {
        color: colors.appBlack,
        marginTop: "auto",
        fontFamily: fonts.PodkovaRegular
    },
    engText: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.appBlack,
        textAlign: "center",
        marginVertical: 5
    },
    shadowContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
        backgroundColor: "rgba(10, 10, 10,0.5)",
        alignItems: "center",
        justifyContent: "center"
    },
    lockIconContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.yellowBg,
        borderRadius: 100
    },
    boxImageRowContainer: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 3,
    },
    lampIconStyle: {
        width: 40,
        height: 30,
        resizeMode: "contain",
    }
})