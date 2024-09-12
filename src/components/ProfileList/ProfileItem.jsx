import React from 'react';

const ProfileItem = ({ clickInput, item }) => {
    const { id, imgurl, name, isShow, age } = item;

    return (
        <li className={isShow ? 'on' : ''}>
            <div>
                <div className="check"></div>
                <img src={imgurl} alt={name} />
                <div>
                    <strong>이름 : {name}</strong>
                    <span>나이 : {age}세</span>
                </div>
            </div>
            <input 
                type="radio" 
                name="check" 
                checked = {isShow}
                onChange={(e)=>clickInput(e , id)}
            />
        </li>
    );
};

export default ProfileItem;
