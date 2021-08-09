import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';

const Users = (props) => {
    return (
        <div className={style.userWrap}>
            <div>
                {
                    props.users.map(user => {
                        return (
                            <div className={style.user}>
                                <div className={style.userPhoto}>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}/>
                                    </NavLink>
                                </div>

                                <div className={style.userInfo}>
                                    <span className={style.userName}>{user.name}</span>
                                    <span className={style.userStatus}>{user.company.catchPhrase}</span>
                                </div>            
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users;