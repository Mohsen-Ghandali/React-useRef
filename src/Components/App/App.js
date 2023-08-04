import { useEffect, useRef } from "react";
import "./App.css"

const App = () => {
    let inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <div className="cont">
            <label htmlFor="username" >username</label>
            <input type="text" name="username" placeholder="username...!" />
            <br /><br />
                <label htmlFor="password" >username</label>
                <input ref={inputRef} type="password" name="password" placeholder="password...!" />
                <button>register</button>
        </div>
    );
}

export default App;