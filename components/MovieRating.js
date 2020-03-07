import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";

// 나중에 Rating 사용시 평점 글자색을 바꿀수 있도록 함
// 다 같은 MovieRating을 이용하더라도 이런식으로 props를 통해 옵션을 달리함
const Vote = styled.Text`
  color: ${props => (props.inSlide ? TINT_COLOR : GREY_COLOR)};
  font-size: ${props => (props.inSlide ? "10px" : "8px")};
  font-weight: 600;
`;

const MovieRating = ({ votes, inSlide }) => (
  <Vote inSlide={inSlide}>⭐️ {`${votes} / 10 `}</Vote>
);

MovieRating.PropTypes = {
  votes: PropTypes.number.isRequired,
  inSlide: PropTypes.bool
};

export default MovieRating;
