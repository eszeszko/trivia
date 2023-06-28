import React, {useState, useEffect} from 'react';
import QuizQuestions from "./QuizQuestions";
import "./UI/style.css";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [difficulty, setDifficulty] = useState('easy');
    const [category, setCategory] = useState(9);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(difficulty);
        console.log(category);
    }

    useEffect(() => {
        const URL = "https://opentdb.com/api_category.php";
        fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data = Object.values(data.trivia_categories);
            setCategories(data);
        })
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-submit">
                <label>
                    Select category:
               <select name="selectedCategory" onChange={event => setCategory(event.target.value)}>
                {categories.map(c => 
                    <option
                        value={c.id}
                        key={Math.random()}
                    >
                        {c.name}
                    </option>
                )}
               </select>
               </label>
               
               <label>
                    Select difficulty: 
                    <select name="selectedDifficulty" onChange={event => setDifficulty(event.target.value)}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
               </label>
            </form>
            <QuizQuestions difficulty={difficulty} category={category}></QuizQuestions>
        </div>
    )
}

export default Categories;