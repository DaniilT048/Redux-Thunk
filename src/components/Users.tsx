import {ReactElement, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { usersLoadingSelector, usersSelector } from '../store/selectors.js'
import { useEffect } from 'react'
import { getUsersFromServer } from '../store/usersSlice.js'
import {LuAccessibility} from "react-icons/lu";
import {MdError} from "react-icons/md";
import Card from "./Card.tsx";
import {WiAlien} from "react-icons/wi";

const Users = (): ReactElement => {

    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const loading = useSelector(usersLoadingSelector);
    const [count, setCount] = useState(0);

    document.title = "Users Page";

    useEffect(() => {
        if (!users?.length) {
            // @ts-ignore
            dispatch(getUsersFromServer());
        }
    }, [dispatch, users]);

    const handleShowMoreUser = (): void => {
        setCount(prev => (prev >= 10 ? 2 : prev + 2));
    };

    return (
        <>
            {loading ? (
                <LuAccessibility style={{ fontSize: 56 }} />
            ) : users?.length ? (
                <>
                    <div className='usersCard'>
                        {users.slice(0, count).map(user => (
                            <Card key={user.id} moreInfo={{
                                city: user.address.city,
                                street: user.address.street,
                                email: user.email
                            }}>
                                <WiAlien style={{ fontSize: 80 }} />
                                <h3>{user.name}</h3>
                                <p>{user.phone}</p>
                            </Card>
                        ))}
                    </div>
                    {users.length > count && (
                        <button onClick={handleShowMoreUser}>Show +2 users</button>
                    )}
                </>
            ) : (
                <MdError style={{ fontSize: 56 }} />
            )}
        </>
    );
};

export default Users;