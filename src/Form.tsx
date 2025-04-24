import {useState} from "react";
import './Form.css';

interface FormProps {
    onButtonClick: (msg: string) => void;
}

const ExcuseForm: React.FC<FormProps> = ({onButtonClick}: FormProps) => {
    const [userName, setUserName] = useState<string>("");
    const [excuseReason, setExcuseReason] = useState<string>("spóźnienie");
    const [truthLevel, setTruthLevel] = useState<number>(5);
    const [incidentDate, setIncidentDate] = useState<string>("");
    const [creativityLevel, setCreativityLevel] = useState<string>("Średnia");
    const [extraDetails, setExtraDetails] = useState<string>("");
    const [isUrgent, setIsUrgent] = useState<boolean>(false);

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserName(e.currentTarget.value);
    }

    function handleReasonChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setExcuseReason(e.currentTarget.value);
    }

    function handleCredibilityChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTruthLevel(Number(e.currentTarget.value));
    }

    function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIncidentDate(e.currentTarget.value);
    }

    function handleCreativityChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setCreativityLevel(e.currentTarget.value);
    }

    function handleDetailsChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setExtraDetails(e.currentTarget.value);
    }

    function handleUrgentChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIsUrgent(e.currentTarget.checked);
    }

    const generateExcuseMessage = () => {
        const message = `${userName}, niestety ${excuseReason}, ponieważ ${extraDetails}. Poziom wiarygodności: ${truthLevel}, data: ${incidentDate}, kreatywność: ${creativityLevel}, ${isUrgent ? "pilne" : "niepilne"}.`;
        onButtonClick(message);
        setUserName("");
        setExcuseReason("spóźnienie");
        setTruthLevel(5);
        setIncidentDate("");
        setCreativityLevel("Średnia");
        setExtraDetails("");
        setIsUrgent(false);
    };

    return (
        <div className="form-container">
            <h2>Excuse Generator</h2>
            <label>Podaj Imie:</label>
            <input type="text" name="name" placeholder="imie" value={userName} onChange={handleNameChange} />
            <label>Podaj Powód:</label>
            <select name="reason" value={excuseReason} onChange={handleReasonChange}>
                <option>spóźnienie</option>
                <option>brak pracy domowej</option>
                <option>brak odpowiedzi na wiadomość</option>
                <option>udawanie, że zna się kod</option>
                <option>nagły wypadek</option>
            </select>
            <label>Wiarygodność {truthLevel}</label>
            <input type="range" min="1" max="10" name="credibility" value={truthLevel} onChange={handleCredibilityChange} />
            <label>Data:</label>
            <input type="date" name="date" value={incidentDate} onChange={handleDateChange} />
            <label>Poziom kreatywności:</label>
            <select name="creativity" value={creativityLevel} onChange={handleCreativityChange}>
                <option>Mała</option>
                <option>Średnia</option>
                <option>Duża</option>
                <option>Ogromna</option>
                <option>Ekstremalna</option>
            </select>
            <label>Szczegóły:</label>
            <textarea name="details" placeholder="Może podasz jakieś szczegóły?" value={extraDetails} onChange={handleDetailsChange} />
            <label>
                Pilne?: <input name="urgent" type="checkbox" checked={isUrgent} onChange={handleUrgentChange} />
            </label>
            <button onClick={generateExcuseMessage}>Generuj wymówkę</button>
        </div>
    );
};

export default ExcuseForm;

