import React from 'react';
import s from "./Content.module.css"

export function Content () {
    return(
        <div className={s.wrapperContent} >
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                ava+respons
            </div>
            <div> <textarea/> </div>
            <button>Add post</button>
        </div>
    )
}