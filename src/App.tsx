

import ExcuseForm from "./Form.tsx";
import {useState} from "react";
import ExcuseList from "./ListaWymowek.tsx";

function App() {
    const [excusesList, setExcusesList] = useState<Array<string>>(() => {
        const savedExcuses = localStorage.getItem("excuses");
        return savedExcuses ? JSON.parse(savedExcuses) : [];
    });

    function handleNewExcuse(excuse: string) {
        const updatedList = [...excusesList, excuse];
        setExcusesList(updatedList);
        localStorage.setItem("excuses", JSON.stringify(updatedList));
    }

    function clearAllExcuses() {
        setExcusesList([]);
        localStorage.removeItem("excuses");
    }

    return (
        <>
            <ExcuseForm onButtonClick={handleNewExcuse}/>
            <div style={{ color: 'black' }}>
                <ExcuseList excusesList={excusesList}/>
            </div>

            <button onClick={clearAllExcuses}>Clear All Excuses</button>
        </>
    )
}

export default App;
