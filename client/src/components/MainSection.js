import './MainSection.css';

const MainSection = (props) => {
  return (
    <div className="main-section">

      <div id="intro">
        <h3>{props.sectionType.type}</h3>
        <p>
          This is a bunch of information that sounds good to a business and encourages them to work with us.
          This section talks about the benefits of getting technology like websites, internal business tools,
          databases, and many other options.
        </p>
        <a href="https://github.com/">Get Started</a>
      </div>

      <div id="video">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      </div>

      <div id="image">
        <img
          src="http://via.placeholder.com/360x240"
          alt="business placeholder"
        />
      </div>

      <div id="learn-more">
        <p>
          If you want to see or hear more, click this link. This link is going to open up more options
          for businesses and nonprofits to get more information about the products and services
          available, the charity work, etc etc etc.
        </p>
        <a href="https://github.com/">Learn More</a>
      </div>

    </div>
  );
};

export default MainSection;
