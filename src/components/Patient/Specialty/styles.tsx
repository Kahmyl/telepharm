import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "../../../shared/responsive";

const { width, height } = Dimensions.get("window");

export const SpecialtyContainer = styled.View`
  background: #2192ff;
  height: 100%;
  padding: ${verticalScale(20, height)}px ${horizontalScale(20, width)}px;
`;

export const SelectCard = styled.View`
  background: #ffffff;
  border-radius: 10px;
  padding: ${verticalScale(14, height)}px ${horizontalScale(30, width)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SpecialtySelectText = styled.Text`
  font-family: "Inter_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: ${horizontalScale(20, width)}px;
  line-height: ${verticalScale(24, height)}px;
  color: #000000;
`;
