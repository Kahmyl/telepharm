import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "../../shared/responsive";
const { width, height } = Dimensions.get("window");

export const CardContainer = styled.View`
  background: #ffffff;
  border-radius: 20px;
  padding: ${verticalScale(14, height)}px ${horizontalScale(30, width)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardImage = styled.Image`
  width: ${horizontalScale(120, width)}px;
  height: ${verticalScale(120, height)}px;
  border-radius: 60px;
  margin-right: ${verticalScale(14, height)}px;
`;

export const CardTitle = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 600;
  font-size: ${horizontalScale(20, width)}px;
  line-height: ${verticalScale(24, height)}px;
  text-align: center;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: ${verticalScale(23, height)}px;
`;

export const CardText = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${horizontalScale(16, width)}px;
  line-height: ${verticalScale(19, height)}px;
  text-align: center;
  color: #000000;
  text-transform: uppercase;
`;

export const NotificationCardContainer = styled.View`
  background: #ffffff;
  border-radius: 10px;
  padding: ${verticalScale(10, height)}px ${horizontalScale(10, width)}px;
`;

export const NotificationCardTitle = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${horizontalScale(18, width)}px;
  line-height: ${verticalScale(22, height)}px;
  color: #000000;
  margin-bottom: ${verticalScale(40, height)}px;
`;

export const NoticationCardFooter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NoficationFooterText = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${horizontalScale(18, width)}px;
  line-height: ${verticalScale(22, height)}px;
  color: #2192ff;
`;
