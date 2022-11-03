import { Formik } from "formik";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { userRegisterType } from "../../types";
import { registerSchema } from "../../schema/register";
import AuthButton from "../../shared/auth-button";
import { Container, ErrorText, Input } from "../../utils/global";
import {
  CreateAccountText,
  LoginContainer,
  LoginFooter,
  Logo,
  LogoText,
} from "./styles";

type registerType = {
  navigation: any;
};

const RegisterContent = ({ navigation }: registerType) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const dispatch = useAppDispatch();

  return (
    <Container>
      <LoginContainer>
        <Logo>
          <LogoText>Pong</LogoText>
        </Logo>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={registerSchema}
          onSubmit={async (values: userRegisterType) => {
            setLoading(true);
            try {
              //   await dispatch(createUser(values));
              setLoading(false);
              setError("");
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
                <Input
                  placeholder="Username"
                  onChangeText={handleChange("name")}
                  value={values.name}
                  onBlur={handleBlur("name")}
                  isError={touched.name && errors.name ? true : false}
                />
                {touched.name && errors.name && (
                  <ErrorText>{touched.name && errors.name}</ErrorText>
                )}
                <Input
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                  isError={touched.email && errors.email ? true : false}
                />
                {touched.email && errors.email && (
                  <ErrorText>{touched.email && errors.email}</ErrorText>
                )}

                <Input
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  onBlur={handleBlur("password")}
                  textContentType="password"
                  secureTextEntry={true}
                  isError={touched.password && errors.password ? true : false}
                />
                {touched.password && errors.password && (
                  <ErrorText>{touched.password && errors.password}</ErrorText>
                )}
              </View>
              <AuthButton
                loading={loading}
                text="Create Account"
                onPress={handleSubmit}
              />
              <TouchableOpacity onPress={() => navigation.navigate("Root")}>
                <LoginFooter>
                  <CreateAccountText>Sign in</CreateAccountText>
                </LoginFooter>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </LoginContainer>
    </Container>
  );
};

export default RegisterContent;
