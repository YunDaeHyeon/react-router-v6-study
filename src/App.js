import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/authentication/auth';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Product from './components/Product';
import FeaturedProducts from './components/FeaturedProducts';
import ContentProducts from './components/ContentProducts';
import User from './components/User';
import UserDetails from './components/UserDetails';
import React from 'react';
import Admin from './components/Admin';
import Profile from './components/authentication/Profile';
import Login from './components/authentication/Login';
import RequireAuth from './components/authentication/RequireAuth';

function App() {
  return (
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="order-summary" element={<OrderSummary/>}/>
          <Route path="products" element={<RequireAuth><Product/></RequireAuth>}>
            {/*중첩 라우팅*/}
            {/* index 라우팅 -> 원하는 Route 컴포넌트에 index prop를 지정하면
            /products으로 접근했을 때 처음으로 보여지게되는 컴포넌트를 라우팅한다.*/}
            <Route index element={<FeaturedProducts/>}/>
            <Route path="featured" element={<FeaturedProducts/>}/>
            <Route path="content" element={<ContentProducts/>}/>
          </Route>
          <Route path="user" element={<User/>}>
          {/* /:userId -> userId라는 변수 값(문자열)을 URI으로 날리기 */}
          {/* 이때, userId가 Admin이어서 user/admin으로 접속한다면?
            이를 해결하기위해 <Route path="user/admin" element={<Admin/>}/> 처럼 라우트를 미리 설정해야한다.
            react-router-dom은 params보다 먼저 매칭되는 라우팅을 찾기 때문이다.
          */}
            <Route path=":userId" element={<UserDetails/>}/>
            <Route path="admin" element={<Admin/>}/>
          </Route>
          {/* path="*"는 어떠한 매치 결과가 없을 때 (page not found, 404) */}
          <Route path="login" element={<Login/>}/>
          <Route 
            path="profile" 
            element={
              <RequireAuth>
                <Profile/>
              </RequireAuth>
              }
            />
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </AuthProvider>
  );
}

export default App;

/*
Switch 컴포넌트에서 Routes 컴포넌트로 변경
Routes -> Route 순서
*/