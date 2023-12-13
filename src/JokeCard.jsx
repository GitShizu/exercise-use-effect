import { useEffect, useState } from "react"

export default () => {
    const [joke, setJoke] = useState()
    const [showAnswer, setShowAnswer] = useState(false)
    const handleFetch = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart');
            const newJoke = await response.json()
            setJoke(newJoke)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect((() => { handleFetch() }), [])
    if (joke !== undefined) {
        return (
            <section id="container">
                <div id="joke">
                    <p>{joke.setup}</p>
                    {showAnswer && <p>{joke.delivery}</p>}
                </div>
                <div>
                <button onClick={() => { showAnswer ? handleFetch() : setShowAnswer(true) }}>
                    {showAnswer ? 'Reload' : 'Answer'}
                </button>
                </div>
            </section>


        )
    } else {
        return <span><h3>"Loading"</h3></span>
    }
}