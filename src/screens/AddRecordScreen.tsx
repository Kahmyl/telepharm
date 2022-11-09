import AddRecordContent from "../components/Patient/AddRecord";
import { StackNavigationType } from "../types";

const AddRecordScreen = ({navigation, route}: StackNavigationType) => {
  return (
    <>
      <AddRecordContent navigation={navigation} route={route} />
    </>
  );
};

export default AddRecordScreen;
