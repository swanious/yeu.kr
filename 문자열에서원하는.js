/**
 * 문자열에서 원하는 문자열의 시작위치를 찾아보자
solution 함수로 인자가 2개 주어지며 둘 다 문자열입니다

첫번째 인자가 Hello world 이며
두번째 인자가 llo 일 경우
첫번째 인자에서 두번째인자의 문자열이 등장하는 위치인 2를 리턴해주도록 해주세요

첫번째 인자가 Hello world 이며
두번째 인자가 muyaho 일 경우
첫번째 인자의 문자열에 두번째인자의 문자열이 등장하지 않습니다 이럴 경우에는 -1를 리턴해주세요

첫번째 인자가 Hello hell world 이며
두번째 인자가 ell 일 경우
첫번째 인자의 문자열에 두번째인자의 문자열이 두번 등장하는데 이때에는 첫번째 등장한 것의 위치인 1을 리턴해주세요
 */

function solution(str, find) {
   // RegExp, String, Array 관련 내장함수는 사용할 수 없습니다
  var result = -1;
  var lS = str.length;
  var lF = find.length;
  for (let i=0; i<lS-lF+1; i++) {
      var cnt = 0;
      for (let j=0; j<lF; j++) {
        if (str[i+j] === find[j]) {
            cnt++
        } else {
            break
        }
      }
      if (cnt === lF) {
        result = i;
        break
      }
  }
  return result;
}