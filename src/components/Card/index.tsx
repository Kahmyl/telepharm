import { TouchableOpacity, View } from "react-native";
import { CardContainer, CardImage, CardText, CardTitle } from "./styles";

type cardTypes = {
  data: any;
  navigation?: any;
  route?: any;
};

const Card = ({ data, navigation, route }: cardTypes) => {
  const { type } = route.params;
  const imageUri =
    "https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png";
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AddRecord", { type, specialist: data.id })
      }
    >
      <CardContainer>
        <CardImage
          source={{
            uri: data.profile_pic ? data.profile_pic : imageUri,
          }}
        />
        <View>
          <CardTitle>{data.name}</CardTitle>
          <CardText>{data.specialty}</CardText>
        </View>
      </CardContainer>
    </TouchableOpacity>
  );
};

export default Card;
