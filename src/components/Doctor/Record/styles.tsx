import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "../../../shared/responsive";

const { width, height } = Dimensions.get("window");

export const RecordContainer = styled.View`
  background: #2192ff;
  height: 100%;
  padding: ${verticalScale(20, height)}px ${horizontalScale(20, width)}px;
  padding-bottom: 0;
`;

export const RecordCard = styled.View`
  background: #ffffff;
  border-radius: 10px;
  padding: ${verticalScale(10, height)}px ${horizontalScale(10, width)}px;
  margin-bottom: ${verticalScale(20, height)}px;
`;

export const RecordCardTitle = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${horizontalScale(18, width)}px;
  line-height: ${verticalScale(22, height)}px;
  color: #000000;
  padding-bottom: ${verticalScale(10, height)}px;
`;

export const RecordCardText = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${horizontalScale(18, width)}px;
  line-height: ${verticalScale(22, height)}px;
  color: #000000;
  padding-top: ${verticalScale(10, height)}px;
  padding-bottom: ${verticalScale(18, height)}px;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonView = styled.View`
  padding: ${verticalScale(14, height)}px 10px;
  background: rgba(253, 255, 0, 0.85);
  border-radius: 10px;
  margin: ${verticalScale(40, height)}px 0px;
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
