import { useState } from 'react';
import './Test1.scss';

const Test1 = () => {
    const [cnt , setCnt] = useState(1)
    return (
        <>
            <div className='container'>
                <h2>tab content</h2>
                <div className='tabs'>
                    <button 
                        onClick={()=>setCnt(1)}
                        className={cnt === 1 ? `btn-tab on` : `btn-tab`}>Tab 1</button>
                    <button
                        onClick={()=>setCnt(2)}
                        className={cnt ===2 ? `btn-tab on` : `btn-tab`}
                    >Tab 2</button>
                    <button
                        onClick={()=>setCnt(3)}
                        className={cnt ===3 ? `btn-tab on` : `btn-tab`}
                    >Tab 3</button>
                </div>

                <div className='content-tabs'>
                    <div className={cnt === 1 ? `on` : ``}>
                        <h3>Content 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil vel
                            voluptatum?
                        </p>
                    </div>

                    <div className={cnt === 2 ? `on` : ``}>
                        <h3>Content 2</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            voluptatum qui adipisci.
                        </p>
                    </div>

                    <div className={cnt === 3 ? `on` : ``}>
                        <h3>Content 3</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum laboriosam
                            architecto optio rem, dignissimos voluptatum beatae aperiam voluptatem
                            atque. Beatae rerum dolores sunt.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Test1;
