const ProfileTxt = ({tab}) => {
    return (
        <div>
            <div className="name-container">
                <span>이름 : {tab.name}</span>
            </div>
            <div>
                <span>나이 : {tab.age}</span>
                <p>내용 : {tab.content}</p>
            </div>
        </div>
    );
};

export default ProfileTxt;