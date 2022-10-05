import { useParams } from 'react-router-dom';

function UserDetails(){
    const params = useParams();
    const userId = params.userId;
    return(
        <div>
            Details about user {userId}
        </div>
    )
}

export default UserDetails;

/*
동적 라우팅 (Dynamic Routes)
유저 상세 정보 페이지

useParams이라는 훅은 동적 라우팅으로 넘어온 URI 변수를 가져온다. App.js 의 /user/:userId
*/