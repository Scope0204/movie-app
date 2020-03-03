//스택 네비게이션
//createStackNavigator 참조
//각 스크린을 위한 타이틀 바를 생성할것임
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation"; //네비게이션
import DetailScreen from "../screens/Detail"; //스크린
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    //   Tabs: { screen: TabNavigation, navigationOptions: { title: "Supp" } }, 이런식으로 제목을 줄 수 있으나 스택 네비게이션은 디폴트로 헤더타이틀을 제공
    Tabs: { screen: TabNavigation, navigationOptions: { header: null } }, //null을 주면 디폴트 헤더타이틀을 제공하지않음
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles
      }
    }
  },
  {
    // 두번째 인자로 스탭 네비게이션 옵션을  지정할 수 있음
    headerMode: "screen",
    headerBackTitleVisible: false // back을 없앰
  }
);

export default createAppContainer(MainNavigation);
