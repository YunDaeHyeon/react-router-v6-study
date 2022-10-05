import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return(
        <>
        <div>Home Page</div>
        <button onClick={()=> navigate('order-summary')}>Place order</button>        
        </>
    );
}

export default Home;

/*
Navigating Programmatically
링크를 통해 이동하는 것이 아닌, 어떠한 이벤트나 절차가 끝났을 때 라우팅할 수 있도록 하는 것
react-router의 useNavigate Hook
navigate('{이동하고자 하는 URL')
뒤로가고 싶을 때는 navigate(-1)를 이용한다. (인자에 -1을 넣기)
만약, 현재 페이지에서 이동할 때 history에 기록을 남기고 싶지 않다면,
useNavigate(target, {replace : true})를 이용한다. (두 번째 인자에 객체 전달)
*/