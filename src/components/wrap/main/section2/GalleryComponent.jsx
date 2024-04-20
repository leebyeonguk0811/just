import React from "react";

export default function GalleryComponent ({갤러리}){
    return(
        <ul>
            {
                갤러리.map((item , idx)=>{
                    return(
                        <li key={idx}>
                            <a href="!#" title={item.제목}>
                                <img src={item.url} alt={item.제목} />
                            </a>
                        </li>
                    )
                })
            }
        </ul>

    );  
};