import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation"; // 3.x 버젼 네비
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import { createStack } from "./config"; // 스택 네비게이션 생성 및 옵션

// 첫번째 인자로 route 설정을 해서 넘겨준다
// 이를 위해 다른 컴포넌트들을 import해야 한다
// 두번째 인자는 설정값들을 가진 오브젝트를 넘겨준다
const TabNavigation = createBottomTabNavigator(
  {
    Movie: {
      screen: createStack(MoviesScreen, "Movies"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.os === "ios" ? "ios-film" : "md-film"}
          />
        )
      }
    },
    TV: {
      // TVScreen은 Screen의 스택 네비게이터
      screen: createStack(TVScreen, "TV"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.os === "ios" ? "ios-tv" : "md-tv"}
          />
        )
      }
    },
    Search: {
      screen: createStack(SearchScreen, "Search"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.os === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    }
    //Search: SearchScreen --> 이런식으로 해당 라우터의 라벨을 지정할수도 있다
  },
  {
    tabBarOptions: {
      showLabel: false, // 라벨대신 icon을 보여줌
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

//createAppContainer : react-navigation 에게 어플리케이션이 여기있다고 선언해주는 것임
export default createAppContainer(TabNavigation);
