## 🧨 주제
Velog 벤치마킹 웹

## 🚝 배포링크
[DevFoliOh Velog!](https://determined-volhard-ea03ee.netlify.app)

## 👘 특징
- Velog 뷰를 기반으로 리액트 CRUD 연습
- [Swagger UI](https://limitless-sierra-67996.herokuapp.com/v1/docs/)로 API 통신 진행
- 프론트엔드 3명이 협업하여 7일 간 작업

## 🧶 기술 스택
- React
- Redux
- styled-components


<br/>

<img src="https://user-images.githubusercontent.com/66353903/142976104-d163bec4-f0a3-468b-adfa-0f21572a8d1f.png" width="600" />


<br/>

## ⛳ 본인이 구현한 내용

### API 통신
- GET /posts로 전체 글 렌더링
- PATCH /posts/{id}로 수정한 글 서버에 보내기

### 카드 리스트 뷰 구현
- flew-wrap: wrap 등의 CSS를 통해 카드 뷰 구현
- 화면의 크기에 따라 반응하는 반응형 뷰 구현

### 무한 스크롤
- 처음에 카드 10개를 보여주고 스크롤을 내리면 자동으로 추가 렌더링

### UX를 올리기 위한 노력
- 카드 리스트 최상단으로 가기 위한 Top 버튼
- 로딩 시간을 위한 스켈레톤 UI
- 글 작성 페이지에서 이미지 업로드 시 대기 시간을 위한 로딩 스피너

## 그 외 구현된 내용
- 마크다운 에디터 적용 (CKEditor5)
- 글 작성 시 작성 내용 미리 보기
- 글 임시저장 및 불러오기 (localStorage)
- 뒤로가기 클릭 시 확인 모달창 띄우기
- Redux로 클라이언트의 상태를 전역 상태 관리


## 💻 실행 방법

클론 후 `npm install` => `npm start`
