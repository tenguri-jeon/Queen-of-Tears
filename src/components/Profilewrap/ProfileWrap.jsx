import ProfileImg from "./ProfileImg";
import ProfileTxt from "./ProfileTxt";
import "./profilewrap.scss"

const ProfileWrap = ({setImg ,tab}) => {
    return (
        <div className="profilewrap">
            <ProfileImg setImg={setImg} tab={tab}/>
            <ProfileTxt setImg={setImg} tab={tab}/>
        </div>
    );
};

export default ProfileWrap;