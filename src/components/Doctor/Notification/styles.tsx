import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { horizontalScale, verticalScale } from "../../../shared/responsive";

const { width, height } = Dimensions.get("window");

export const NotificationContainer = styled.View`
  background: #2192ff;
  height: 100%;
  padding: ${verticalScale(20, height)}px ${horizontalScale(20, width)}px;
  padding-bottom: 0;
`;

export const Seperator = styled.View`
  margin-top: ${verticalScale(20, height)}px;
`;