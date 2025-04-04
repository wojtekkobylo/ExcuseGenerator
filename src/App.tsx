
import './App.css'
import {useState} from "react";

interface FormData{
  imie: string;
  powod: string;
  poziomwiary: string;
  data: string;
  kreatywnosc: string;
  szczegoly: string;
  pilnosc: string;
}

function App() {
    const [formData, setFormData] = useState<FormData>({ imie: "", powod: "" ,poziomwiary: "",data: "",kreatywnosc: "",szczegoly: "", pilnosc: ""});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form>
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
          Imie:
          <input
              type="text"
              name="imie"
              value={formData.imie}
              onChange={handleChange}
          />
        </label>
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
          Imie:
          <input
              type="text"
              name="imie"
              value={formData.imie}
              onChange={handleChange}
          />
        </label>
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
          Imie:
          <input
              type="text"
              name="imie"
              value={formData.imie}
              onChange={handleChange}
          />
        </label>
        <label>
          Imie:
          <input
              type="text"
              name="imie"
              value={formData.imie}
              onChange={handleChange}
          />
        </label>
      </form>
    </>
  )
}

export default App
