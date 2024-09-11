const ProfileModify = ({makeNewData  ,makeNuewDataBtn , user}) => {
    const {name , age , addr} = user
    return (
        <form className="input-wrap" onSubmit={(e)=>makeNuewDataBtn(e)}>
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" name="name" id="name" value={name} onChange={makeNewData}/>
            </div>
            <div>
                <label htmlFor="age">나이</label>
                <input type="text" name="age" id="age" value={age} onChange={makeNewData}/>
            </div>
            <div>
                <label htmlFor="addr">주소</label>
                <input type="text" name="addr" id="addr" value={addr} onChange={makeNewData}/>
            </div>
            <button type="submit">저장</button>
        </form>
    );
};

export default ProfileModify;