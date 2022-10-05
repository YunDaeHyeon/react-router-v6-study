# React Router v6 연습 저장소
기존의 웹은 MPA(Multi-Page-Application)으로 uri를 이용해 서버로 요청을 보내는 방식을 채택하였다.  
하지만, 리액트는 SPA를 사용하기에 컴포넌트에 따라 다른 URI을 사용해야한다.  
따라서 `React Router`를 사용해 이를 구현힌디.  

# setting
1. CRA 프로젝트 생성 -> npx create-react-app {project name}
2. `react-router` 패키지 설치 진행  
```console
npm install react-router-dom
// 혹은
yarn add react-router-dom@6
```
3. CRA 어플리케이션을 브라우저의 URL과 연결시키기 위해 `BrowserRouter`를 `index.js`에 추가
```javascript
import { BrowserRouter } from 'react-router-dom';
//... 이하 생략

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
```