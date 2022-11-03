import LoginContent from "../components/User/login";
import { StackNavigationType } from "../types";


const LoginScreen = ({navigation}: StackNavigationType) => {
  return (
    <>
      <LoginContent navigation={navigation}  />
    </>
  );
};

export default LoginScreen;