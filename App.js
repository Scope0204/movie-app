import React from "react";
import { AppLoading, Asset } from "expo";
import * as Font from "expo-font"; // font 는 더이상 expo 라이브러리가아님
import { Ionicons } from "@expo/vector-icons"; // 다양한 아이콘 즐비
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  //로딩 에러시 발생
  handleError = error => console.log(error);

  //로딩이 끝난 뒤 발생
  handleLoaded = () => this.setState({ loaded: true });

  // 어느것이 로드하는지 말해주는 함수(async 함수임) , 폰트와 아이콘을 preload시켜줌
  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font // Ionicons는 폰트랑 같이 옴. 폰트 로딩
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <View style={styles.container}>
          <Text>sdsd</Text>
        </View>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
