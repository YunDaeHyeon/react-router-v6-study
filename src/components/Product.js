import { Link, Outlet } from 'react-router-dom';

function Product(){
    return(
        <>
            <div>
                <h1>중첩 라우팅</h1>
                <input type="search" placeholder="Search Products"/>
            </div>
            <nav>
                <Link to="featured">Featured</Link>
                <Link to="content">content</Link>
            </nav>
            <Outlet/>
        </>

    );
}

export default Product;

/*
Nested Routes (중첩 라우팅)
라우팅 안에 라우트를 집어넣는 방식으로, Link 컴포넌트의 to prop에 /를 붙이지 않는다.

중첩 라우팅의 라우팅 설정까지 완료하면, 라우팅된 컴포넌트를 어디에 렌더링해서 보여줘야하는지 정해줘야한다.
react-router-dom에서 제공하는 Outlet 컴포넌트를 활용하면 된다. (상위 컴포넌트 레이아웃화)
*/