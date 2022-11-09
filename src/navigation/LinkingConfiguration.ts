/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: "",
      Main: {
        screens: {
          Home: {
            screens: {
              Home: "home",
            },
          },
          Appointment: {
            screens: {
              Appointment: "appointment",
            },
          },
          Profile: {
            screens: {
              Profile: "profile",
            },
          },
        },
      },
      Doctor: {
        screens: {
          Home: {
            screens: {
              Home: "home",
            },
          },
          Appointment: {
            screens: {
              Appointment: "appointment",
            },
          },
          Profile: {
            screens: {
              Profile: "profile",
            },
          },
        },
      },
      NotFound: "*",
      Register: "register",
      Specialty: "specialty",
      Specialist: "specialist",
      AddRecord: "add_record",
      Banner: "banner",
      Notification: "notification",
    },
  },
};

export default linking;
