import { useState, useEffect } from 'react';

export default function Home() {
  const [cruises, setCruises] = useState([]);
  const [form, setForm] = useState({ name: '', ship: '', date: '', duration: '', points: '' });

  useEffect(() => {
    fetch('/api/cruises')
      .then((res) => res.json())
      .then((data) => setCruises(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/cruises', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const newCruise = await res.json();
    setCruises([...cruises, newCruise]);
  };

  return (
    <div>
      <h1>Cruise Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="text" placeholder="Ship" value={form.ship} onChange={(e) => setForm({ ...form, ship: e.target.value })} />
        <input type="date" placeholder="Date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <input type="number" placeholder="Duration" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
        <input type="number" placeholder="Points" value={form.points} onChange={(e) => setForm({ ...form, points: e.target.value })} />
        <button type="submit">Add Cruise</button>
      </form>
      <ul>
        {cruises.map((cruise) => (
          <li key={cruise._id}>{cruise.name} - {cruise.ship} - {cruise.date} - {cruise.duration} days - {cruise.points} points</li>
        ))}
      </ul>
    </div>
  );
}
