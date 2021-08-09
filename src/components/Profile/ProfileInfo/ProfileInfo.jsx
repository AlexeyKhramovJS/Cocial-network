import React from 'react';
import mainImage from '../../../assets/img/preview.jpg';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        // return <Preloader/>
        return <div>
        <div className={style.logo}>
            <img src={mainImage}/>
        </div>

        <div className={style.descriptionBlock}>
            Это я
        </div>
    </div>
    }
    
    return (
        <div>
            <div className={style.logo}>
                <img src='https://picsum.photos/1600/400'/>
            </div>

            <div className={style.descriptionBlock}>
                <div className={style.preview}>
                    <div className={style.photo}>
                        <img src={props.profilePhoto} />
                    </div>
                    <div >
                        <span className={style.name}>{props.profile.name}</span>
                        <span>
                            <span>{props.profile.address.city}, {props.profile.address.street}, {props.profile.address.suite}</span>
                        </span>
                    </div>
                </div>

                <div className={style.about}>
                    <span>About</span>
                    <div className={style.aboutList}>
                        <div className={style.aboutPoint}>
                            <div>
                                <span>Phone</span>
                                <span>Email</span>                                
                                <span>Company</span>
                                <span>Department</span>
                            </div>
                        </div>
                        <div className={style.aboutPoint}>
                            <div>
                                <span>{props.profile.phone}</span>
                                <span>{props.profile.email}</span>
                                <span>{props.profile.company.name}</span>
                                <span>{props.profile.company.bs}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;