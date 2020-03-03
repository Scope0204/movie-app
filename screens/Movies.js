import React from "react";
import { Text, TouchableOpacity } from "react-native"; // TouchableOpacity : 버튼메이커
export default ({ navigation }) => (
  //모든 스크린은 네비게이션 props를 가지고있음
  //탭네비든 메인네비든 어딧는지 신경안써도 됨. 자동으로 찾아감
  <>
    <Text>movies</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text>Go to Detail</Text>
    </TouchableOpacity>
  </>
);
