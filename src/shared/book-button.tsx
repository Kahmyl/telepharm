import styled from "styled-components/native";
import { ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import { verticalScale } from "./responsive";
const { width, height } = Dimensions.get("window");

export type buttonType = {
  text: string;
  onPress?: any;
  loading?: boolean;
};

const BookButton = ({ text, onPress, loading }: buttonType) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonView>
        {loading ? (
          <ActivityIndicator size={"small"} color={"#ffffff"} />
        ) : (
          <ButtonText>{text}</ButtonText>
        )}
      </ButtonView>
    </TouchableOpacity>
  );
};

export default BookButton;

export const ButtonView = styled.View`
  padding: ${verticalScale(14, height)}px 10px;
  background: rgba(253, 255, 0, 0.85);
  border-radius: 10px;
  margin: 30px 0px;
`;

export const ButtonText = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 700;
  font-size: ${verticalScale(20, height)}px;
  line-height: ${verticalScale(24.2, height)}px;
  color: #ffffff;
`;
