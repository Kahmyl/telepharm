import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "../../../shared/responsive";

const { width, height } = Dimensions.get("window");

export const AddRecordContainer = styled.View`
  background: #2192ff;
  height: 100%;
  padding: ${verticalScale(20, height)}px ${horizontalScale(20, width)}px;
  padding-bottom: 0;
`;

export const PickerTitle = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${horizontalScale(18, width)}px;
  line-height: ${verticalScale(22, height)}px;
  color: #ffffff;
  margin-top: ${verticalScale(32, height)}px;
  margin-bottom: ${verticalScale(4, height)}px; ;
`;

export const QuestionWrapper = styled.View`
  margin-top: ${verticalScale(40, height)}px;
  padding-bottom: ${verticalScale(30, height)}px;
`;

export const QuestionText = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

export const QuestionCheckContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
