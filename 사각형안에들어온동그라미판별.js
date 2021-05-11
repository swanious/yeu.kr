function solution(circles, lines) {

  // circles 는 배열이며 동그라미정보들이 담겨있습니다.
  // console.log(circles[0].x); // 첫번째 동그라미의 중심점의 x좌표
  // console.log(circles[0].y); // 첫번째 동그라미의 중심점의 y좌표
  // console.log(circles[0].radius); // 첫번째 동그라미의 반지름
  // circles[0].color = 0xff0000; // 첫번째 동그라미의 색을 빨강색으로 바꿉니다

  // lines는 배열이며 사각형을 이루는 네 선의 정보입니다.
  // console.log(lines[0]); // 첫번째 선
  // console.log(lines[1]); // 두번째 선
  // console.log(lines[2]); // 세번째 선
  // console.log(lines[3]); // 네번째 선
  // console.log(lines[0][0]); // 첫번째 선의 시작점X
  // console.log(lines[0][1]); // 첫번째 선의 시작점Y
  // console.log(lines[0][2]); // 첫번째 선의 끝점X
  // console.log(lines[0][3]); // 첫번째 선의 끝점Y

  /*
    동그라미들 중 사각형 안에 포함되는 것의 색을 0x0000ff(파랑)으로 바꿔주세요
    동그라미들 중 사각형 안에 포함되지 않는 것의 색을 0xff0000(빨강)으로 바꿔주세요
    동그라미들 중 사각형에 걸쳐있는 것(사각형을 구성하는 선과 원이 교차되어있는 것)의 색을 0xff0000(빨강)으로 바꿔주세요
  */

  let x1 = lines[0][0];
  let x2 = lines[0][2];
  let y1 = lines[1][1];
  let y2 = lines[1][3];

  circles.map((v) => {
    let plusRangeX = v.x + v.radius;
    let minusRangeX = v.x - v.radius;
    let plusRangeY = v.y + v.radius; 
    let minusRangeY = v.y - v.radius;


    if (x1 >= minusRangeX && x1 <= plusRangeX || x2 >= minusRangeX && x2 <= plusRangeX ||
          y1 >= minusRangeY && y1 <= plusRangeY || y2 >= minusRangeY && y2 <= plusRangeY) {
        v.color = 0xff0000;
    }

    else if (x1< minusRangeX && plusRangeX < x2 && y1 < minusRangeY && plusRangeY < y2) {
        console.log(x1, x2, v.x);
        console.log(y1, y2, v.y);
        v.color = 0x0000ff;
    } else {
        v.color = 0xff0000;

    }
  })

}