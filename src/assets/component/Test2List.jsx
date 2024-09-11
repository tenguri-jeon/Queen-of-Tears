import Test2Item from './Test2Item';

const Test2List = ({data ,onShow}) => {
    return (
        <ul>
            {
                data.map(item => <Test2Item key={item.id} item={item} onShow={onShow}/>)
            }
        </ul>
    );
};

export default Test2List;
