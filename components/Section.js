// 수평으로 스크롤할 컴포넌트
// 영화또는 TV 정보를 렌더링함
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const Container = styled.View`
  margin-vertical: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  padding-left: 20px;
  margin-bottom: 15px;
`;

const ScrollView = styled.ScrollView`
  margin-left: 20px;
`;

// MoviePresenter가 children을 렌더링 하게끔 책임을 줌
const Section = ({ title, children, horizontal = true }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal={horizontal}>{children}</ScrollView>
  </Container>
);

Section.proptypes = {
  //https://github.com/yannickcr/eslint-plugin-react/issues/7 : children props 체크
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  horizontal: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Section;
