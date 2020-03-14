import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movies, tv } from "../../api";

// class component는 static mathod를 가지고 있다
export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  //JSON.stringify(this.props)의 변수들을 state에 담기 위함
  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview
          }
        }
      }
    } = props;
    this.state = {
      isMovie,
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview,
      loading: true
    };
  }

  async componentDidMount() {
    // movie , tv api 참조

    const { isMovie, id } = this.state;
    let error, genres, overview, status, date, backgroundPhoto;
    try {
      if (isMovie) {
        ({
          // axios는 디폴트로 data key를 주어짐
          // data: {}안에 없어도 자동 적용 된다는 뜻임
          data: {
            genres,
            overview,
            status,
            release_date: date,
            backdrop_path: backgroundPhoto
          }
        } = await movies.getMovie(id));
      } else {
        ({
          //data:{} 없이 적용가능
          genres,
          overview,
          status,
          first_air_date: date,
          title: name,
          backdrop_path: backgroundPhoto
        } = await tv.getShow(id));
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loading: false,
        genres,
        backgroundPhoto,
        overview,
        status,
        date
      });
    }
  }

  render() {
    const {
      isMovie,
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview,
      loading,
      date,
      status,
      genres
    } = this.state;
    return (
      <DetailPresenter
        id={id}
        posterPhoto={posterPhoto}
        backgroundPhoto={backgroundPhoto}
        title={title}
        voteAvg={voteAvg}
        overview={overview}
        loading={loading}
        date={date}
        status={status}
        isMovie={isMovie}
        genres={genres}
      />
    );
  }
}
