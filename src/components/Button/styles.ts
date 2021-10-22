import { AntDesign } from '@expo/vector-icons'
import { FONTS } from "../../theme";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const ButtonTouchable = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${Platform.OS === 'ios' ? 'border-radius: 8px' : ''}
`

export const ButtonTitle = styled.Text`
  font-size: 14px;
  font-family: ${FONTS.BOLD};
`

export const ButtonIcon = styled(AntDesign).attrs({
  size: 24
})`
  margin-right: 12px;
`