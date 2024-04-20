import React from "react";
import HeaderComponent from "./wrap/HeaderComponent";
import MainComponent from "./wrap/MainComponent";
import FooterComponent from "./wrap/FooterComponent";
import PopupComponent from "./wrap/PopupComponent";
import SignUpComponent from "./wrap/sub/SignUpComponent";
import { useSelector } from "react-redux";
import './scss/WrapComponent.scss'
import { HashRouter , Routes , Route } from "react-router-dom";

export default function WrapComponent (){

    //const state = useSelector((state)=>state);                        // store 의 모든걸 가져와서 성능 문제 발생??? console에도 경고메시지 나온다.
    //const show = useSelector((state)=>state.popupSlice.show);         // 스토어에서 리듀서 변수 가져오기
    //const title = useSelector((state)=>state.popupSlice.title);       // 불필요하게 2번 가져온다
    const popupSlice = useSelector((state)=>state.popupSlice);          // 통짜로 가져오는게 더 합리적

    return(
        <div id="wrap">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HeaderComponent />}>
                        <Route index element={<MainComponent/>}/>
                        <Route path="/index" element={<MainComponent/>}/>
                        <Route path="/signUp" element={<SignUpComponent/>}/>
                    </Route>
                </Routes>
                <FooterComponent />
                { popupSlice.show && <PopupComponent /> } 
            </HashRouter>  
        </div>
    );  
};