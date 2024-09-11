const Test2Content = ({tab : {des}}) => {
    const {title , msg} = des
    return (
        <div className='con-box'>
            <article>
                <h3>{title}</h3>
                <p>{msg}</p>
            </article>
        </div>
    );
};

export default Test2Content;
