import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper"; // 폰의 슬라이더 작업을 커스텀해준다
import Layout from "../constants/Layouts";
import MovieSlide from "./MovieSlide";

//Viewdhk Swiper는 각각 다른 height를 가질 수 있음
const SWIPER_HEIGHT = Layout.height / 4;

const View = styled.View`
  height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text``;

//filter함수 : movie api의 backdrop_path 가 null이 아닌 것을 찾아준다
//movies가 있으면 해당 Swiper을 리턴하고 존재하지 않으면 null을 리턴한다
//삼항연산자를 쓰는 이유 : &&을 사용하여 false의 경우 비어있는 string값을 반환. RN에서 string은 text에서만 쓸 수 있으므로 오류가 발생
const MovieSlider = ({ movies }) =>
  movies ? (
    <Swiper
      showsPagination={false}
      autoplay={true}
      style={{ height: SWIPER_HEIGHT }}
      autoplayTimeout={3}
    >
      {movies
        .filter(movie => movie.backdrop_path !== null)
        .map(movie => (
          <View key={movie.id}>
            <MovieSlide
              overview={movie.overview}
              voteAvg={movie.vote_average}
              title={movie.title}
              id={movie.id}
              backgroundPhoto={movie.backdrop_path}
              posterPhoto={movie.poster_path}
            />
          </View>
        ))}
    </Swiper>
  ) : null;

MovieSlider.propTypes = {
  movies: PropTypes.array
};

export default MovieSlider;
