import './Intro.css';

const Intro = () => {
    return (
        <div className="intro" >
          <div className="intro-statement">
            <p>If you're business is selected, our team of developers will build you a digital tool that takes your business to the next level.</p>
          </div>
          <ul className="benefits">
            <li>Open-source Engineers</li>
            <li>Partner with a nonprofit</li>
            <li>Custom tools</li>
            <li>Meet yours needs</li>
            <li>Gain an advantage</li>
          </ul>
        </div>
    );
}

export default Intro;