import HomeContent from "../components/Patient/Home";
import { StackNavigationType } from "../types";

const HomeScreen = ({navigation}: StackNavigationType) => {
  return (
    <>
      <HomeContent navigation={navigation} />
    </>
  );
};

export default HomeScreen;
