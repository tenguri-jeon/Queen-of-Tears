const Test2Item = ({item , onShow}) => {
    const {title , id , isShow} = item 
    return <li className={isShow ? 'on' : ''}
        onClick={()=>onShow(id)}
    >{title}</li>;
};

export default Test2Item;
