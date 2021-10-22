import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const SignInBoxContainer = styled.View`
  height: 48px;
  align-items: center;
  justify-content: center;

  padding: 0 20px ${getBottomSpace()+32}px;
`