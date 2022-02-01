import PersonWorking from './illustration-working.svg';

import './Welcome.css';

function Welcome() {
    return (
        <section className="welcomeInfo container">
            <img src={PersonWorking} alt="Person is working." />
            <div>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="button1">Get Started</button>
            </div>
        </section>
    )
}

export default Welcome
