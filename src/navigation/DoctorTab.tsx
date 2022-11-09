import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import FeatherIcon from "../shared/Icons/FeatherIcon";
import { horizontalScale, verticalScale } from "../shared/responsive";
import { Dimensions } from "react-native";
import DoctorHomeScreen from "../screens/DoctorHomeScreen";
import DoctorAppointmentScreen from "../screens/DoctorAppointmentScreen";

const { width, height } = Dimensions.get("window");

const DoctorTab = createBottomTabNavigator<RootTabParamList>();

export default function DoctorTabNavigator() {
  return (
    <DoctorTab.Navigator
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
      <DoctorTab.Screen
        name="Home"
        component={DoctorHomeScreen}
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
      <DoctorTab.Screen
        name="Appointment"
        component={DoctorAppointmentScreen}
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
    </DoctorTab.Navigator>
  );
}
