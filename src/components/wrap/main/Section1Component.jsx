import React from "react";
import axios from "axios";
import SlideComponent from "./section1/SlideComponent";

export default function Section1Component (){

    const [state , setState] = React.useState({
        슬라이드 : [],
        title : '섹션1 타이틀'
    }); 
    React.useEffect(()=>{
        axios({ url:'./data/slide.json', method:'GET'})
        .then((res)=>{
            // 객체(object) 키(key) 속성 확인 후 상태변수 저장
            const isSlide = Object.keys(res.data).includes('슬라이드');   // 해당 데이터에 json key 값이 확인하는 방법
            if(isSlide === true){
                setState({
                    ...state,
                    슬라이드 : res.data.슬라이드,
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        }); // then은 성공시 then 괄호 안 실행 , catch 는 오류시 catch() 괄호 안 실행.

    },[]); // 빈배열을 넣는 이유 >>> 1회 실행하고 끝


    return(
        <section id="section1">
            <SlideComponent 슬라이드={state.슬라이드}/>
        </section>
    );  
};