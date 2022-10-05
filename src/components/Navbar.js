import { NavLink } from "react-router-dom";
import { useAuth } from './authentication/auth';

function Navbar(){
    const navLinkStyles = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold':'normal',
            textDecoration: isActive ? 'none' : 'underline',
        };
    };
    const auth = useAuth();
    return(
        <nav>
            <NavLink style={navLinkStyles} to="/">Home</NavLink>
            <NavLink style={navLinkStyles} to="/about">About</NavLink>
            <NavLink style={navLinkStyles} to="/products">Products</NavLink>
            <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
            { // 유저 정보가 존재하지 않으면(로그인 하지 않으면 = 세션이 없으면) login 버튼 출력
              // 만약, 로그인 하였다면(유저 정보 존재, 세션 있음) null 반환으로 버튼 삭제
                !auth.user && (
                    <NavLink style={navLinkStyles} to="/login">
                        Login
                    </NavLink>
                )
            }
        </nav>
    );
}

export default Navbar;

/*
1. Link
다른 URL로 이동하는 a태그와 비슷한 기능을 원한다면 Link 컴포넌트를 사용해야한다.
Link 컴포넌트의 to prop는 a태그의 href 속성과 같다.
Link 컴포넌트는 CSR 측면에서 우수하지만, 어플리케이션 외부로 이동하고자 할 때는 기존 html의 anchor 태그를 이용하자.
<Link to ="{원하는 URL}"/>

2. Active Link
<NavLink>라는 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우,
특정 스타일 혹은 CSS 클래스를 적용시켜주는 컴포넌트 (링크와 라우트의 경로가 일치하면 해당 태그에 class가 active로 토글된다.)
css에서 nav a.active{text-decoration: none; font-weight: bold;} 식으로 응용 가능
*/