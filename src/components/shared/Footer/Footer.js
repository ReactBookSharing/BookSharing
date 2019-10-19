import React from 'react'
import './Footer.css';
function Footer(props) {
    return (
        <div className="container-fluid Footer">
            <div className="row Footer__top">
                <div className="col-4 d-flex flex-column justify-content-center align-items-center ">
                    <h6 className="Footer__top__titles">BookSharing</h6>
                    <ul className="Footer__top__list">
                        <li>О нас</li>
                        <li>Почему мы?</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                    <h6 className="Footer__top__titles">Контакты</h6>
                    <ul className="Footer__top__list">
                        <li>Almaty, Radostovstsya 4, 31</li>
                        <li>Whatapp</li>
                        <li>Telegram</li>
                    </ul>
                </div>
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                    <h6 className="Footer__top__titles">Мы в социальных сетях</h6>
                    <ul className="Footer__top__list">
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </div>
            <div className="row Footer__bottom">
                <div className="col-12 text-center d-flex justify-content-center align-items-center">
                    All rights reserved. Designed by CHI.
                </div>
            </div>
        </div>
    );
}

export default Footer;