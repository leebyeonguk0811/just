import React from "react";
import { useDispatch } from "react-redux";
import { popupAction } from "../../../../store/popupSlice";

export default function NoticeComponent ({공지사항}){

    const dispatch = useDispatch();

    // 팝업 열기 클릭 이벤트
    const onclickPopupOpen=(e, 공지)=>{
        e.preventDefault();
        const ojb = {
            show : true,
            title : 공지
        }
        dispatch(popupAction(ojb));   // 디스패치(팝업창 닫기(패일로드))
    } 

    // {공지사항} 이 프롭스로 전달을 받았을때만 실행
    // React.useEffect(()=>{
    //     console.log(공지사항);
    // },[공지사항]);  // 공지사항을 프롭스로 다 받고나서 useEffect 안을 실행한다.

    return(
        <ul>
            {
                공지사항.map((item , idx)=>{
                    return(
                        <li key={idx}>
                            <a href="!#" onClick={(e)=>onclickPopupOpen(e, item.공지)} className="popup-btn" title={item.공지}>{item.공지}</a>
                            <span>{item.날짜}</span>
                        </li>
                    )
                })
            }
        
        </ul>
    );  
};