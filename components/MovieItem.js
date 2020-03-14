// Section에 들어갈  포스터,평점, 설명 등등이 들어감
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { GREY_COLOR } from "../constants/Colors";

import { TouchableWithoutFeedback } from "react-native"; // 터치에 반응하지만 아무피드백 x (여러 touchable이 있음)
import { withNavigation } from "react-navigation"; // 어디에 있건 필요한 navigation prop을 줌

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: ${props => (!props.big ? "12px" : "14px")};
  margin-vertical: 5px;
`;

// 수평 스크롤 컨테이너
// RN은 기본적으로 flex-direction:column이 기본값으로 되어있다
const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

const Column = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 12px;
  margin-vertical: 10px;
`;

const MovieItem = ({
  id,
  posterPhoto,
  title,
  voteAvg,
  horizontal = false,
  overview,
  isMovie = true,
  navigation, //export default withNavigation(MovieItem) 에 의해 자동적으로 가지게 됨

  backgroundPhoto // movieSlide에 있는 param , DetailContainer는 MovieItem , MovieSlide 둘 다 접근가능하기 때문에 합친 params 를 전달해줘야한다.
}) => (
  <TouchableWithoutFeedback
    onPress={() =>
      navigation.navigate({
        routeName: "Detail",
        params: {
          isMovie,
          id,
          posterPhoto,
          title,
          voteAvg,
          overview,
          backgroundPhoto: null
        }
      })
    }
  >
    {horizontal ? (
      <HContainer>
        <MoviePoster path={posterPhoto} />
        <Column>
          <Title big={true}>{title}</Title>
          <MovieRating votes={voteAvg} />
          <Overview>
            {overview.length > 150
              ? `${overview.substring(0, 147)}...`
              : overview}
          </Overview>
        </Column>
      </HContainer>
    ) : (
      <Container>
        <MoviePoster path={posterPhoto} />
        <Title>
          {title.length > 15 ? `${title.substring(0, 12)}...` : title}
        </Title>
        <MovieRating votes={voteAvg} />
      </Container>
    )}
  </TouchableWithoutFeedback>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  horizontal: PropTypes.bool,
  overview: PropTypes.string.isRequired,
  isMovie: PropTypes.bool
};

export default withNavigation(MovieItem);
