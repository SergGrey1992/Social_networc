import React from 'react';
import style from './DescriptionBlock.module.css';


const DescriptionBlock = () => {
    return <div className={style.wrapperDescription} >
        <h1 className={style.styleH1} >----Profile----</h1>
        <div>
            <img className={style.avatar} alt="ava"
                 src='https://pm1.narvii.com/7171/f6f1c4463bbd9959052b699672858647f17660d3r1-264-250v2_00.jpg'/>
        </div>
        <div className={style.description}>
            Description
        </div>
    </div>
}

export default DescriptionBlock