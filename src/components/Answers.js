import React, {useState} from 'react';
import "./UI/style.css";

function Answers(props) {
    const [state, setState] = useState(-1);
    // -1: wrong, 0: neutral, 1: right
    const [isCorrect, setCorrect] = useState(0);
    const [rand, setRand] = useState(Math.random());

    const answers = [props.question.correct_answer, ...props.question.incorrect_answers];
    const shuffled = (answers.sort(() =>  rand - 0.5));

    function handleClick(answer, index) {
        setState(index);
        if(answer === props.question.correct_answer)
        {
            setCorrect(1);
            console.log("correct");     
        }
        else {
            setCorrect(-1);
            console.log("incorrect");
        }
    }

    return (
        <div>
            {shuffled.map((option, index) =>
                <p  className="answer-card" 
                    type="button"
                    key={index} 
                    onClick={() => handleClick(option, index)} 
                    style={{
                        cursor: 'pointer',
                        background: (
                            (state === index && isCorrect === -1 ? 'mediumvioletred' : state === index && isCorrect === 1 ? 'lightgreen' : 'aliceblue')
                            )
                    }}
                    >
                        {option}
                </p>
            )}
        </div>
    )
}

export default Answers;