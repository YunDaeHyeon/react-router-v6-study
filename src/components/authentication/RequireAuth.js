import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

// 재사용 가능한 컴포넌트(RequireAuth)를 라우터에 래핑시켜 로그인 하지 않은 사용자가 접근을 막는다.
function RequireAuth({children}){
    const auth = useAuth();

    // useAuth 모듈을 호출시켜 사용자 State가 존재하지 않으면 /login으로 리다이렉트
    if(!auth.user){
        alert('로그인이 필요합니다!');
        return <Navigate to="/login"/>;
    }
    // 존재한다면 children 오브젝트를 props로 반환
    return children;
}

export default RequireAuth;