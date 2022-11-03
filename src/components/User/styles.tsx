import styled, { css } from "styled-components/native";
import { Dimensions, View } from "react-native";
import { verticalScale } from "../../shared/responsive";

const { width, height } = Dimensions.get("window");

type authStyleType = {
  active?: boolean;
};

export const LoginContainer = styled.View`
  background: #2192ff;
  height: 100%;
  padding: 20px;
`;

export const Logo = styled.View`
  margin: 0px auto;
  margin-top: ${verticalScale(100, height)}px;
  margin-bottom: ${verticalScale(80, height)}px;
`;

export const LogoText = styled.Text`
  font-family: "Pacifico_400Regular";
  font-size: ${verticalScale(30, height)}px;
  line-height: ${verticalScale(58, height)}px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
`;

export const ForgotPassword = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${verticalScale(16, height)}px;;
  line-height: ${verticalScale(19, height)}px;
  color: #ffffff;
`;

export const TabContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: ${verticalScale(40, height)}px;
`;

export const TabPartition = styled.View`
  height: ${verticalScale(22, height)}px;
  width: 1px;
  background: #ffffff;
`;

export const TabText = styled.Text`
  ${({ active }: authStyleType) =>
    active
      ? css`
          font-family: "Inter_500Medium";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: ${verticalScale(22, height)}px;
          color: #ffffff;
        `
      : css`
          font-family: "Inter_500Medium";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: ${verticalScale(22, height)}px;
          color: rgba(255, 255, 255, 0.5);
        `}
`;

export const CheckContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${verticalScale(40, height)}px 0px ${verticalScale(60, height)}px 0px;
`;

export const LoginFooter = styled.View`
  background: #ffffff;
  border: 1px solid #cc5500;
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewUser = styled.Text`
  font-family: "Outfit_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #324a64;
`;

export const CreateAccount = styled.View``;

export const CreateAccountText = styled.Text`
  font-family: "Outfit_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #cc5500;
`;
