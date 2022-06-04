import {
  ClassificationContainer,
  Question,
  ClassificationCard
} from './ClassificationStyles';

const Classification = (props) => {
  return (
    <>
      <ClassificationContainer>
        <Question>What's your Main Sector?</Question>
        
        {props.nextClassification.map((classification, index) => {
            return (
              <ClassificationCard key={index} value={index} id={classification.name} onClick={props.handleClassificationModification}>
                <h3 value={index}>{classification.name}</h3>
              </ClassificationCard>
            )
        })}

      </ClassificationContainer>
    </>
  );
};

export default Classification;