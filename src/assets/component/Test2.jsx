import './Test2.scss';
import Test2List from './Test2List';
import Test2Content from './Test2Content';
import { useState } from 'react';
const dataList = [
    { id: 1 , title:'첫번째입니다' , 
        des:{
            title:'컨텐츠 제목1',
            msg:'탭1의 세부내용'
        },
        isShow : true,
    },
    { id: 2 , title:'두번째입니다' , 
        des:{
            title:'컨텐츠 제목2',
            msg:'탭2의 세부내용'
        },
        isShow : false,
    },
    { id: 3 , title:'세번째입니다' , 
        des:{
            title:'컨텐츠 제목3',
            msg:'탭3의 세부내용'
        },
        isShow : false,
    },
    { id: 4 , title:'네번째입니다' , 
        des:{
            title:'컨텐츠 제목4',
            msg:'탭4의 세부내용'
        },
        isShow : false,
    },
    
]

const Test2 = () => {
    const [data, setData] = useState(dataList)
    const [tab , setTab] = useState(dataList[0])

    const onShow = (id) => {
        // setTab(dataList[id-1])
        setTab(data.find((item) => item.id === id))
        setData(
            data.map(data => data.id === id ? {...data , isShow : true} : {...data , isShow : false})
        )
    }

    return (
        <div className='tabs'>
            <Test2List  data={data} onShow={onShow}/>
            <Test2Content tab={tab}/>
        </div>
    );
};

export default Test2;
