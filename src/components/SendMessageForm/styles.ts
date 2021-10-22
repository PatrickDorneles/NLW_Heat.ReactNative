import { COLORS } from "../../theme";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const SendMessageFormContainer = styled.KeyboardAvoidingView.attrs({
  behavior: "position",
  contentContainerStyle: {
    width: '100%',
    height: 184,
    backgroundColor: COLORS.BLACK_TERTIARY,
    paddingBottom: getBottomSpace() + 16,
    paddingTop: 16,
    paddingHorizontal: 24
  }
})`
  
`
export const SendMessageTextInput = styled.TextInput`
  width: 100%;
  height: 88px;

  text-align-vertical: top;
  color: ${COLORS.WHITE};

`



