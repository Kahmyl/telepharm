import SpecialtyContent from "../components/Patient/Specialty";
import { StackNavigationType } from "../types";

const SpecialtyScreen = ({ navigation, route }: StackNavigationType) => {
  return (
    <>
      <SpecialtyContent navigation={navigation} route={route} />
    </>
  );
};

export default SpecialtyScreen;
