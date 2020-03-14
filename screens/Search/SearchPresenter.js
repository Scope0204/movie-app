import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, GREY_COLOR, TINT_COLOR } from "../../constants/Colors";
import Layouts from "../../constants/Layouts";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

//flex-direction은 column
const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;
const Input = styled.TextInput`
  background-color: rgba(255,255,255,1)
  width: ${Layouts.width / 1.6};
  border-radius: 20px;
  padding: 10px;
  text-align:center;
`;

// 맞지않는 크기가 나올수 있으므로 스크롤뷰로 만듬
const SearchResults = styled.ScrollView`
  margin-top: 20px;
`;

const NoResultContainer = styled.View`
  margin-vertical: 20px;
`;
const NoResult = styled.Text`
  color: white;
  font-weight: 600;
  padding-left: 20px;
  margin-bottom: 15px;
`;
const ErrMsg = styled.Text`
  text-align: center;
  color: white;
  line-height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const SearchPresenter = ({
  loading,
  movieResults,
  tvResults,
  searchTerm,
  handleSearchUpdate,
  onSubmitEditing, // 누를 떄 반응하는 함수
  error
}) => (
  <Container>
    <InputContainer>
      <Input
        onChangeText={handleSearchUpdate}
        value={searchTerm}
        returnKeyType={"search"}
        placeholder="Search movies and tv"
        placeholderTextColor={GREY_COLOR}
        onSubmitEditing={onSubmitEditing}
      />
    </InputContainer>
    <SearchResults>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults ? (
            movieResults.length > 0 ? (
              <Section title="Movie Results">
                {movieResults
                  .filter(movie => movie.poster_path !== null)
                  .map(movie => (
                    <MovieItem
                      key={movie.id}
                      id={movie.id}
                      posterPhoto={movie.poster_path}
                      title={movie.title}
                      overview={movie.overview}
                      voteAvg={movie.vote_average}
                    />
                  ))}
              </Section>
            ) : (
              <NoResultContainer>
                <NoResult>Movie Results</NoResult>
                <ErrMsg>No Movies</ErrMsg>
              </NoResultContainer>
            )
          ) : null}
          {tvResults ? (
            tvResults.length > 0 ? (
              <Section title="TV Results">
                {tvResults
                  .filter(tv => tv.poster_path !== null)
                  .map(tv => (
                    <MovieItem
                      isMovie={false}
                      key={tv.id}
                      id={tv.id}
                      posterPhoto={tv.poster_path}
                      title={tv.name}
                      voteAvg={tv.vote_average}
                    />
                  ))}
              </Section>
            ) : (
              <NoResultContainer>
                <NoResult>TV Results</NoResult>
                <ErrMsg>No TV</ErrMsg>
              </NoResultContainer>
            )
          ) : null}
        </>
      )}
    </SearchResults>
  </Container>
);

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  tvResults: PropTypes.array,
  movieResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSearchUpdate: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired
};

export default SearchPresenter;
