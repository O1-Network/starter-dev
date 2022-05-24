import './Intro.css';
const Intro = () => {
    return (
        <div className="intro">
          <div className="intro-statement">
                <h2>I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.</h2>
          </div>
          <img className="intro-image" alt='Intro' src={require('../images/team_photo.jpg')}></img>
        </div>
    );
}

export default Intro;