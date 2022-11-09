import HomeContent from "../components/Doctor/Home";
import { StackNavigationType } from "../types";

const DoctorHomeScreen = ({navigation}: StackNavigationType) => {
  return (
    <>
      <HomeContent navigation={navigation} />
    </>
  );
};

export default DoctorHomeScreen;
