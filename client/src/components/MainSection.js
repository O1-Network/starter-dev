import './MainSection.css';

const MainSection = (props) => {
  return (
    <div className="main_container">

      <div id="main_description">
        <h3>{props.sectionType.type}</h3>
        <p>
          {props.sectionType.text}
        </p>
        <a href="https://github.com/">Get Started</a>
      </div>

      <div id="main_video">
        <iframe
          width="420"
          height="315"
          src={props.sectionType.video}
        />
      </div>

      <div id="main_image">
        <img
          src={props.sectionType.img}
          alt={props.sectionType.imgAlt}
        />
      </div>

      <div id="main_learn-more">
        <p>
          {props.sectionType.learn}
        </p>
        <a href="https://github.com/">Learn More</a>
      </div>

    </div>
  );
};

export default MainSection;
