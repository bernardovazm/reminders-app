import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReminder } from "../store";

export default function ReminderForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reminderDate = new Date(date + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ajuste aqui para ignorar horas, minutos e segundos
    if (!name || !date || reminderDate < today) {
      alert("Lembrete inválido!");
      return;
    }
    dispatch(addReminder({ name, date: reminderDate.toISOString() }));
    setName("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Data:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button type="submit">Criar</button>
      </div>
    </form>
  );
}
