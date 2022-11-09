import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "../../../shared/responsive";
const { width, height } = Dimensions.get("window");

export const AppointmentContainer = styled.View`
  background: #2192ff;
  height: 100%;
  padding: ${verticalScale(20, height)}px ${horizontalScale(20, width)}px;
  padding-top: ${verticalScale(80, height)}px;
`;