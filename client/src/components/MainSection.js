import './MainSection.css';

const MainSection = (props) => {
  return (
    <div className="main_container">

      <div id="main_description">
        <h3 className="title">{props.sectionType.type}</h3>
        <p className="text">
          {props.sectionType.text}
        </p>
      </div>

      <div id="main_video">
          <iframe title="NewVideo" className="main_video-intro"
          src={props.sectionType.video}
          />
        
      </div>

      <div id="main_image">
        <img
          className="image"
          src={props.sectionType.img}
          alt={props.sectionType.imgAlt}
        />
      </div>

      {/* Create a visual to indicate to users that there is more information below */}
      <div id="main_description_2">
        <h3 className="title">{props.sectionType.type}</h3>
        <p className="text">
          {props.sectionType.text}
        </p>
      </div>

    </div>
  );
};

export default MainSection;
