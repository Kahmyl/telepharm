import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native";
import { StackNavigationType } from "../../../types";
import Header from "../../header";
import {
  ButtonText,
  ButtonView,
  ButtonWrapper,
  RecordCard,
  RecordCardText,
  RecordCardTitle,
  RecordContainer,
} from "./styles";

const RecordContent = () => {
  const nav = useNavigation();
  const handleBack = () => {
    nav.goBack();
  };
  return (
    <RecordContainer>
      <Header title="Medical Records" handleBack={handleBack} />
      <RecordCard>
        <RecordCardTitle
          style={{ borderBottomWidth: 1, borderBottomColor: "#000000" }}
        >
          Name
        </RecordCardTitle>
        <RecordCardText>Benard Micheal</RecordCardText>
      </RecordCard>
      <RecordCard>
        <RecordCardTitle
          style={{ borderBottomWidth: 1, borderBottomColor: "#000000" }}
        >
          Drug Allergies
        </RecordCardTitle>
        <RecordCardText>Metronydazole</RecordCardText>
      </RecordCard>
      <RecordCard>
        <RecordCardTitle
          style={{ borderBottomWidth: 1, borderBottomColor: "#000000" }}
        >
          Medical Conditions
        </RecordCardTitle>
        <RecordCardText>No previous medical conditions</RecordCardText>
      </RecordCard>
      <RecordCard>
        <RecordCardTitle
          style={{ borderBottomWidth: 1, borderBottomColor: "#000000" }}
        >
          Previous Surgery
        </RecordCardTitle>
        <RecordCardText>No previous surgery</RecordCardText>
      </RecordCard>
      <ButtonWrapper>
        <TouchableOpacity>
          <ButtonView>
            <ButtonText>Accept</ButtonText>
          </ButtonView>
        </TouchableOpacity>
        <TouchableOpacity>
          <ButtonView>
            <ButtonText>Reject</ButtonText>
          </ButtonView>
        </TouchableOpacity>
      </ButtonWrapper>
    </RecordContainer>
  );
};

export default RecordContent;
