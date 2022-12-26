## 🧨 개요 및 주제
Devfolio 기관에서 주최 ㅡ [velog](https://velog.io/) 사이트 벤치마킹하기

## 👨‍🌾 참여 인원
프론트엔드(React) 3명

## 👘 배운 점
- React에서의 CRUD 연습
- 제공된 Swagger UI를 활용한 서버와의 API 통신




<br/>

<img src="https://user-images.githubusercontent.com/66353903/142976104-d163bec4-f0a3-468b-adfa-0f21572a8d1f.png" width="600" />



## ⛳ 본인이 구현한 내용

### API 통신
- GET /posts로 전체 글 렌더링
- PATCH /posts/{id}로 수정한 글 서버에 보내기

### 카드 리스트 뷰 구현
- flew-wrap: wrap 등의 CSS를 통해 카드 뷰 구현
- 화면의 크기에 따라 반응하는 반응형 뷰 구현

### 무한 스크롤
- 처음에 카드 10개를 보여주고 스크롤을 내리면 자동으로 추가 렌더링

### UX 개선
- 카드 리스트 최상단으로 가기 위한 Top 버튼
- 로딩 시간을 위한 스켈레톤 UI
- 글 작성 페이지에서 이미지 업로드 시 대기 시간을 위한 로딩 스피너

## 🧶 기술 스택
- 프레임워크: React
- 전역 상태 관리: Redux
- CSS 방식: styled-components


## 💻 실행 방법

클론 후 `npm install` => `npm start`
