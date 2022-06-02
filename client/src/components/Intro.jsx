import './Intro.css';

const Intro = () => {


    return (
      <div className="intro" >
        
        <div className="intro-statement">
          <img className="intro-image" src="https://placeimg.com/640/480/tech" alt="intro-image" />
          <p className="value-proposition">If your business is selected, our team of developers will build you a digital tool that takes your business to the next level.</p>
          {/* https://placeimg.com/640/480/tech */}
        </div>
        <ul className="benefits">
          <h1>BENEFITS</h1>
          <li>Open-source Engineers</li>
          {/* (https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) */}
          <li>Partner with a nonprofit</li>
          {/* (https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) */}
          <li>Custom tools (Need Image)</li>
          <li>Meet yours needs (Need Image)</li>
          <li>Gain an advantage (Need Image)</li>
        </ul>
      </div>
    );
}

export default Intro;