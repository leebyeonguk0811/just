import React from "react";
import NoticeComponent from "./section2/NoticeComponent";
import GalleryComponent from "./section2/GalleryComponent";
import axios from "axios";

export default function Section2Component (){

    const [tab , setTab] = React.useState(false);
     
    const onclickNotice=(e)=>{
        e.preventDefault();
        setTab(false);
       
    }

    const onclickGallery=(e)=>{
        e.preventDefault();
        setTab(true);
       
    }

    // axios 구현 => 공지사항 가져오기(notice.json)
    // 1. 공지사항 JSON 파일 가져오기
    // 2. 상태관리 state 안에 공지사항[]에 저장하기.
    // 3. 자식컴포넌트에 프롭스로 내려보낸다.
    // 4. 자식 컴포넌트에서 MAP 함수로 마운트하고 바인드 한다.
    const [state , setState] = React.useState({
        공지사항 : [],
        갤러리 : [],
        title : '섹션2 타이틀'
    }); 
    React.useEffect(()=>{
        axios({ url:'./data/notice.json', method:'GET'})
        .then((res)=>{
            // 객체(object) 키(key) 속성 확인 후 상태변수 저장
            const isNotice = Object.keys(res.data).includes('공지사항');   // 해당 데이터에 json key 값이 확인하는 방법
            const isGallery = Object.keys(res.data).includes('갤러리');
            
            if(isNotice === true && isGallery === true){
                setState({
                    ...state,
                    공지사항 : res.data.공지사항,
                    갤러리 : res.data.갤러리
                })
            }

        })
        .catch((err)=>{
            console.log(err);
        }); // then은 성공시 then 괄호 안 실행 , catch 는 오류시 catch() 괄호 안 실행.

    },[]); // 빈배열을 넣는 이유 >>> 1회 실행하고 끝

    return(
        <section id="section2">
            <div className="left">
                <div className="container">
                    <div className="title">
                        <button className={`notice-btn${tab ? " on":""}`} onClick={onclickNotice} title="공지사항">공지사항</button>    
                        <button className={`gallery-btn${tab ? " on":""}`} onClick={onclickGallery} title="갤러리">갤러리</button>    
                    </div>
                    <div className="content">
                        <div className={`notice-box${tab ? " on":""}`}>
                            {/*  */}
                            <NoticeComponent 공지사항={state.공지사항}/>
                        </div>
                        <div className={`gallery-box${tab ? " on":""}`}>
                            <GalleryComponent 갤러리={state.갤러리}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="container">
                    <div className="title hide"><h2>이벤트 배너</h2></div>
                    <div className="content">
                        <a href="!#" title="여름 마지막 세일"><h3>여름 마지막 세일</h3></a>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="container">
                    <div className="title hide"><h2>바로가기 배너</h2></div>
                    <div className="content">
                    <ul>
                            <li><a href="!#" title="할인정보"><span>할인정보</span></a></li>
                            <li><a href="!#" title="이벤트정보"><span>이벤트정보</span></a></li>
                            <li><a href="!#" title="고객정보"><span>고객정보</span></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );  
};