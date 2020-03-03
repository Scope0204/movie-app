import { createStackNavigator } from "react-navigation";
import { BG_COLOR } from "../constants/Colors";
import { TINT_COLOR } from "../constants/Colors";

export const headerStyles = {
  // 네비게이션 헤더에 제공해주는 기본 옵션
  headerStyle: {
    backgroundColor: BG_COLOR,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: TINT_COLOR
  },
  headerTintColor: TINT_COLOR
};

export const createStack = (screen, title) =>
  createStackNavigator({
    //스택 네비게이션 생성시 반복되는 작업들을 정의
    Screen: {
      screen, // 호출 스크린
      navigationOptions: {
        // 해당 타이틀
        title,
        ...headerStyles
      }
    }
  });
