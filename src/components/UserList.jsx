import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';


export const UserList = () => {
    //logica
    const [url, setUrl] = useState("http://localhost:8000/users");
    //uso de custom hook
    const { data:users, loading, error } = useFetch(url);
    

    return (
        <section>
            <div className='filter'>
                <button onClick={() => setUrl("http://localhost:8000/users")}>View all</button>
                <button onClick={() => setUrl("http://localhost:8000/users?in_company=true")}>View in company only</button>
            </div>
            { loading && <p>Loading users...</p> }

            { error && <p>{ error }</p>}

            {
                users && users.map(user => (
                    <div className='card' key={user.id}>
                        <p className='id'>{ user.id }</p>
                        <p className='name'>{ user.name }</p>
                        <p className='info'>
                            <span className={user.in_company ? 'instock' : 'unavailable'}>{user.in_company ? "In company!" : "External" }</span>
                        </p>
                    </div> 
                ))
            }
        </section>
    )
}


