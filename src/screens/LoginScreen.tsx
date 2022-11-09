import AuthContent from "../components/User";
import { StackNavigationType } from "../types";

const LoginScreen = ({ navigation }: StackNavigationType) => {
  return (
    <>
      <AuthContent navigation={navigation} />
    </>
  );
};

export default LoginScreen;
