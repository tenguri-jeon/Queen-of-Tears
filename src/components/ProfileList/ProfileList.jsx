import ProfileItem from "./ProfileItem";
import "./ProfileList.scss"

const ProfileList = ({data, clickInput , setData , dataList}) => {
    return (
        <>
            <ul>
                {
                    data.map(item => <ProfileItem key = {item.id} item = {item} clickInput={clickInput}/>)
                }
            </ul>
            <button onClick={()=>{
                setData(dataList)
            }}>원래상태</button>
        </>
    );
};

export default ProfileList;