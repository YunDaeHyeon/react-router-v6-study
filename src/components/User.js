import { Outlet, useSearchParams } from "react-router-dom";

function User(){
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return(
        <>
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <h2>User 4</h2>
        </div>
        <Outlet/>
        <div>
            <button onClick={()=> setSearchParams({filter: 'active'})}>
                Active User
            </button>
            <button onClick={()=> setSearchParams({})}>
                Reset Filter
            </button>
        </div>
        {
            showActiveUsers ? (
                <h2>Showing active users</h2>
            ) : (
                <h2>Showing all users</h2>
            )
        }
        </>
    )
}

export default User;

/*
동적 라우팅 (Dynamic Routes)
쿼리 스트링(Search Params) -> 리액트 라우터에서는 쿼리스트링을 search params라 부른다.
즉, id같은 정보를 params로 넘겨줄 수 있지만, params 이외의 정보를 넘기는 방법.
이를 도와주는 훅은 useSearchParams (useState와 유사)
*/