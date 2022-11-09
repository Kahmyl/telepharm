import { TouchableOpacity } from "react-native";
import {
  LoginContainer,
  Logo,
  LogoText,
  TabContainer,
  TabPartition,
  TabText,
} from "./styles";
import { useEffect, useState } from "react";
import RegisterContent from "./register";
import LoginContent from "./login";
import AsyncStorage from "@react-native-async-storage/async-storage";

type authType = {
  navigation: any;
};

const AuthContent = ({ navigation }: authType) => {
  const [tab, setTab] = useState("sign-in");
  const [checked, setChecked] = useState("patient");

  // useEffect(() => {
  // },[])

  return (
    <LoginContainer>
      <Logo>
        <LogoText>DR TELE</LogoText>
      </Logo>
      <TabContainer>
        <TouchableOpacity onPress={() => setTab("sign-in")}>
          <TabText active={tab === "sign-in"}>SIGN IN</TabText>
        </TouchableOpacity>
        <TabPartition></TabPartition>
        <TouchableOpacity onPress={() => setTab("sign-up")}>
          <TabText active={tab === "sign-up"}>SIGN UP</TabText>
        </TouchableOpacity>
      </TabContainer>
      {tab === "sign-in" ? (
        <LoginContent
          navigation={navigation}
          checked={checked}
          setChecked={setChecked}
        />
      ) : (
        <RegisterContent
          navigation={navigation}
          checked={checked}
          setChecked={setChecked}
        />
      )}
    </LoginContainer>
  );
};

export default AuthContent;
