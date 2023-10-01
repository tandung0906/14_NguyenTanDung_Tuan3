import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const FirstScreen = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={styles.firstscreen}>
      <LinearGradient
        style={[styles.firstscreenChild, styles.childPosition]}
        locations={[0, 0.3, 0.85, 1]}
        colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
      />
      <Image
        style={styles.firstscreenItem}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={[styles.growYourBusiness, styles.weWillHelpTypo]}>{`GROW 
YOUR BUSINESS`}</Text>
      <Text
        style={[styles.weWillHelp, styles.weWillHelpTypo]}
      >{`We will help you to grow your business using
online server`}</Text>
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupLayout]}
        onPress={() => navigate("One_d")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigate("One_e")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.signUp, styles.loginTypo]}>SIGN UP</Text>
      </TouchableOpacity>
      <Text
        style={[styles.howWeWork, styles.login1Typo]}
        onPress={() => navigate("One_e")}
      >
        HOW WE WORK?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
  },
  weWillHelpTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 48,
    width: 119,
    position: "absolute",
  },
  loginTypo: {
    fontSize: FontSize.size_xl,
    top: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  firstscreenChild: {
    width: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    height: "100%",
  },
  firstscreenItem: {
    top: 105,
    left: screenWidth / 2 - 70,
    width: 140,
    height: 140,
    position: "absolute",
  },
  howWeWork: {
    top: 567,
    width: 302,
    height: 53,
    left: 30,
  },
  login1Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  growYourBusiness: {
    top: 297,
    left: 100,
    fontSize: 25,
  },
  weWillHelp: {
    top: 417,
    fontSize: 15,
    left: 45,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGold,
    left: 0,
    top: 0,
  },
  login: {
    left: 30,
  },
  rectangleParent: {
    top: 498,
    width: 119,
    left: 50,
  },
  signUp: {
    left: 21,
  },
  rectangleGroup: {
    left: 220,
    top: 498,
    width: 119,
  },
  firstscreen: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
  },
});

export default FirstScreen;
