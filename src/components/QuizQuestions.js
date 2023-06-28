import React, {useState, useEffect} from 'react';
import './UI/style.css';
import Answers from './Answers';

function QuizQuestions(props) {
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        const URL = "https://opentdb.com/api.php?amount=10&category="+
        props.category +
        "&difficulty=" +
        props.difficulty +
        "&type=multiple";
        fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data = Object.values(data.results);
            console.log(data);
            setQuestions(data);
        })
    }, [props.category, props.difficulty])


    return (
        <div>
            <div className="all-questions">
            {questions.map(q=>
            <div key={Math.random()} className='card'>
                <p>{q.question}</p>
                <Answers question={q}></Answers>
            </div>
            )}
            </div>
        </div>
        
    )   
}

export default QuizQuestions;