import React from "react";
import { setCnt } from "../../../../store/cntSlice";
import { useSelector , useDispatch} from "react-redux";

export default function SlideComponent ({슬라이드}){

    const slideWrapRef = React.useRef();  // 슬라이드 선택자 slideWrapRef
    const cnt = useSelector((state)=>state.cntSlice.cnt);
    const dispatch = useDispatch();

    React.useEffect(()=>{       // 최초 로딩시 1회 아니면 특정조건이 달성되었을때 1번 동작
        const setId = setInterval(() => {
            dispatch(setCnt(슬라이드.length-1)); // cntSlice.js 의 setCnt() 호출 > 1씩 증가
        },2000)                 // 4초마다
        return ()=> clearInterval(setId);
    } , [슬라이드]);  

    // cnt 증가시 선택자를 이용 애니메이션 구현
    React.useEffect(()=>{

        const n = 슬라이드.length-3;
        if(cnt > n){    // 처음으로 돌아가야함
            slideWrapRef.current.style.transition = 'none';
            slideWrapRef.current.style.left = `${-100 * 0}%`;    
            // 비동기식 -> 스타일 적용 끝나고 그리고 다음
            setTimeout(() => {
                dispatch(setCnt(1)); // 리턴 다음 1 전달 그리고 다음 두번쨰 슬라이드 이동 준비완료
            }, 100);
        } else {        // 슬라이드 애니메이션 동작
            slideWrapRef.current.style.transition = 'all 0.6s ease-in-out';
            slideWrapRef.current.style.left = `${-100 * cnt}%`;    
        }
       
    },[cnt])

    return(
        <div className="slide-container">
            <div className="slide-content">
                <ul className="slide-wrap" ref={slideWrapRef}>
                    {
                        슬라이드.length > 0 && (
                            슬라이드.map((item , idx)=>{
                                return(
                                    <li 
                                        // ref={(e)=> (slideRef.current[idx]=e)}
                                        key={idx} 
                                        className={`slide slide${idx + 1}`} 
                                        style={{backgroundImage : `url(${process.env.PUBLIC_URL}/images/${item.배경이미지})`}}>
                                        <a href="!#" title={item.제목}>
                                            <span>{item.제목}</span>
                                        </a>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
        </div>	 
    );  
};