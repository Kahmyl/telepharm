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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const DoctorFlex = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DoctorImage = styled.Image`
  width: ${horizontalScale(120, width)}px;
  height: ${verticalScale(120, height)}px;
  margin-right: ${verticalScale(14, height)}px;
`;

export const DoctorText = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 600;
  font-size: ${horizontalScale(24, width)}px;
  line-height: ${verticalScale(29, height)}px;
  text-align: center;
  color: #ffffff;
`;

export const DoctorTitle = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 700;
  font-size: ${horizontalScale(24, width)}px;
  line-height: ${verticalScale(29, height)}px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: ${verticalScale(20, height)}px;
`;

export const BaseContainer = styled.View`
  position: relative;
  background: #ffffff;
  height: 50%;
`;

export const Centered = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  height: 100%;
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
`;
