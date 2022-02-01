import './Features.css';
import iRecognition from './icon-brand-recognition.svg';
import iRecords from './icon-detailed-records.svg';
import iCustomize from './icon-fully-customizable.svg';

function Features() {
    return (
        <section className="features">
            <div className="container">
                <div className="featuresHeader">
                    <h3>Advanced statistics</h3>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className="featuresArticles">
                    <article>
                        <div className="featuresIcon">
                            <img src={iRecognition} alt="" />
                        </div>
                        <h4>Brand Recognition</h4>
                        <p>
                            Boost your brand recognition with each click.
                            Generic links don't mean a thing.
                            Branded links help instil confidence in your content.
                        </p>
                    </article>
                    <article>
                        <div className="featuresIcon">
                            <img src={iRecords} alt="" />
                        </div>
                        <h4>Detailed Records</h4>
                        <p>
                            Gain insights into who is clicking your links.
                            Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </article>
                    <article>
                        <div className="featuresIcon">
                            <img src={iCustomize} alt="" />
                        </div>
                        <h4>Fully Customizible</h4>
                        <p>
                            Improve brand awareness and content discoverability through customizible links,
                            supercharging audience engagement.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Features
