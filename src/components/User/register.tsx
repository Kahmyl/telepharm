import { Formik } from "formik";
import { useState } from "react";
import { Dimensions, View } from "react-native";
import { userRegisterType } from "../../types";
import { registerSchema } from "../../schema/register";
import AuthButton from "../../shared/auth-button";
import { Input, Label } from "../../utils/global";
import { CheckContainer } from "./styles";
import { CheckBox } from "@rneui/themed";
import { verticalScale } from "../../shared/responsive";

type registerType = {
  navigation: any;
  checked: string;
  setChecked: any;
};

const { width, height } = Dimensions.get("window");

const RegisterContent = ({ navigation, checked, setChecked }: registerType) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{
        reg_email: "",
        reg_password: "",
        name: "",
        phone: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values: userRegisterType) => {
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
              textContentType="password"
              secureTextEntry={true}
              isError={
                touched.reg_password && errors.reg_password ? true : false
              }
            />
            <Label>Phone Number</Label>
            <Input
              onChangeText={handleChange("phone")}
              value={values.phone}
              onBlur={handleBlur("phone")}
              isError={touched.phone && errors.phone ? true : false}
            />
          </View>

          <CheckContainer>
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
          </CheckContainer>

          <AuthButton text="Sign up" onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default RegisterContent;
