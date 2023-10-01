import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const One_e = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={styles.e}>
      <View style={[styles.d, styles.dPosition]}>
        <View style={[styles.background, styles.dPosition]} />
        <View style={[styles.edtnameParent, styles.edtnameParentLayout]}>
          <View style={[styles.edtname, styles.edtnameParentLayout]} />
          <Text style={[styles.txtname, styles.txtnameTypo]}>Name</Text>
        </View>
        <View style={[styles.edtphoneParent, styles.edtnameParentLayout]}>
          <View style={[styles.edtname, styles.edtnameParentLayout]} />
          <Text style={[styles.txtphone, styles.txtphoneTypo]}>Phone</Text>
        </View>
        <View style={[styles.edtemailParent, styles.edtnameParentLayout]}>
          <View style={[styles.edtname, styles.edtnameParentLayout]} />
          <Text style={[styles.txtemail, styles.txtnameTypo]}>Email</Text>
        </View>
        <View style={[styles.edtngaysinhParent, styles.edtnameParentLayout]}>
          <View style={[styles.edtname, styles.edtnameParentLayout]} />
          <Text style={[styles.txtbirthday, styles.txtphoneTypo]}>
            Birthday
          </Text>
        </View>
        <Text style={[styles.txtregister, styles.txtregisterTypo]}>
          REGISTER
        </Text>
        <TouchableOpacity
          style={[styles.btnregisterParent, styles.btnregisterLayout]}
          onPress={() => navigate("Two_a")}
        >
          <View style={[styles.btnregister, styles.btnregisterLayout]} />
          <Text style={[styles.txtregister1, styles.txtregisterTypo]}>
            REGISTER
          </Text>
        </TouchableOpacity>
        <View style={[styles.edtpasswordParent, styles.edtnameParentLayout]}>
          <View style={[styles.edtname, styles.edtnameParentLayout]} />
          <Text style={[styles.txtpassword, styles.txtnameTypo]}>Password</Text>
          <Image
            style={styles.eye1Icon}
            contentFit="cover"
            source={require("../assets/eye-1.png")}
          />
        </View>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.rdbmaleIcon}
              contentFit="cover"
              source={require("../assets/rdbmale.png")}
            />
            <Text style={[styles.txtmale, styles.txtnameTypo]}>Male</Text>
          </View>
          <View style={[styles.rdbfemaleParent, styles.parentFlexBox]}>
            <Image
              style={styles.rdbmaleIcon}
              contentFit="cover"
              source={require("../assets/rdbfemale.png")}
            />
            <Text style={[styles.txtmale, styles.txtnameTypo]}>Female</Text>
          </View>
        </View>
        <Text style={styles.whenYouAgree}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dPosition: {
    width: screenWidth,
    left: 0,
    top: 0,
    position: "absolute",
    height: screenHeight,
  },
  edtnameParentLayout: {
    height: 54,
    width: screenWidth - 30,
    position: "absolute",
  },
  txtnameTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
  },
  txtphoneTypo: {
    left: 9,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  txtregisterTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  btnregisterLayout: {
    height: 45,
    width: screenWidth - 30,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  background: {
    backgroundColor: "rgba(49, 170, 82, 0.19)",
  },
  edtname: {
    backgroundColor: Color.colorSilver,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  txtname: {
    left: 10,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
    top: 14,
  },
  edtnameParent: {
    top: 97,
    left: 15,
  },
  txtphone: {
    top: 17,
  },
  edtphoneParent: {
    top: 167,
    left: 15,
  },
  txtemail: {
    top: 10,
    left: 10,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  edtemailParent: {
    top: 237,
    left: 15,
  },
  txtbirthday: {
    top: 14,
  },
  edtngaysinhParent: {
    top: 377,
    left: 15,
  },
  txtregister: {
    marginLeft: -58,
    top: 40,
    fontSize: 25,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  btnregister: {
    borderRadius: 2,
    backgroundColor: "#e53935",
    left: 0,
    top: 0,
  },
  txtregister1: {
    marginTop: -11.5,
    marginLeft: -46,
    top: "50%",
    fontSize: 20,
    color: Color.colorWhite,
  },
  btnregisterParent: {
    top: 502,
    left: 15,
  },
  txtpassword: {
    top: 13,
    left: 10,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  eye1Icon: {
    top: 7,
    left: 305,
    width: 38,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  edtpasswordParent: {
    top: 307,
    left: 15,
  },
  rdbmaleIcon: {
    width: 23,
    height: 23,
  },
  txtmale: {
    marginLeft: 10,
  },
  rdbfemaleParent: {
    marginLeft: 50,
  },
  frameParent: {
    top: 453,
    left: 36,
    position: "absolute",
  },
  whenYouAgree: {
    marginLeft: -130,
    top: 561,
    fontSize: 14,
    width: 260,
    height: 20,
    left: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  d: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: screenWidth,
  },
  e: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: screenHeight,
    backgroundColor: Color.colorWhite,
  },
});

export default One_e;
