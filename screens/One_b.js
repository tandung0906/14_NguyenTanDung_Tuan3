import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const One_b = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={styles.b}>
      <LinearGradient
        style={[styles.a, styles.aPosition]}
        locations={[0, 0.3, 0.85, 1]}
        colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
      >
        <View style={styles.aPosition}>
          <Text style={[styles.forgetPassword, styles.nextTypo]}>{`FORGET 
PASSWORD`}</Text>
          <Text style={[styles.provideYourAccounts, styles.emailTypo]}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
          <TouchableOpacity
            style={[styles.loginParent, styles.loginParentLayout]}
            onPress={() => navigate("One_c")}
          >
            <View style={[styles.login, styles.loginParentLayout]} />
            <Text style={[styles.next, styles.nextTypo]}>NEXT</Text>
          </TouchableOpacity>
          <Image
            style={styles.lock1528791Icon}
            contentFit="cover"
            source={require("../assets/lock152879-1.png")}
          />
          <View style={[styles.rectangleParent, styles.loginParentLayout]}>
            <View style={[styles.groupChild, styles.loginParentLayout]} />
            <Text style={[styles.email, styles.emailTypo]}>Email</Text>
            <Image
              style={[styles.mail29353651Icon, styles.loginParentLayout]}
              contentFit="cover"
              source={require("../assets/mail2935365-1.png")}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  aPosition: {
    width: screenWidth,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: screenHeight,
  },
  nextTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  emailTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  loginParentLayout: {
    height: 45,
    position: "absolute",
  },
  forgetPassword: {
    top: 230,
    left: screenWidth / 2 - 60,
    fontSize: 25,
  },
  provideYourAccounts: {
    top: 320,
    width: screenWidth - 60,
    height: 53,
    left: 30,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  login: {
    backgroundColor: "#e3c000",
    width: screenWidth - 60,
    height: 45,
    left: 0,
    top: 0,
  },
  next: {
    top: 12,
    left: 130,
    fontSize: 18,
  },
  loginParent: {
    top: 471,
    width: screenWidth - 60,
    height: 45,
    left: 30,
  },
  lock1528791Icon: {
    top: 76,
    left: screenWidth / 2 - 52.5,
    width: 105,
    height: 117,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    backgroundColor: "#c4c4c4",
    width: screenWidth - 60,
    height: 45,
    left: 0,
    top: 0,
  },
  email: {
    top: 13,
    left: 48,
    fontFamily: FontFamily.robotoRegular,
  },
  mail29353651Icon: {
    width: 48,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 383,
    width: screenWidth - 60,
    height: 45,
    left: 30,
  },
  a: {
    backgroundColor: "transparent",
  },
  b: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
  },
});

export default One_b;
