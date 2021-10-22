import { COLORS } from "../../theme";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;

  background-color: ${COLORS.BLACK_SECONDARY};
  
  border-width: 4px;
  border-color: ${COLORS.BLACK_SECONDARY};
`

export const GradientContainer = styled(LinearGradient).attrs({
  colors: [
    COLORS.PINK,
    COLORS.YELLOW
  ],
  start: { x: 0, y: 0.8 },
  end: { x: 0.9, y: 1 }
})`
  justify-content: center;
  align-items: center;
`