import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: undefined;
  Register: undefined;
  Main: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
  Specialty: undefined;
  Specialist: undefined;
  AddRecord: undefined;
  Banner: undefined;
  Doctor: NavigatorScreenParams<DoctorTabParamList> | undefined;
  Notification: undefined;
  Records: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Appointment: undefined;
  Profile: undefined;
};

export type DoctorTabParamList = {
  Home: undefined;
  Appointment: undefined;
  Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type StackNavigationType = {
  navigation: any;
  route?: any;
};

export type userLoginType = {
  email: string;
  password: string;
};

export type userRegisterType = {
  name: string;
  phone: string;
  reg_email: string;
  reg_password: string;
};
