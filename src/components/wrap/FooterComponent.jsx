import React from "react";
import './scss/FooterComponent.scss'

export default function FooterComponent (){
    return(
        <footer id="footer">
            <div className="left">
                <h1><a href="./index.html" title="JUST 쇼핑몰 로고"><span>JUST</span> <span>쇼핑몰</span></a></h1>
            </div>
            <div className="center">
                <div className="container">
                    <address>서울시 마포구 홍익로 29(서교동, 동교빌딩) just 쇼핑몰</address>
                    <p>Copyright &copy; 2018 just 쇼핑몰, All right reserved.</p>    
                </div>
            </div>
            <div className="right">
                <div className="container">
                    <a href="!#" title="인스타그램"><img src="./images/icon_1.png" alt="인스타그램"/></a>
                    <a href="!#" title="트위터"><img src="./images/icon_2.png" alt="트위터"/></a>
                    <a href="!#" title="유튜브"><img src="./images/icon_3.png" alt="유튜브"/></a>
                </div>
            </div>
        </footer>
    );  
};