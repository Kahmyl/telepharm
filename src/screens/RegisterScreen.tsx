import RegisterContent from "../components/User/register";
import { StackNavigationType } from "../types";

const RegisterScreen = ({ navigation }: StackNavigationType) => {
  return (
    <>
      <RegisterContent navigation={navigation} />
    </>
  );
};

export default RegisterScreen;
