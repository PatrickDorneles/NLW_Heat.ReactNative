import { COLORS } from "../../theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from "styled-components/native";

export const HomeScreenContainer = styled.View`
  background-color: ${COLORS.BLACK_SECONDARY};

  height: 100%;

  padding-top: ${getStatusBarHeight() + 20}px;
`