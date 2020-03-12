import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "../../api";

export default class extends React.Component {
  state = {
    loading: false,
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null
  };

  // 입력된 검색어를 업데이트하는 역할을 담당하는 함수
  handleSearchUpdate = text => {
    this.setState({
      searchTerm: text
    });
  };

  // 버튼 눌럿을시 반응되는 함수
  onSubmitEditing = async () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      let loading, movieResults, tvResults, error;
      this.setState({
        loading: true
      });
      try {
        ({
          data: { results: movieResults }
        } = await movies.searchMovies(searchTerm));
        ({
          data: { results: tvResults }
        } = await tv.searchTv(searchTerm));
      } catch {
        error = "Can't Search";
      } finally {
        this,
          this.setState({
            loading: false,
            movieResults,
            tvResults
          });
      }
      return;
    }
  };

  render() {
    const { loading, movieResults, tvResults, searchTerm } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        handleSearchUpdate={this.handleSearchUpdate}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}
