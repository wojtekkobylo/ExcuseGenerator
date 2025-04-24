

import Form from "./Form.tsx";
import {useState} from "react";
import ListaWymowek from "./ListaWymowek.tsx";



function App() {



    const [listaWym, setListaWym] = useState<Array<string>>(() => {
        const savedExcuses = localStorage.getItem("wymowki");
        return savedExcuses ? JSON.parse(savedExcuses) : [];
    });


    function onButtonClick2(msg:string) {
        const updatedList=([...listaWym, msg]);
        setListaWym(updatedList);
        localStorage.setItem("wymowki", JSON.stringify(updatedList));
    }


    function clearExcuses() {
        setListaWym([]);
        localStorage.removeItem("wymowki");
    }


    return (
        <>
            <Form onButtonClick={onButtonClick2}/>
            <ListaWymowek listaWymowek={listaWym}/>
            <button onClick={clearExcuses}>Wyczysc Wymowki</button>
        </>
    )
}

export default App
