import { TouchableOpacity } from "react-native";
import { StackNavigationType } from "../../types";
import {
  NoficationFooterText,
  NoticationCardFooter,
  NotificationCardContainer,
  NotificationCardTitle,
} from "./styles";

type CardTypes = {
  data: any;
  navigation: any;
};

const NotificationCard = ({ data, navigation }: CardTypes) => {
  return (
    <NotificationCardContainer>
      <NotificationCardTitle>
        Bernard Michael wants to have a video consultation with you.
      </NotificationCardTitle>
      <NoticationCardFooter>
        <TouchableOpacity>
          <NoficationFooterText>Accept</NoficationFooterText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Records", { patient: data.id })}
        >
          <NoficationFooterText>View medical records</NoficationFooterText>
        </TouchableOpacity>
        <TouchableOpacity>
          <NoficationFooterText>Reject</NoficationFooterText>
        </TouchableOpacity>
      </NoticationCardFooter>
    </NotificationCardContainer>
  );
};

export default NotificationCard;
