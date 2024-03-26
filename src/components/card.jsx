import React from 'react';
import productImage from './images/image-equilibrium.jpg'
import avatarImage from './images/image-avatar.png'
import './css-components/Card.css'
import iconEth from './images/icon-ethereum.svg'
import iconTime from './images/icon-clock.svg'
import iconView from './images/icon-view.svg'

function CardModel({ props }) {
    return (
        <div className="container-card">
            <div className="container-second-card">
                <section className="section-img">
                    <img src={productImage} alt="card-img" className='img-sc' />
                    <img src={iconView} alt="icon-view-vector" className='img-view' />
                </section>
                <section className="section-card">
                    <div className="primary-info">
                        <p>Equilibrium #3429</p>
                    </div>
                    <p className='p-only'>Our Equilibrium collection promotes balanced and calm</p>
                    <div className="footer-st-2">
                        <span className='span-Eth'>
                            <img src={iconEth} className='icon-eth' alt='icon-ethereum' />
                            0.041ETH</span>
                        <span className='span-time'>
                            <img src={iconTime} className='icon-time' alt='icon-time' />
                            3 days left</span>
                    </div>
                    <hr className='hr-site' />
                    <section className="final-st">
                        <img src={avatarImage} alt="avatar-img" className='avatar-img' />
                        <p className='info-user'>creation of <a className='negrita-font'>Jules Wyvern</a></p>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default CardModel