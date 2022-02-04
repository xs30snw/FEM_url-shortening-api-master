import PersonWorking from './illustration-working.svg';

import './Hero.css';

function Hero() {
    return (
        <section className='hero container'>
            <img className='hero__img' src={PersonWorking} alt="Person is working." />
            <div className='hero__body'>
                <h1 className='hero__title'>More than just shorter links</h1>
                <p className='hero__desc'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="hero__btn btn-primary">Get Started</button>
            </div>
        </section>
    )
}

export default Hero;
