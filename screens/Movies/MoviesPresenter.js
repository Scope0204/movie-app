//프레젠터 : 데이터를 보여주는 것
import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";

// ScrollView ? 유저가 스크롤할 수 있는 뷰. 크기가 크다고해서 뷰가 자동적으로 스크롤을 만들어 주는게 아님
const Container = styled.ScrollView`
  background-color: black;
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <MovieSlider movies={nowPlaying} />
    </Container>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array
};

export default MoviesPresenter;
