import './MainSection.css';

const MainSection = (props) => {
    // let [nextClassification, setNextClassification] = useState(NAICS.sectors);
    // let [classification, setClassification] = useState({
    //   "sector" : null,
    //   "subsector" : null,
    //   "industry_group" : null,
    //   "industry" : null,
    //   "detail_industry" : null
    // });

    // let classificationProperty;
    // if (classification.sector === null) {
    //   classificationProperty = "sector";
    // } else if (classification.subsector === null) {
    //   classificationProperty = "subsector";
    // } else if (classification.industry_group === null) {
    //   classificationProperty = "industry_group";
    // } else if (classification.industry === null) {
    //   classificationProperty = "industry";
    // } else if (classification.detail_industry === null) {
    //   classificationProperty = "detail_industry";
    // }

    // const handleClassificationModification = (e) => {
    //   setClassification({...classification, [classificationProperty] : e.target.innerText });
    //   setNextClassification(NAICS.sectors[e.target.attributes[0].nodeValue].subsectors)
    // }

    // console.log(classification);
  return (
    <>
      <div className="main_section-container">
        <h1 className="main_section-question">Whaqt Indsutry Are you in?</h1>
        
        

      </div>
    </>
  );
};

export default MainSection;