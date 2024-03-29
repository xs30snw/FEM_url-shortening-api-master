import PersonWorking from '../../media/illustration-working.svg';

import './Hero.css';

function Hero() {
    return (
        <section className='hero container' aria-label='Welcome section'>
            <img className='hero__img' src={PersonWorking} alt="Person is working." />
            <div className='hero__body'>
                <h1 className='hero__title'>More than just shorter links</h1>
                <p className='hero__desc'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <a href='#root' className="hero__btn btn-primary">Get Started</a>
            </div>
        </section>
    )
}

export default Hero;
