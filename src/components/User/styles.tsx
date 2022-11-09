import styled, { css } from "styled-components/native";
import { Dimensions, View } from "react-native";
import { horizontalScale, verticalScale } from "../../shared/responsive";

const { width, height } = Dimensions.get("window");

type authStyleType = {
  active?: boolean;
};

export const LoginContainer = styled.View`
  background: #2192ff;
  height: 100%;
  padding: ${verticalScale(20, height)}px ${horizontalScale(20, width)}px;
`;

export const Logo = styled.View`
  margin: 0px auto;
  margin-top: ${verticalScale(100, height)}px;
  margin-bottom: ${verticalScale(80, height)}px;
`;

export const LogoText = styled.Text`
  font-family: "Pacifico_400Regular";
  font-size: ${horizontalScale(30, width)}px;
  line-height: ${verticalScale(58, height)}px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
`;

export const ForgotPassword = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${horizontalScale(16, width)}px;
  line-height: ${verticalScale(19, height)}px;
  color: #ffffff;
  margin-bottom: ${verticalScale(60, height)}px;
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
          font-size: ${horizontalScale(18, width)}px;
          line-height: ${verticalScale(22, height)}px;
          text-transform: uppercase;
          color: #ffffff;
        `
      : css`
          font-family: "Inter_500Medium";
          font-style: normal;
          font-weight: 700;
          font-size: ${horizontalScale(18, width)}px;
          line-height: ${verticalScale(22, height)}px;
          text-transform: uppercase;
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
