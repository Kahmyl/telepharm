import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import LoginScreen from "../screens/LoginScreen";
// import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
// import TabOneScreen from "../screens/TabOneScreen";
// import TabTwoScreen from "../screens/TabTwoScreen";
import { RootStackParamList, RootTabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import RegisterScreen from "../screens/RegisterScreen";
// import { FaIcon } from "../components/Icons/FaIcons";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import TabThreeScreen from "../screens/TabThreeScreen";
// import TabFourScreen from "../screens/TabFourScreen";
// import HomeScreen from "../screens/HomeScreen";
// import { FoundationIcon } from "../components/Icons/FoundationIcons";
// import { MaterialIcon } from "../components/Icons/MaterialIcons";
// import { IoIcon } from "../components/Icons/IoIcons";
// import ProfileScreen from "../screens/ProfileScreen";
// import { user } from "../utils/staticPost";
// import AddPostScreen from "../screens/AddPostScreen";
// import FollowerScreen from "../screens/FollowerScreen";
// import FollowingScreen from "../screens/FollowingScreen";
// import PostScreen from "../screens/PostsScreen";
// import FriendScreen from "../screens/FriendScreen";
// import { Header } from "../components/Profile/friend";
// import SearchScreen from "../screens/SearchScreen";
// import ChatScreen from "../screens/ChatScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          component={AddPostScreen}
          options={{
            title: "Create Post",
            headerStyle: {
              backgroundColor: "#CC5500",
            },
            headerTitleStyle: {
              fontFamily: "Outfit_500Medium",
            },
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Followers"
          component={FollowerScreen}
          options={{
            title: "Followers",
            headerStyle: {
              backgroundColor: "#CC5500",
            },
            headerTitleStyle: {
              fontFamily: "Outfit_500Medium",
            },
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Following"
          component={FollowingScreen}
          options={{
            title: "Following",
            headerStyle: {
              backgroundColor: "#CC5500",
            },
            headerTitleStyle: {
              fontFamily: "Outfit_500Medium",
            },
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{
            title: "Post",
            headerStyle: {
              backgroundColor: "#CC5500",
            },
            headerTitleStyle: {
              fontFamily: "Outfit_500Medium",
            },
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Friend"
          component={FriendScreen}
          options={{
            headerTitle: () => <Header/>,
            headerStyle: {
              backgroundColor: "#CC5500",
            },
            headerTitleStyle: {
              fontFamily: "Outfit_500Medium",
            },
          }}
        />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();
//   const navigation = useNavigation();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         tabBarActiveTintColor: "#ffffff",
//         tabBarInactiveTintColor: "#C0C0C0",
//         headerStyle: {
//           backgroundColor: "#CC5500",
//         },
//         headerTitleStyle: {
//           fontFamily: "Outfit_500Medium",
//           marginLeft: 10,
//         },
//         // tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: "#CC5500",
//         },
//         tabBarLabelStyle: {
//           color: "#ffffff",
//           fontFamily: "Outfit_500Medium",
//           marginBottom: 5,
//         },
//       }}
//     >
//       <BottomTab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: "Pong",
//           tabBarLabel: "Home",
//           headerTitleStyle: {
//             fontFamily: "DancingScript_700Bold",
//             fontSize: 35,
//             marginLeft: 10,
//           },
//           tabBarIcon: ({ color }) => (
//             <IoIcon
//               size={22}
//               style={{ marginBottom: -3 }}
//               name={"home-sharp"}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           title: "Search",
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <IoIcon
//               size={22}
//               style={{ marginBottom: -3 }}
//               name={"search-sharp"}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="Chat"
//         component={ChatScreen}
//         options={{
//           title: "Chats",
//           tabBarIcon: ({ color }) => (
//             <MaterialIcon
//               size={22}
//               style={{ marginBottom: -3 }}
//               name={"chat"}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: user.name,
//           tabBarIcon: ({ color }) => (
//             <FaIcon
//               size={22}
//               style={{ marginBottom: -3 }}
//               icon={faUserCircle}
//               color={color}
//             />
//           ),
//           headerRight: () => (
//             <View
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//             >
//               <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
//                 <IoIcon
//                   size={22}
//                   name={"md-add-circle-outline"}
//                   style={{ marginRight: 20 }}
//                   color={"#ffffff"}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <FoundationIcon
//                   size={22}
//                   style={{ marginRight: 20 }}
//                   name={"list"}
//                   color={"#ffffff"}
//                 />
//               </TouchableOpacity>
//             </View>
//           ),
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }
