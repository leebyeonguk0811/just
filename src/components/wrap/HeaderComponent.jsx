import React from "react";
import './scss/HeaderComponent.scss'
import { Outlet , Link } from "react-router-dom";

export default function HeaderComponent (){

    const [sub1 , setSub1] = React.useState(false);
    const [sub2 , setSub2] = React.useState(false);
    const [sub3 , setSub3] = React.useState(false);
    const [sub4 , setSub4] = React.useState(false);

    // 서브1 show 이벤트
    const onMouseEnterSub1Show=()=>{
        setSub1(true);
    }

    // 서브1 hide 이벤트
    const onMouseEnterSub1Hide=()=>{
        setSub1(false);
    }

    // 서브2 show 이벤트
    const onMouseEnterSub2Show=()=>{
        setSub2(true);
    }

    // 서브2 hide 이벤트
    const onMouseEnterSub2Hide=()=>{
        setSub2(false);
    }

    // 서브3 show 이벤트
    const onMouseEnterSub3Show=()=>{
        setSub3(true);
    }

    // 서브3 hide 이벤트
    const onMouseEnterSub3Hide=()=>{
        setSub3(false);
    }

    // 서브4 show 이벤트
    const onMouseEnterSub4Show=()=>{
        setSub4(true);
    }

    // 서브4 hide 이벤트
    const onMouseEnterSub4Hide=()=>{
        setSub4(false);
    }

    // 3항연산자
    // 조건 ? 참 : 거짓 1왼쪽에 있는 빽틱을 사용한다
    //console.log( `main-btn${sub1 ? " on" : ""} `);


    return(
        <>
            <header id="header">
                <div className="left">
                    <h1><Link to="/index" title="JUST 쇼핑몰"><span>JUST</span> <span>쇼핑몰</span></Link></h1>
                </div>
                <div className="right">
                    <aside id='aside'>
                        <Link to='/signup'>회원가입</Link>
                        <i>|</i>
                        <a href='#'>로그인</a>
                        <i>|</i>
                        <a href='#'>공지사항</a>
                        <i>|</i>
                    </aside>
                    <nav id="nav">
                        <ul>
                            <li className="col" onMouseLeave={onMouseEnterSub1Hide}>
                                <a href="!#" onMouseEnter={onMouseEnterSub1Show} className={`main-btn${sub1 ? " on":""}`} title="탑">탑</a>
                                {   
                                    sub1 &&
                                    (<div className="sub sub1">
                                        <div className="sub-container">
                                            <ul>
                                                <li> {/* 1열 */}
                                                    <ul>
                                                        <li><a href="!#" title="블라우스">블라우스</a></li>
                                                        <li><a href="!#" title="티">티</a></li>
                                                        <li><a href="!#" title="셔츠">셔츠</a></li>
                                                        <li><a href="!#" title="니트">니트</a></li>
                                                    </ul>
                                                </li>
                                                <li> {/* 2열 */}
                                                    <ul>
                                                        <li><a href="!#" title="자켓">자켓</a></li>
                                                        <li><a href="!#" title="코트">코트</a></li>
                                                        <li><a href="!#" title="가디건">가디건</a></li>
                                                        <li><a href="!#" title="머플러">머플러</a></li>
                                                    </ul>
                                                </li>
                                                <li> {/* 3열 */}
                                                    <ul>
                                                        <li><a href="!#" title="청바지">청바지</a></li>
                                                        <li><a href="!#" title="짧은바지">짧은바지</a></li>
                                                        <li><a href="!#" title="긴바지">긴바지</a></li>
                                                        <li><a href="!#" title="레깅스">레깅스</a></li>
                                                    </ul>
                                                </li>
                                                <li> {/* 4열 */}
                                                    <ul>
                                                        <li><a href="!#" title="귀고리">귀고리</a></li>
                                                        <li><a href="!#" title="목걸이">목걸이</a></li>
                                                        <li><a href="!#" title="반지">반지</a></li>
                                                        <li><a href="!#" title="팔찌">팔찌</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>)
                                }
                            </li>
                            <li className="col" onMouseLeave={onMouseEnterSub2Hide}>
                                <a href="!#" onMouseEnter={onMouseEnterSub2Show} className={`main-btn${sub2 ? " on":""}`} title="아우터">아우터</a>
                                {   
                                    sub2 &&
                                    (<div className="sub sub2">
                                        <div className="sub-container">
                                            <ul>
                                                <li> {/* 1열 */}
                                                    <ul>
                                                        <li><a href="!#" title="블라우스">블라우스</a></li>
                                                        <li><a href="!#" title="티">티</a></li>
                                                        <li><a href="!#" title="셔츠">셔츠</a></li>
                                                        <li><a href="!#" title="니트">니트</a></li>
                                                    </ul>
                                                </li>
                                                <li> {/* 2열 */}
                                                    <ul>
                                                        <li><a href="!#" title="자켓">자켓</a></li>
                                                        <li><a href="!#" title="코트">코트</a></li>
                                                        <li><a href="!#" title="가디건">가디건</a></li>
                                                        <li><a href="!#" title="머플러">머플러</a></li>
                                                    </ul>
                                                </li>
                                                <li> {/* 3열 */}
                                                    <ul>
                                                        <li><a href="!#" title="청바지">청바지</a></li>
                                                        <li><a href="!#" title="짧은바지">짧은바지</a></li>
                                                        <li><a href="!#" title="긴바지">긴바지</a></li>
                                                        <li><a href="!#" title="레깅스">레깅스</a></li>
                                                    </ul>
                                                </li>
                                                <li> {/* 4열 */}
                                                    <ul>
                                                        <li><a href="!#" title="귀고리">귀고리</a></li>
                                                        <li><a href="!#" title="목걸이">목걸이</a></li>
                                                        <li><a href="!#" title="반지">반지</a></li>
                                                        <li><a href="!#" title="팔찌">팔찌</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> )  
                                }                     
                            </li>
                            <li className="col" onMouseLeave={onMouseEnterSub3Hide}>
                                <a href="!#" onMouseEnter={onMouseEnterSub3Show} className={`main-btn${sub3 ? " on":""}`} title="팬츠">팬츠</a>
                                {   
                                    sub3 &&
                                    (<div className="sub sub3">
                                    <div className="sub-container">
                                        <ul>
                                            <li> {/* 1열 */}
                                                <ul>
                                                    <li><a href="!#" title="블라우스">블라우스</a></li>
                                                    <li><a href="!#" title="티">티</a></li>
                                                    <li><a href="!#" title="셔츠">셔츠</a></li>
                                                    <li><a href="!#" title="니트">니트</a></li>
                                                </ul>
                                            </li>
                                            <li> {/* 2열 */}
                                                <ul>
                                                    <li><a href="!#" title="자켓">자켓</a></li>
                                                    <li><a href="!#" title="코트">코트</a></li>
                                                    <li><a href="!#" title="가디건">가디건</a></li>
                                                    <li><a href="!#" title="머플러">머플러</a></li>
                                                </ul>
                                            </li>
                                            <li> {/* 3열 */}
                                                <ul>
                                                    <li><a href="!#" title="청바지">청바지</a></li>
                                                    <li><a href="!#" title="짧은바지">짧은바지</a></li>
                                                    <li><a href="!#" title="긴바지">긴바지</a></li>
                                                    <li><a href="!#" title="레깅스">레깅스</a></li>
                                                </ul>
                                            </li>
                                            <li> {/* 4열 */}
                                                <ul>
                                                    <li><a href="!#" title="귀고리">귀고리</a></li>
                                                    <li><a href="!#" title="목걸이">목걸이</a></li>
                                                    <li><a href="!#" title="반지">반지</a></li>
                                                    <li><a href="!#" title="팔찌">팔찌</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>)  
                                }                              
                            </li>
                            <li className="col" onMouseLeave={onMouseEnterSub4Hide}>
                                <a href="!#" onMouseEnter={onMouseEnterSub4Show} className={`main-btn${sub4 ? " on":""}`} title="악세서리">악세서리</a>
                                {   
                                    sub4 &&
                                    (<div className="sub sub4">
                                    <div className="sub-container">
                                        <ul>
                                            <li> {/* 1열 */}
                                                <ul>
                                                    <li><a href="!#" title="블라우스">블라우스</a></li>
                                                    <li><a href="!#" title="티">티</a></li>
                                                    <li><a href="!#" title="셔츠">셔츠</a></li>
                                                    <li><a href="!#" title="니트">니트</a></li>
                                                </ul>
                                            </li>
                                            <li> {/* 2열 */}
                                                <ul>
                                                    <li><a href="!#" title="자켓">자켓</a></li>
                                                    <li><a href="!#" title="코트">코트</a></li>
                                                    <li><a href="!#" title="가디건">가디건</a></li>
                                                    <li><a href="!#" title="머플러">머플러</a></li>
                                                </ul>
                                            </li>
                                            <li> {/* 3열 */}
                                                <ul>
                                                    <li><a href="!#" title="청바지">청바지</a></li>
                                                    <li><a href="!#" title="짧은바지">짧은바지</a></li>
                                                    <li><a href="!#" title="긴바지">긴바지</a></li>
                                                    <li><a href="!#" title="레깅스">레깅스</a></li>
                                                </ul>
                                            </li>
                                            <li> {/* 4열 */}
                                                <ul>
                                                    <li><a href="!#" title="귀고리">귀고리</a></li>
                                                    <li><a href="!#" title="목걸이">목걸이</a></li>
                                                    <li><a href="!#" title="반지">반지</a></li>
                                                    <li><a href="!#" title="팔찌">팔찌</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    </div>)  
                                }                               
                            </li>
                        </ul>

                    </nav>
                </div>
            </header>
            <Outlet/>
        </>    
    );  
};