import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import MaterialIcon from "../../../shared/Icons/MaterialIcon";
import { StackNavigationType } from "../../../types";
import Header from "../../header";
import { SelectCard, SpecialtyContainer, SpecialtySelectText } from "./styles";

const SpecialtyContent = ({ route, navigation }: StackNavigationType) => {
  const nav = useNavigation();
  const handleBack = () => {
    nav.goBack();
  };
  const { type } = route.params;
  return (
    <SpecialtyContainer>
      <Header title="Select Specialty" handleBack={handleBack} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Specialist", { type })}
      >
        <SelectCard>
          <SpecialtySelectText>Oupatient department</SpecialtySelectText>
          <MaterialIcon color="#000000" name="keyboard-arrow-right" size={24} />
        </SelectCard>
      </TouchableOpacity>
    </SpecialtyContainer>
  );
};

export default SpecialtyContent;
