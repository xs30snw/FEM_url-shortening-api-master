import iRecognition from '../../media/icon-brand-recognition.svg';
import iRecords     from '../../media/icon-detailed-records.svg';
import iCustomize   from '../../media/icon-fully-customizable.svg';

import './Features.css';

function Features() {
    return (
        <section className='features' aria-labelledby='features__header__title'>
            <div className='container'>
                <header className='features__header'>
                    <h2 id='features__header__title' className='features__header__title'>Advanced Statistics</h2>
                    <p className='features__header__desc'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </header>

                <div className='features__cards'>

                    <section className='features__card' aria-labelledby='card-id--recognition'>
                        <div className='features__card__icon' role='img' aria-label='Graph showing growth'>
                            <img src={iRecognition} alt='Graph showing growth' />
                        </div>
                        <h3 id='card-id--recognition' className='features__card__title'>Brand Recognition</h3>
                        <p className='features__card__desc'>
                            Boost your brand recognition with each click.
                            Generic links don't mean a thing.
                            Branded links help instil confidence in your content.
                        </p>
                    </section>

                    <section className='features__card' aria-labelledby='card-id--records'>
                        <div className='features__card__icon' role='img' aria-label='Gauge with a pointer in the middle'>
                            <img src={iRecords} alt='Gauge with a pointer in the middle' />
                        </div>
                        <h3 id='card-id--records' className='features__card__title'>Detailed Records</h3>
                        <p className='features__card__desc'>
                            Gain insights into who is clicking your links.
                            Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </section>

                    <section className='features__card' aria-labelledby='card-id--customize'>
                        <div className='features__card__icon' role='img' aria-label='Three drawing tools'>
                            <img src={iCustomize} alt='Three drawing tools' />
                        </div>
                        <h3 id='card-id--customize' className='features__card__title'>Fully Customizible</h3>
                        <p className='features__card__desc'>
                            Improve brand awareness and content discoverability through customizible links,
                            supercharging audience engagement.
                        </p>
                    </section>

                </div>                
            </div>
        </section>
    )
}

export default Features
