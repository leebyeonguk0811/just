import React from "react";
import './scss/PopupComponent.scss'

// 수정요청 , useDispatch
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { popupAction } from "../../store/popupSlice";

export default function PopupComponent (){

    const dispatch = useDispatch();
    const title = useSelector((state)=>state.popupSlice.title);

    // 팝업 닫기 클릭 이벤트
    const onclickPopupClose=(e)=>{
        e.preventDefault();
        const ojb = {
            show : false
        }
        dispatch(popupAction(ojb));   // 디스패치(팝업창 닫기(패일로드))
    }

    return(
        <div className="popup">
            <div className="container">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="content">
                    <ul>
                        <li>오랜만에 찾아온 세일 안내!</li>
                        <li>JUST 쇼핑몰이 제안하는 유니크한 시즌별 패션 트렌드를 즐겨보세요.</li>
                        <li>오랜만에 찾아온 휴면고객이라면, 지금 바로 로그인 하고 적립금 1,000원을 받으세요! </li>
                    </ul>
                </div>
                <div className="button-box">
                    <button onClick={onclickPopupClose} className="close-btn" title="닫기">닫기</button>
                </div>
            </div>
        </div>
    );  
};