

import React, { useEffect } from 'react'

function Quiz ()  {
  const [quest,setQuest] = useState([])
  const [loading,setLoading] = useState(true);
  const setQuestions = async() =>{
    const q = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986');
    const data = await q.json();
    setQuestions(data.results);
  }
  useEffect(() =>
  getQuestion();
  [])
  if(loading) {
    return <p> Loading.... </p>
  }
  rerurn (

       <div>
         quest.map((q,index) => {
           <Question title={q.Question} index={index} ca={q.correctanswer}/>
         })
       </div>
  );
}
export default Quiz
