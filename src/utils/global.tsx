import styled, { css } from "styled-components/native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Dimensions, View } from "react-native";
import { verticalScale } from "../shared/responsive";

export type globalType = {
  children?: any;
  isError?: boolean;
  pad?: string;
};

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  ${({ pad }: globalType) =>
    pad
      ? css`
          padding: ${pad};
        `
      : css`
          padding: 18px;
        `};
  background: #ffffff;
  height: 100%;
`;

export const HomeContainer = styled.View`
  background: #ffffff;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const StyledText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const StyledButton = styled.Button``;

export const StyledHeader = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #333;
  letter-spacing: 1px;
`;

export const Icon = styled(MaterialIcons)`
  position: absolute;
  left: 10px;
`;

export const IconMain = styled(Entypo)`
  color: blue;
`;

export const IconAuth = styled(MaterialIcons)`
  margin-horizontal: 3px;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardWrapper = ({ children }: globalType) => {
  return (
    <View
      style={{
        borderRadius: 6,
        elevation: 3,
        shadowColor: "#333",
        backgroundColor: "#fff",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
      }}
    >
      {children}
    </View>
  );
};

export const CardContent = styled.View`
  margin-horizontal: 10px;
  margin-vertical: 10px;
`;

export const Input = styled.TextInput`
  ${({ isError }: globalType) =>
    isError
      ? css`
          border: 2px solid crimson;
        `
      : css`
          border: none;
        `}

  padding: ${verticalScale(10, height)}px 16px;
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 400;
  font-size: ${verticalScale(18, height)}px;
  line-height: ${verticalScale(22, height)}px;
  color: #000000;
  margin: 0px 0px ${verticalScale(20, height)}px 0px;
  background: #ffffff;
  border-radius: 10px;
  max-height: ${verticalScale(50, height)}px;
`;

export const Label = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${verticalScale(18, height)}px;
  line-height: ${verticalScale(22, height)}px;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: ${verticalScale(3, height)}px;
`;

export const ErrorText = styled.Text`
  color: crimson;
  font-family: "Outfit_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${verticalScale(18, height)}px;
  line-height: ${verticalScale(22, height)}px;
  letter-spacing: -0.1px;
`;
export const UserText = styled.Text`
  font-size: 12px;
  color: grey;
`;
