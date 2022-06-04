import './Intro.css';

const Intro = () => {


    return (
      <div className="intro" >
        <div className="intro-background">
          <p className="value-text">If your business is selected, our team of developers will build you a digital tool that takes your business to the next level.
          </p>
          {/* https://placeimg.com/640/480/tech */}
        
          <ul className="benefits">
            <h1>BENEFITS</h1>
            <li>Open-source Engineers</li>
            {/* (https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) */}
            <li>Partner with a nonprofit</li>
            {/* (https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) */}
            <li>Custom tools (Need Image)</li>
            {/*Find something or make an image like: https://www.sazanconsulting.com/wp-content/uploads/2014/04/AAEAAQAAAAAAAAedAAAAJDMzNDYxN2I5LThmYTQtNDAxYy05OTc4LWEwN2E3YTdlY2EyZg.jpg 
            OR https://wcs.uwo.ca/srs/upload/bannerfs.png  */}
            <li>Meet yours needs (Need Image)</li>
            {/*https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 */}
            <li>Gain an advantage (Need Image)</li>
            {/*https://images.unsplash.com/photo-1543092587-d8b8feaf362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 */}
          </ul>
      </div>
   </div>
    );
}

export default Intro;