import ProfileList from "./ProfileList/ProfileList";
import ProfileModify from "./ProfileModify";
import ProfileWrap from "./Profilewrap/ProfileWrap";
import dataList from "../assets/api/profiledata"
import { useRef, useState } from "react";

const Profile = () => {
    const no = useRef(dataList.length + 1)
    const [data , setData] = useState(dataList)
    const [tab , setTab] = useState(dataList[0])
    const [user , setUser] = useState({
        name : '',
        age : '' ,
        addr : '',
    })
    //비활성화 버튼 제어
    const [btnactivate , setActivate] = useState(true)
    //새로운 내용 추가하기
    const makeNewData = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value ,
        })
    }
    const makeNuewDataBtn = (e) => {
        e.preventDefault()
        setData([
            ...data , 
            {
                id : no.current ,
                name : user.name,
                age : user.age,
                imgurl : user.addr,
                isShow : false,
            }
        ])
        setUser({
            name: '',
            age: '',
            addr: '',
        });
    }
    //input 클릭 시 이미지 내용 나오도록 설정
    const clickInput = (e , id) => {
        const {checked} = e.target
        setData(data.map(item => item.id === id ? { ...item, isShow: checked } : { ...item, isShow: !checked }));
        setTab(data.find((item)=> item.id === id))
    };
    return (
        <div className="section">  
            <div className="left">
                <div className="header">
                    <h2>친구들 총 인원 : <span>5</span> </h2> 
                    <button>
                        <input type="checkbox"  
                        checked = {btnactivate}
                        onClick={(e)=>{const {checked} = e.target
                            setActivate(!btnactivate)
                        }}
                        />비활성
                    </button>
                </div>
                <ProfileList data={data} clickInput={clickInput} setData={setData} dataList={dataList}/>
                {
                    btnactivate ? <ProfileModify makeNewData={makeNewData} data={data} makeNuewDataBtn={makeNuewDataBtn} user={user}/> : ''
                }
            </div>
            <div className="right">
                <ProfileWrap tab={tab}/>
            </div>
        </div>
    );
};

export default Profile;