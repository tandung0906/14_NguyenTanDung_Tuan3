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
import { Color, FontFamily, FontSize } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Two_a = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={styles.a}>
      <LinearGradient
        style={styles.aChild}
        locations={[0, 1]}
        colors={["#fbcb00", "#bf9a00"]}
      />
      <View style={[styles.edtpassword, styles.edtpasswordLayout]} />
      <View style={[styles.edtpassword1, styles.edtpasswordLayout]} />

      <View>
        <Image
          style={[styles.avatarUser1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/avatar-user-1.png")}
        />
        <Text style={[styles.txtpassword1, styles.txtpasswordTypo]}>Name</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={[styles.lock1528791Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/lock152879-1.png")}
        />
        <Text style={[styles.txtpassword, styles.txtpasswordTypo]}>
          Password
        </Text>
        <Image
          style={styles.eye1Icon}
          contentFit="cover"
          source={require("../assets/eye-1.png")}
        />
      </View>

      <Text style={styles.txtregister}>LOGIN</Text>

      <TouchableOpacity
        style={styles.btnregister}
        onPress={() => navigate("FirstScreen")}
      >
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      </TouchableOpacity>

      <Text
        style={[styles.createAccount, styles.loginTypo]}
        onPress={() => navigate("One_e")}
      >
        CREATE ACCOUNT
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  edtpasswordLayout: {
    height: 54,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    backgroundColor: Color.colorSilver,
    width: screenWidth - 30,
    left: 15,
    position: "absolute",
  },
  txtpasswordTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  iconPosition: {
    left: 24,
    height: 32,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo: {
    height: 27,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  aChild: {
    top: 0,
    left: 0,
    width: screenWidth,
    backgroundColor: "transparent",
    position: "absolute",
    height: screenHeight,
  },
  edtpassword: {
    top: 266,
  },
  edtpassword1: {
    top: 192,
  },
  txtpassword: {
    top: 250,
    left: 73,
  },
  txtpassword1: {
    top: 208,
    left: 77,
  },
  eye1Icon: {
    left: screenWidth - 95,
    height: 32,
    width: 32,
    top: 250,
    position: "absolute",
    overflow: "hidden",
  },
  lock1528791Icon: {
    top: 250,
    left: 24,
  },
  avatarUser1Icon: {
    top: 201,
  },
  txtregister: {
    top: 82,
    left: 30,
    fontSize: 30,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  btnregister: {
    top: 379,
    borderRadius: 2,
    backgroundColor: "#060000",
    height: 45,
    width: screenWidth - 30,
    left: 15,
    position: "absolute",
  },
  login: {
    top: 10,
    left: 113,
    color: Color.colorWhite,
    width: 147,
  },
  createAccount: {
    top: 469,
    left: 61,
    width: 239,
    color: Color.colorBlack,
    height: 27,
    fontSize: FontSize.size_xl,
  },
  a: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: "100%",
  },
});

export default Two_a;
