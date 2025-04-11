
import './App.css'
import {useState} from "react";
import './Form.css'

interface FormData{
  imie: string;
  powod: string;
  poziomwiary: string;
  data: string;
  kreatywnosc: string;
  szczegoly: string;
  pilnosc: boolean;
}

function App() {
    let pilnosc: string;
  const [formData, setFormData] = useState<FormData>({ imie: "", powod: "" ,poziomwiary: "",data: "",kreatywnosc: "",szczegoly: "", pilnosc: false});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: type==="checkbox"? checked : value }));
  };
  if (formData.pilnosc){
    pilnosc = "wymówke oznaczono jako pilną";
  }
  else{
    pilnosc = "wymówki nie oznaczono jako pilną"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData.imie,'\n',formData.powod,'\n',`tresc wymowki: ${formData.szczegoly}`,'\n',`zdarzenie miało miejsce:${formData.data}`,'\n'
        ,`ta wymówka jest ${formData.kreatywnosc}`,'\n',pilnosc)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Imie:
          <input
            type="text"
            name="imie"
            value={formData.imie}
            onChange={handleChange}
          />
        </label>
        <label>
          Powód wymówki:
          <select
              name="powod"
              value={formData.powod}
              onChange={handleChange}
          >
            <option value="">-- Wybierz --</option>
            <option value="spóźnienie">spóźnienie</option>
            <option value="niewykonanie zadania">niewykonanie zadania</option>
            <option value="brak pracy domowej">brak pracy domowej</option>
          </select>
        </label>
        <label>
          Poziom wiarygodności
          <input type="range" name="poziomwiary" min="1" max="10" value={formData.poziomwiary}
                 onChange={handleChange}/>
        </label>
        <label>
          Data zdarzenia:
          <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
          />
        </label>
        <label>
          Poziom kreatywności:
          <select
              name="kreatywnosc"
              value={formData.imie}
              onChange={handleChange}
          >
            <option value="">-- Wybierz --</option>
            <option value="mało kreatywna">mało kreatywna</option>
           <option value="przeciętnie kreatywna">przeciętna</option>
            <option value="bardzo kreatywna">bardzo kreatywna</option>
          </select>
        </label>
        <label>
          Dodatkowe szczegóły:
          <textarea
              name="szczegoly"
              value={formData.szczegoly}
              onChange={handleChange}
          />
        </label>
        <label>
          Pilna wymówka
          <input
              type="checkbox"
              name="pilnosc"
              checked={formData.pilnosc}
              onChange={handleChange}
          />

        </label>
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default App
