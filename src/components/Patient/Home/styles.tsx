import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "../../../shared/responsive";

const { width, height } = Dimensions.get("window");

export const HomeContainer = styled.View`
  height: 100%;
`;

export const Logo = styled.View`
  margin: 0px;
  margin-top: ${verticalScale(59, height)}px;
  margin-bottom: ${verticalScale(83, height)}px;
`;

export const LogoText = styled.Text`
  font-family: "Pacifico_400Regular";
  font-size: ${horizontalScale(30, width)}px;
  line-height: ${verticalScale(58, height)}px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const Subtitle = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 700;
  font-size: ${horizontalScale(24, width)}px;
  line-height: ${verticalScale(29, height)}px;
  text-align: center;
  color: #ffffff;
  text-align: center;
  margin-bottom: ${verticalScale(49, height)}px; ;
`;

export const TypeFlex = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TypeWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TypeImage = styled.Image`
  width: ${horizontalScale(120, width)}px;
  height: ${verticalScale(120, height)}px;
`;

export const TypeText = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 600;
  font-size: ${horizontalScale(14, width)}px;
  line-height: ${verticalScale(17, height)}px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  margin-top: ${verticalScale(7, height)}px;
  margin-bottom: ${verticalScale(39, height)}px;
`;

export const BaseContainer = styled.View`
  background: #ffffff;
  height: 50%;
`;

export const TopContainer = styled.View`
  background: #2192ff;
  height: 50%;
  padding: 0px 20px;
`;

export const BaseText = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  margin-top: ${verticalScale(140, height)}px;
`;
