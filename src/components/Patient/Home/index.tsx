import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import {
  BaseContainer,
  BaseText,
  HomeContainer,
  Logo,
  LogoText,
  Subtitle,
  TopContainer,
  TypeFlex,
  TypeImage,
  TypeText,
  TypeWrapper,
} from "./styles";

const patientImage = require("../../../../assets/images/patient.png");
const doctorImage = require("../../../../assets/images/doctor.png");

const HomeContent = ({ navigation }: any) => {
  return (
    <HomeContainer>
      <TopContainer>
        <Logo>
          <LogoText>DR TELE</LogoText>
        </Logo>
        <Subtitle>Welcome Bernard</Subtitle>
        <TypeFlex>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Specialty", { type: "appointment" })
            }
          >
            <TypeWrapper>
              <TypeImage source={patientImage} />
              <TypeText>Schedule Appointment</TypeText>
            </TypeWrapper>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Specialty", { type: "consultation" })
            }
          >
            <TypeWrapper>
              <TypeImage source={doctorImage} />
              <TypeText>Video Consultation</TypeText>
            </TypeWrapper>
          </TouchableOpacity>
        </TypeFlex>
      </TopContainer>
      <BaseContainer>
        <BaseText>No upcoming appointment</BaseText>
      </BaseContainer>
    </HomeContainer>
  );
};

export default HomeContent;
