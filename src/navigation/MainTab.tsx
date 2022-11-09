import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import FeatherIcon from "../shared/Icons/FeatherIcon";
import { horizontalScale, verticalScale } from "../shared/responsive";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const MainTab = createBottomTabNavigator<RootTabParamList>();

export default function MainTabNavigator() {
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          fontFamily: "Inter_500Medium",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: horizontalScale(18, width),
          lineHeight: verticalScale(22, height),
          textAlign: "center",
          textTransform: "uppercase",
        },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FeatherIcon
              size={verticalScale(22, height)}
              style={{
                marginBottom: verticalScale(0, height),
              }}
              name={"home"}
              color={color}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          title: "Appointment",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FeatherIcon
              size={verticalScale(22, height)}
              style={{
                marginBottom: verticalScale(0, height),
              }}
              name="calendar"
              color={color}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}
