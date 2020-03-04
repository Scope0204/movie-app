//컨테이너 : 모든 데이터를 가져오게하는 컴포넌트
//여기서 API와 state를 설정해줌
import React from "react";
import MoviesPresenter from "./MoviesPresenter"; // 프레젠터에서 보일 화면을 가져온다
import { movies } from "../../api";

export default class MoviesContainer extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null,
    error: null
  };

  async componentDidMount() {
    //컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행
    let upcoming, popular, nowPlaying, error;
    try {
      // data안의 results를 let 변수에 넣음 (4.3)
      // 한번만 state를 업데이트할 수 있음
      ({
        data: { results: upcoming }
      } = await movies.getUpcoming());
      ({
        data: { results: popular }
      } = await movies.getPopular());
      ({
        data: { results: nowPlaying }
      } = await movies.getNowPlaying());

      console.log(upcoming, popular, nowPlaying);
      this.setState({
        // 같은 변수명을 줘 upcoming : upcoming 할 필요가 없음
        upcoming,
        popular,
        nowPlaying
      });
    } catch {
      error = "Can't get Movies";
    } finally {
      // 무조건 실행됨
      this.setState({ loading: false, error, upcoming, popular, nowPlaying });
    }
  }
  render() {
    const { loading, upcoming, popular, nowPlaying } = this.state;
    console.log(this.state);
    return (
      <MoviesPresenter
        loading={loading}
        upcoming={upcoming}
        popular={popular}
        nowPlaying={nowPlaying}
      />
    );
  }
}
