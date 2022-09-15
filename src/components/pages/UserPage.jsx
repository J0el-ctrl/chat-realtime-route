import {useParams} from 'react-router-dom';
export const UserPage = () => {

    const {userId}=useParams()
    console.log({userId})
  return (
    <div>
        User 
        <h1>{userId}</h1>
    </div>
  )
}
