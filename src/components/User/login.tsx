import { Formik } from "formik";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { userLoginType } from "../../types";
import { loginSchema } from "../../schema/login";
import AuthButton from "../../shared/auth-button";
import { Input, Label } from "../../utils/global";
import { ForgotPassword } from "./styles";
import { loginUser } from "../../store/actions";
import { useAppDispatch } from "../../app/hooks";
import { useState } from "react";

type loginType = {
  navigation: any;
  checked: string;
  setChecked: any;
};

const { width, height } = Dimensions.get("window");

const LoginContent = ({ navigation, checked, setChecked }: loginType) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={async (values: userLoginType) => {
        setLoading(true);
        try {
          const data = await dispatch(loginUser(values));
          console.log(data);
          setLoading(false);
          data.user.is_doctor === 1
            ? navigation.navigate("Doctor")
            : navigation.navigate("Main");
        } catch (error: any) {
          console.log(error);
          setLoading(false);
          if (!error.response) {
            setError("Something went wrong");
          }
          const { message } = error.response.data;
          setError(message);
        }
      }}
    >
      {({
        handleChange,
        handleSubmit,
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

          {/* <CheckContainer>
            <CheckBox
              checked={checked === "patient"}
              checkedColor="#FDFF00"
              containerStyle={{
                margin: 0,
                backgroundColor: "none",
                padding: 0,
              }}
              onIconPress={() =>
                checked === "patient" ? setChecked("") : setChecked("patient")
              }
              onPress={() =>
                checked === "patient" ? setChecked("") : setChecked("patient")
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
          </CheckContainer> */}

          <AuthButton loading={loading} text="Sign in" onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default LoginContent;
