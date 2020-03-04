import React from "react";
import { ActivityIndicator } from "react-native"; // 사용자 정의 옵션
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components"; // css 스타일을 간직한 컴포넌트를 만들 수 있음

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
  justify-content: center;
`;

export default () => (
  <Container>
    <ActivityIndicator color={TINT_COLOR} />
  </Container>
);
