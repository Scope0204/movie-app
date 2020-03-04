//프레젠터 : 데이터를 보여주는 것
import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const TVPresenter = ({ loading, popular, topRated, airingToday }) =>
  loading ? <Loader /> : <Text>TV</Text>;

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
