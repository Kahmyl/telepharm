import { Formik } from "formik";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { userLoginType } from "../../types";
import { loginSchema } from "../../schema/login";
import AuthButton from "../../shared/auth-button";
import {
  Container,
  ErrorText,
  Input,
  Label,
  StyledText,
} from "../../utils/global";
import {
  CheckContainer,
  CreateAccountText,
  ForgotPassword,
  LoginContainer,
  LoginFooter,
  Logo,
  LogoText,
  TabContainer,
  TabPartition,
  TabText,
} from "./styles";
import { useState } from "react";
import { CheckBox } from "@rneui/base";
import { registerSchema } from "../../schema/register";
import { verticalScale } from "../../shared/responsive";

type loginType = {
  navigation: any;
};

const { width, height } = Dimensions.get("window");

const LoginContent = ({ navigation }: loginType) => {
  const [tab, setTab] = useState("sign-in");
  const [checked, setChecked] = useState("patient");
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
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values: userLoginType) => {
            console.log(values);
            navigation.navigate("Main");
          }}
        >
          {({
            handleChange,
            handleSubmit,
            isSubmitting,
            values,
            errors,
            touched,
            handleBlur,
          }) => (
            <>
              <View>
                <Label>Email</Label>
                <Input
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                  isError={touched.email && errors.email ? true : false}
                />
                <Label>Password</Label>
                <Input
                  onChangeText={handleChange("password")}
                  value={values.password}
                  onBlur={handleBlur("password")}
                  textContentType="password"
                  secureTextEntry={true}
                  isError={touched.password && errors.password ? true : false}
                />
              </View>
              <TouchableOpacity>
                <ForgotPassword>Forgot Password?</ForgotPassword>
              </TouchableOpacity>

              <CheckContainer>
                <CheckBox
                  checked={checked === "patient"}
                  checkedColor="#FDFF00"
                  containerStyle={{
                    margin: 0,
                    backgroundColor: "none",
                    padding: 0,
                    // marginLeft: -10,
                  }}
                  onIconPress={() =>
                    checked === "patient"
                      ? setChecked("")
                      : setChecked("patient")
                  }
                  onPress={() =>
                    checked === "patient"
                      ? setChecked("")
                      : setChecked("patient")
                  }
                  size={verticalScale(30, height)}
                  textStyle={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: verticalScale(18, height),
                    lineHeight: verticalScale(22, height),
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    marginLeft: verticalScale(2, height),
                  }}
                  title="Patient"
                  titleProps={{}}
                  uncheckedColor="#FDFF00"
                />
                <CheckBox
                  checked={checked === "doctor"}
                  checkedColor="#FDFF00"
                  containerStyle={{
                    margin: 0,
                    backgroundColor: "none",
                    padding: 0,
                    marginLeft: 20,
                  }}
                  onIconPress={() =>
                    checked === "doctor" ? setChecked("") : setChecked("doctor")
                  }
                  onPress={() =>
                    checked === "doctor" ? setChecked("") : setChecked("doctor")
                  }
                  size={verticalScale(30, height)}
                  textStyle={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: verticalScale(18, height),
                    lineHeight: verticalScale(22, height),
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    marginLeft: verticalScale(2, height),
                  }}
                  title="Doctor"
                  titleProps={{}}
                  uncheckedColor="#FDFF00"
                />
              </CheckContainer>

              <AuthButton text="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{ reg_email: "", reg_password: "", name: "", phone: "" }}
          validationSchema={registerSchema}
          onSubmit={(values: userLoginType) => {
            console.log(values);
            navigation.navigate("Main");
          }}
        >
          {({
            handleChange,
            handleSubmit,
            isSubmitting,
            values,
            errors,
            touched,
            handleBlur,
          }) => (
            <>
              <View>
                <Label>Full Name</Label>
                <Input
                  onChangeText={handleChange("name")}
                  value={values.name}
                  onBlur={handleBlur("name")}
                  isError={touched.name && errors.name ? true : false}
                />
                <Label>Email</Label>
                <Input
                  onChangeText={handleChange("reg_email")}
                  value={values.reg_email}
                  onBlur={handleBlur("reg_email")}
                  isError={touched.reg_email && errors.reg_email ? true : false}
                />
                <Label>Password</Label>
                <Input
                  onChangeText={handleChange("reg_password")}
                  value={values.reg_password}
                  onBlur={handleBlur("reg_password")}
                  textContentType="reg_password"
                  secureTextEntry={true}
                  isError={touched.reg_password && errors.reg_password ? true : false}
                />
                <Label>Phone Number</Label>
                <Input
                  onChangeText={handleChange("phone")}
                  value={values.phone}
                  onBlur={handleBlur("phone")}
                  isError={touched.phone && errors.phone ? true : false}
                />
              </View>
              <TouchableOpacity>
                <ForgotPassword>Forgot Password?</ForgotPassword>
              </TouchableOpacity>

              <CheckContainer>
                <CheckBox
                  checked={checked === "patient"}
                  checkedColor="#FDFF00"
                  containerStyle={{
                    margin: 0,
                    backgroundColor: "none",
                    padding: 0,
                    // marginLeft: -10,
                  }}
                  onIconPress={() =>
                    checked === "patient"
                      ? setChecked("")
                      : setChecked("patient")
                  }
                  onPress={() =>
                    checked === "patient"
                      ? setChecked("")
                      : setChecked("patient")
                  }
                  size={verticalScale(30, height)}
                  textStyle={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: verticalScale(18, height),
                    lineHeight: verticalScale(22, height),
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    marginLeft: verticalScale(2, height),
                  }}
                  title="Patient"
                  titleProps={{}}
                  uncheckedColor="#FDFF00"
                />
                <CheckBox
                  checked={checked === "doctor"}
                  checkedColor="#FDFF00"
                  containerStyle={{
                    margin: 0,
                    backgroundColor: "none",
                    padding: 0,
                    marginLeft: 20,
                  }}
                  onIconPress={() =>
                    checked === "doctor" ? setChecked("") : setChecked("doctor")
                  }
                  onPress={() =>
                    checked === "doctor" ? setChecked("") : setChecked("doctor")
                  }
                  size={verticalScale(30, height)}
                  textStyle={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: verticalScale(18, height),
                    lineHeight: verticalScale(22, height),
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    marginLeft: verticalScale(2, height),
                  }}
                  title="Doctor"
                  titleProps={{}}
                  uncheckedColor="#FDFF00"
                />
              </CheckContainer>

              <AuthButton text="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      )}
    </LoginContainer>
  );
};

export default LoginContent;
