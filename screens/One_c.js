import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const One_c = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={styles.c}>
      <View style={[styles.b, styles.bPosition]}>
        <LinearGradient
          style={[styles.a, styles.bPosition]}
          locations={[0, 0.3, 0.85, 1]}
          colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
        >
          <View style={styles.bPosition}>
            <Text style={[styles.forgetPassword, styles.nextTypo]}>CODE</Text>
            <Text style={[styles.verification, styles.verificationPosition]}>
              VERIFICATION
            </Text>
            <TouchableOpacity
              style={[styles.loginParent, styles.loginLayout]}
              onPress={() => navigate("XMEye")}
            >
              <View style={[styles.login, styles.loginLayout]} />
              <Text style={[styles.next, styles.nextTypo]}>VERIFY CODE</Text>
            </TouchableOpacity>
            <Text
              style={[styles.enterOntimePassword, styles.verificationPosition]}
            >{`Enter ontime password sent on
++849092605798`}</Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameChildShadowBox} />
              <View style={styles.frameChildShadowBox} />
              <View style={styles.frameChildShadowBox} />
              <View style={styles.frameChildShadowBox} />
              <View style={styles.frameChildShadowBox} />
              <View style={styles.frameChildShadowBox} />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bPosition: {
    width: screenWidth,
    position: "absolute",
    left: 0,
    top: 0,
    overflow: "hidden",
    height: screenHeight,
  },
  nextTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  verificationPosition: {
    height: 53,
    width: 302,
    marginLeft: -151,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  loginLayout: {
    height: 50,
    width: screenWidth - 20,
    position: "absolute",
  },
  forgetPassword: {
    marginLeft: -77,
    top: 113,
    fontSize: 60,
  },
  verification: {
    top: 245,
    fontSize: 20,
  },
  login: {
    backgroundColor: "#e3c000",
    left: 0,
    top: 0,
    width: 339,
  },
  next: {
    marginTop: -11,
    marginLeft: -55.5,
    top: "50%",
    fontSize: 18,
  },
  loginParent: {
    top: 471,
    left: 11,
  },
  enterOntimePassword: {
    top: 320,
    fontSize: 15,
  },
  frameChildShadowBox: {
    width: 50,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSilver,
    height: 50,
  },
  rectangleParent: {
    marginLeft: -150,
    top: 387,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  a: {
    backgroundColor: "transparent",
  },
  b: {
    backgroundColor: Color.colorWhite,
    width: screenWidth - 30,
    position: "absolute",
  },
  c: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
    backgroundColor: Color.colorWhite,
  },
});

export default One_c;
