import ReminderForm from "../components/ReminderForm";
import ReminderList from "../components/ReminderList";

export default function Home() {
  return (
    <div className="container">
      <h2>Novo lembrete</h2>
      <ReminderForm />
      <h2>Lista de lembretes</h2>
      <ReminderList />
    </div>
  );
}
