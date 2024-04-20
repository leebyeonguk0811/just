sass 설치
npm i sass
npm i sass-loader

npm i sass sass-loader > 위 두개 한번에 설치

sass 예제
 #footer
     .left


scss 예제
#footer{
     .left{

     }
 }


 # 페이드 인 아웃 슬라이드 구현
 1. 스타일 애니메이션 설정 : MainComponent.scss 33~39 Line
    - 가상클래스 : &.next 

 2. 카운터 프로그램 제작
    - 리덕스 상태관리 사용 => 리듀서 생성 => cntSlice.js => index.js 에 등록
    - 카운터 구현   => 메인슬라이드 자식컴포넌트에서 구현
    - 슬라이드의 길이(갯수) 받아서 처리

 3. 슬라이트 컴포넌트를 부모와 자식 컴포넌트로 분리 작업
    - 부모컴포넌트
    - 자식컴포넌트

 4. 부모컴포넌트 => Section1Component.jsx > SlideComponent.jsx
    - AXIOS 구현하여 모델 데이터 슬라이드 가져오기   
    - 슬라이드 상태관리 객체를 자식컴포넌트에게 프롭스로 전달한다.

 5. 자식컴포넌트   
    - 프롭스로 받은 슬라이드를 Map() 함수로 슬라이드를 구성한다.
    - 슬라이드1 , 슬라이드2 , 슬라이드3 ... 요소를 useRef() 사용 등록한다.
        * useRef() 다중 배열처리 => React.useRef()
        * ref={(e)=> (slideRef.current[idx]=e)
        * 선택자 확인하기
            console.log(slideRef);
            console.log(slideRef.current[0]);
            console.log(slideRef.current[1]);
            console.log(slideRef.current[2]);
    - 자동 타이머 4초 간격 실행 => dispatch(setCnt()) => 1씩 증가
    - cnt 증가하면 동작되는 useEffect() 를 이용 슬라이드 알고리즘 구현       
        * 카운터 프로그램으로 부터 cnt 변수를 받아서 슬라이드 페이드 인 아웃 알고리즘을 제작하여 순차적으로 구현한다.
        * 리덕스 카운터리듀서 setCnt() 가져오기
