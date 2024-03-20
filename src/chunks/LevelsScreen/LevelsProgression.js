import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import colors from '../../utils/colors';
import RoundButton from '../../components/RoundButton';
import * as Progress from 'react-native-progress';

const LevelsProgression = ({
    data,
    navigation,
    level
}) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.renderContainer}>
                <View style={styles.leftColumnContainer}>
                    <RoundButton
                        title={item?.arabic}
                        onInfoPress={() => navigation.navigate("Learn")}
                    />
                    <Text style={styles.engLetterText}>{item?.eng}</Text>
                </View>
                <View style={styles.rightColumnContainer}>
                    <Progress.Bar progress={item?.progress} width={50} color={colors.appDarkGreen} borderColor={colors.appBorder} />
                    <TouchableOpacity style={styles.greenTestButton} onPress={() => navigation.navigate("LevelTest", { data: item, level: level })}>
                        <Text style={styles.greenTestButtonText}>TEST</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headinContainer}>
                <View style={styles.leftHeadingContainer}>
                    <Text style={styles.headingText}>letters</Text>
                </View>
                <View style={styles.rightHeadingContainer}>
                    <Text style={styles.headingText}>progression</Text>
                </View>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default LevelsProgression

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        marginVertical: 5,
    },
    headinContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: colors.appBorder,
        padding: 5
    },
    leftHeadingContainer: {
        width: "60%",
        paddingHorizontal: 5
    },
    rightHeadingContainer: {
        width: "40%",
    },
    headingText: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.appBlack
    },
    renderContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: colors.appBorder,
        padding: 5
    },
    leftColumnContainer: {
        width: "60%",
        flexDirection: "row",
        alignItems: "center",
    },
    rightColumnContainer: {
        width: "40%",
        flexDirection: "row",
        alignItems: "center",
    },
    engLetterText: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.appBlack,
        marginLeft: 10
    },
    greenTestButton: {
        width: 80,
        height: 30,
        borderWidth: 1,
        alignItems: "center",
        borderColor: colors.appDarkGreen,
        borderRadius: 10,
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: 10,
        backgroundColor: colors.appDarkGreen
    },
    greenTestButtonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.appWhite
    }
})