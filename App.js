const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  FirstScreen,
  One_d,
  One_e,
  One_a,
  Two_a,
  One_b,
  One_c,
  XMEye,
} from "./screens";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="FirstScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="FirstScreen" component={FirstScreen} />
            <Stack.Screen name="One_a" component={One_a} />
            <Stack.Screen name="One_b" component={One_b} />
            <Stack.Screen name="One_c" component={One_c} />
            <Stack.Screen name="One_d" component={One_d} />
            <Stack.Screen name="One_e" component={One_e} />
            <Stack.Screen name="Two_a" component={Two_a} />
            <Stack.Screen name="XMEye" component={XMEye} />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
