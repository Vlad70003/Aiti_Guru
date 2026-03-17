import { Typography } from "antd";
import styled from "styled-components";

const { Text: AntText } = Typography;

type TextProps = {
    size?: string;
    weight?: number;
    color?: string;
    align?: "left" | "center" | "right";
};

const StyledText = styled(AntText)<TextProps>`
  font-family: 'Inter', sans-serif;
  line-height: 110%;
  font-size: ${(p) => p.size || "14px"};
  font-weight: ${(p) => p.weight || 400};
  color: ${(p) => p.color || "#232323"};
  text-align: ${(p) => p.align || "left"};
  display: block;
`;

export default StyledText;