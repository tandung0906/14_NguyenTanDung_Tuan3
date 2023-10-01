import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const XMEye = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={styles.xmeye}>
      <View style={[styles.eyeball3097971, styles.iconPosition]}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupChildLayout1]}
        onPress={() => navigate("One_d")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      </TouchableOpacity>
      <View style={[styles.registerParent, styles.parentFlexBox]}>
        <Text style={styles.registerTypo} onPress={() => navigate("One_e")}>
          Register
        </Text>
        <Text
          style={[styles.forgotPassword, styles.registerTypo]}
          onPress={() => navigate("One_b")}
        >
          Forgot Password
        </Text>
      </View>
      <View style={[styles.pleaseInputUserNameParent, styles.parentPosition]}>
        <Text style={[styles.pleaseInputUser, styles.loginTypo]}>
          Please input user name
        </Text>
        <View style={[styles.groupItem, styles.lineViewLayout]} />
        <Image
          style={[styles.groupInner, styles.groupInnerPosition]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
      </View>
      <View style={[styles.pleaseInputPasswordParent, styles.parentPosition]}>
        <Text style={[styles.pleaseInputUser, styles.loginTypo]}>
          Please input password
        </Text>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <Image
          style={[styles.groupInner, styles.groupInnerPosition]}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
      </View>
      <View style={[styles.otherLoginMethodsParent, styles.parentPosition]}>
        <Text style={[styles.otherLoginMethods, styles.registerTypo]}>
          Other Login Methods
        </Text>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
      </View>
      <View style={[styles.groupParent, styles.parentFlexBox]}>
        <Image
          style={styles.childGroupLayout}
          contentFit="cover"
          source={require("../assets/group-8.png")}
        />
        <View style={[styles.rectangleGroup, styles.childGroupLayout]}>
          <View style={[styles.rectangleView, styles.childGroupLayout]} />
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.childGroupLayout]}>
          <View style={[styles.groupChild4, styles.childGroupLayout]} />
          <Image
            style={[styles.brandicofacebookIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/brandicofacebook.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout1: {
    height: 48,
    width: 300,
  },
  groupChildPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  loginTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  registerTypo: {
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
  },
  parentPosition: {
    width: 300,
    left: 30,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 301,
    borderTopWidth: 1,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupInnerPosition: {
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    width: 63,
    borderColor: Color.colorBlue,
    top: 11,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  childGroupLayout: {
    height: 74,
    width: 74,
  },
  groupIcon: {
    width: 112,
    height: 107,
  },
  eyeball3097971: {
    marginLeft: -70,
    top: 33,
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 17,
    left: "50%",
  },
  groupChild: {
    backgroundColor: "#386ffc",
    height: 48,
    width: 300,
  },
  login: {
    marginTop: -11,
    marginLeft: -26,
    top: "50%",
    color: Color.colorWhite,
    left: "50%",
  },
  rectangleParent: {
    top: 361,
    left: 30,
    height: 48,
    position: "absolute",
  },
  forgotPassword: {
    marginLeft: 97,
  },
  registerParent: {
    top: 429,
    left: 31,
  },
  pleaseInputUser: {
    top: 9,
    left: 45,
    color: Color.colorSilver,
  },
  groupItem: {
    top: 37,
  },
  groupInner: {
    width: 30,
    height: 30,
    left: 0,
  },
  pleaseInputUserNameParent: {
    top: 195,
    height: 37,
  },
  lineView: {
    top: 43,
  },
  pleaseInputPasswordParent: {
    top: 268,
    height: 43,
  },
  otherLoginMethods: {
    left: 66,
    top: 0,
    position: "absolute",
  },
  groupChild2: {
    left: 0,
  },
  groupChild3: {
    left: 238,
  },
  otherLoginMethodsParent: {
    top: 488,
    height: 21,
  },
  rectangleView: {
    backgroundColor: "#f4aa47",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "63.51%",
    width: "75.68%",
    top: "17.57%",
    right: "12.16%",
    bottom: "18.92%",
    left: "12.16%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleGroup: {
    marginLeft: 42,
  },
  groupChild4: {
    backgroundColor: "#3a579c",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  brandicofacebookIcon: {
    top: 14,
    left: 21,
    width: 32,
    height: 45,
  },
  groupParent: {
    marginLeft: -153,
    top: 538,
    left: "50%",
  },
  xmeye: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default XMEye;
