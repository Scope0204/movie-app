import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layouts";
import MoviePoster from "./MoviePoster";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";
import MovieRating from "./MovieRating";
import { Systrace } from "react-native";
const Container = styled.View`
  flex: 1;
  position: relative;
`;

//flex-direction: row 하는 이유는 폰은 위-아래로 정렬되기 때문
//화면 포스터
const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 30px;
`;

//RN은 이미지를 사용하려면 Image컨포넌트를 사용해야만 한다
//uri와 같은 네트워크 이미지를 사용하려면 width와 height를 반드시 지정해 줘야한다
//source={{uri : 경로}}  / 여기서는 함수로 만들어서 사용햇음
//배경 이미지
const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 4};
  opacity: 0.3;
  position: absolute;
`;

//기타 등등
//align-items의 default값 : stretch
//RN은 flex-direction이 항상 column
//이것으로 글자에 맞는 버튼이 된다
const Column = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 14px;
  font-weight: 600;
`;

const Overview = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
`;

//평점부분에 마진을 주기위함
const VoteContainer = styled.View`
  margin: 10px 0px;
`;

//버튼
const BtnContainer = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 5px;
  border-radius: 2.5px;
`;
//버튼 안 텍스트
const BtnText = styled.Text`
  color: white;
  font-size: 12px;
`;
//만약 버튼을 만들시 이들을 다 포함하는 버튼용 컴포넌트를 만드는것을 추천 (여기선 하나만 할꺼)

const MovieSlide = ({
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview
}) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
    <Content>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title>{title}</Title>
        {voteAvg ? (
          <VoteContainer>
            <MovieRating votes={voteAvg} inSlide={true} />
          </VoteContainer>
        ) : null}
        {overview ? (
          <Overview>
            {overview.length > 120
              ? `${overview.substring(0, 120)}...` // `` : 문자열로 표시해 줌
              : overview}
          </Overview>
        ) : null}
        <BtnContainer>
          <BtnText>More Details</BtnText>
        </BtnContainer>
      </Column>
    </Content>
  </Container>
);

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired, //평균 평점
  overView: PropTypes.string.isRequired
};

export default MovieSlide;
