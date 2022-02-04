import iRecognition from './icon-brand-recognition.svg';
import iRecords     from './icon-detailed-records.svg';
import iCustomize   from './icon-fully-customizable.svg';

import './Features.css';

function Features() {
    return (
        <section className='features'>
            <div className='container'>
                <div className='features__header'>
                    <h3 className='features__header__title'>Advanced Statistics</h3>
                    <p className='features__header__desc'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>

                <div className='features__cards'>

                    <div className='features__card'>
                        <div className='features__card__icon'>
                            <img src={iRecognition} alt='' />
                        </div>
                        <h4 className='features__card__title'>Brand Recognition</h4>
                        <p className='features__card__desc'>
                            Boost your brand recognition with each click.
                            Generic links don't mean a thing.
                            Branded links help instil confidence in your content.
                        </p>
                    </div>

                    <div className='features__card'>
                        <div className='features__card__icon'>
                            <img src={iRecords} alt='' />
                        </div>
                        <h4 className='features__card__title'>Detailed Records</h4>
                        <p className='features__card__desc'>
                            Gain insights into who is clicking your links.
                            Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </div>

                    <div className='features__card'>
                        <div className='features__card__icon'>
                            <img src={iCustomize} alt='' />
                        </div>
                        <h4 className='features__card__title'>Fully Customizible</h4>
                        <p className='features__card__desc'>
                            Improve brand awareness and content discoverability through customizible links,
                            supercharging audience engagement.
                        </p>
                    </div>

                </div>                
            </div>
        </section>
    )
}

export default Features
