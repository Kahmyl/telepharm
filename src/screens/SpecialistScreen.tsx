import SpecialistContent from "../components/Patient/Specialist";
import { StackNavigationType } from "../types";

const SpecialistScreen = ({ navigation, route }: StackNavigationType) => {
  return (
    <>
      <SpecialistContent navigation={navigation} route={route} />
    </>
  );
};

export default SpecialistScreen;
