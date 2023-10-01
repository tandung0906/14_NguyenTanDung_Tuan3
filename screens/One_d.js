import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const One_d = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={styles.d}>
      <View style={[styles.background, styles.backgroundPosition]} />
      <View style={[styles.dChild, styles.dItemLayout]} />
      <View style={[styles.dItem, styles.dItemLayout]} />
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <TouchableOpacity
        style={[styles.btnlogin, styles.dInnerLayout]}
        onPress={() => navigate("Two_a")}
      >
        <Text style={[styles.login1, styles.login1Typo]}>LOGIN</Text>
      </TouchableOpacity>
      <View>
        <Text style={[styles.password, styles.emailTypo]}>Password</Text>
        <Image
          style={[styles.eye1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/eye-1.png")}
        />
      </View>
      <Text style={styles.login}>LOGIN</Text>
      <View style={[styles.dInner, styles.dInnerLayout]}>
        <View style={[styles.rectangleParent, styles.backgroundPosition]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={[styles.frameInner, styles.frameLayout]} />
        </View>
      </View>

      <Image
        style={[styles.icofacebook19245101Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icofacebook1924510-1.png")}
      />
      <Image
        style={[styles.icogoogle1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icogoogle-1.png")}
      />

      <Text style={[styles.icozalo, styles.login1Typo]}>z</Text>
      <Text style={[styles.whenYouAgree, styles.forGotYourTypo]}>
        When you agree to terms and conditions
      </Text>
      <Text style={[styles.orLoginWith, styles.forGotYourTypo]}>
        Or login with
      </Text>
      <Text
        style={[styles.forGotYour, styles.forGotYourTypo]}
        onPress={() => navigate("One_b")}
      >
        For got your password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  dItemLayout: {
    height: 54,
    width: screenWidth - 30,
    borderColor: Color.colorWhitesmoke,
    backgroundColor: Color.colorSilver,
    left: 15,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  emailTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  dInnerLayout: {
    height: 45,
    width: screenWidth - 30,
    position: "absolute",
  },
  frameLayout: {
    width: (screenWidth - 35) / 3,
    height: 45,
    borderRadius: Border.br_11xs,
  },
  login1Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  forGotYourTypo: {
    height: 20,
    width: 260,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  background: {
    backgroundColor: "rgba(49, 170, 82, 0.19)",
    width: screenWidth,
    height: screenHeight,
    left: 0,
    top: 0,
  },
  dChild: {
    top: 131,
  },
  dItem: {
    top: 218,
  },
  email: {
    top: 147,
    left: 35,
  },
  btnlogin: {
    top: 334,
    backgroundColor: "#e53935",
    borderRadius: Border.br_11xs,
    height: 45,
    left: 15,
  },
  password: {
    top: 234,
    left: 32,
  },
  login: {
    top: 40,
    left: 145,
    fontSize: 25,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: "#25479b",
  },
  frameItem: {
    backgroundColor: "#0f8ee0",
  },
  frameInner: {
    borderColor: "#0680f1",
    borderWidth: 1,
    borderStyle: "solid",
    width: 110,
    backgroundColor: Color.colorWhite,
  },
  rectangleParent: {
    flexDirection: "row",
  },
  dInner: {
    top: 524,
    left: 19,
  },
  login1: {
    top: 10,
    left: 151,
    fontSize: 20,
  },
  icofacebook19245101Icon: {
    top: 495,
    width: 30,
    height: 30,
    left: 60,
  },
  icogoogle1Icon: {
    top: 465,
    left: 295,
    width: 35,
    height: 35,
  },
  eye1Icon: {
    top: 234,
    left: screenWidth - 70,
    width: 38,
    height: 36,
  },
  icozalo: {
    top: 514,
    left: 160,
    fontSize: 50,
    width: 69,
    height: 31,
  },
  whenYouAgree: {
    top: 397,
    left: 36,
    color: Color.colorBlack,
    width: 260,
    fontSize: FontSize.size_sm,
  },
  orLoginWith: {
    top: 464,
    left: 45,
    color: Color.colorBlack,
    width: 260,
    fontSize: FontSize.size_sm,
  },
  forGotYour: {
    top: 430,
    color: "#5d25fa",
    left: 50,
  },
  d: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    height: screenHeight,
  },
});

export default One_d;
