import './Classification.css';

const Classification = (props) => {
  return (
    <>
      <div className="classification-container">
        <h1 className="question">What's your Main Sector?</h1>
        
        {props.nextClassification.map((classification, index) => {
            return (
              <div key={index} value={index} id={classification.name} className="classification-card" onClick={props.handleClassificationModification}>
                <h3 value={index}>{classification.name}</h3>
              </div>
            )
        })}

      </div>
    </>
  );
};

export default Classification;