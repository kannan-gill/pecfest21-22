import React,{useState,useEffect} from 'react';
import Competition from './Competition'

function Competitions() {

    const [CulturalComp, setCulturalComp] = useState([]);
    const [TechnicalComp, setTechnicalComp] = useState([]);

    useEffect(()=>{
        //load events from firebase and store in react state
        
    },[])

  return <div>
      <section>
      <div>Cultural Competitions</div>
      {CulturalComp.map(element=>{
          return <Competition element={element}/>
      })}
      </section>
      <section>
      <div>Technical Competitions</div>
      {TechnicalComp.map(element=>{
          return <Competition element= {element}/>
      })}
      </section>
  </div>;
}

export default Competitions;
