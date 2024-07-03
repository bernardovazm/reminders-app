import { useSelector, useDispatch } from "react-redux";
import { deleteReminder } from "../store";

export default function ReminderList() {
  const reminders = useSelector((state) => state.reminders);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteReminder(id));
  };

  const groupedReminders = reminders.reduce((groups, reminder) => {
    const date = new Date(reminder.date).toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(reminder);
    return groups;
  }, {});

  return (
    <div>
      {Object.keys(groupedReminders)
        .sort()
        .map((date) => (
          <div key={date} className="reminder-group">
            <h3>{date}</h3>
            {groupedReminders[date].map((reminder) => (
              <div key={reminder.id} className="reminder">
                <span className="reminder-text">{reminder.name}</span>
                <button onClick={() => handleDelete(reminder.id)}>×</button>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
