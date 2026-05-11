'use client';

import { useMemo, useState } from 'react';

const emptySubject = () => ({
  name: '',
  teacher: '',
  room: '',
  weeklyClasses: 1,
});

function buildTimetable(days, periods, subjects) {
  const dayLabels = Array.from({ length: days }, (_, i) => `Day ${i + 1}`);
  const grid = dayLabels.map((day) => ({
    day,
    slots: Array.from({ length: periods }, () => null),
  }));

  const classPool = subjects.flatMap((subject) => {
    const repeats = Number(subject.weeklyClasses) || 0;
    return Array.from({ length: Math.max(0, repeats) }, () => subject);
  });

  if (!classPool.length) {
    return grid;
  }

  let cursor = 0;
  for (let d = 0; d < days; d += 1) {
    for (let p = 0; p < periods; p += 1) {
      grid[d].slots[p] = classPool[cursor % classPool.length];
      cursor += 1;
    }
  }

  return grid;
}

export default function Home() {
  const [days, setDays] = useState(5);
  const [periods, setPeriods] = useState(6);
  const [subjects, setSubjects] = useState([
    { name: 'Math', teacher: 'Mr. Das', room: 'A-1', weeklyClasses: 5 },
    { name: 'Science', teacher: 'Ms. Roy', room: 'B-2', weeklyClasses: 4 },
    { name: 'English', teacher: 'Mrs. Sen', room: 'C-3', weeklyClasses: 4 },
  ]);

  const timetable = useMemo(() => buildTimetable(days, periods, subjects), [days, periods, subjects]);

  const updateSubject = (index, field, value) => {
    setSubjects((prev) =>
      prev.map((subject, i) =>
        i === index
          ? {
              ...subject,
              [field]: field === 'weeklyClasses' ? Math.max(0, Number(value) || 0) : value,
            }
          : subject,
      ),
    );
  };

  const addSubject = () => setSubjects((prev) => [...prev, emptySubject()]);
  const removeSubject = (index) => setSubjects((prev) => prev.filter((_, i) => i !== index));

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-2 text-3xl font-bold">Dynamic Timetable Generator</h1>
      <p className="mb-6 text-sm text-slate-600">No AI calls. Timetable is generated deterministically from your inputs.</p>

      <section className="mb-8 rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Configuration</h2>
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm font-medium">
            Number of days
            <input
              type="number"
              min="1"
              max="7"
              value={days}
              onChange={(e) => setDays(Math.max(1, Number(e.target.value) || 1))}
              className="rounded border p-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium">
            Periods per day
            <input
              type="number"
              min="1"
              max="12"
              value={periods}
              onChange={(e) => setPeriods(Math.max(1, Number(e.target.value) || 1))}
              className="rounded border p-2"
            />
          </label>
        </div>

        <h3 className="mb-3 text-lg font-semibold">Subjects</h3>
        <div className="space-y-3">
          {subjects.map((subject, index) => (
            <div key={`subject-${index}`} className="grid gap-2 rounded border p-3 md:grid-cols-5">
              <input
                type="text"
                placeholder="Subject"
                value={subject.name}
                onChange={(e) => updateSubject(index, 'name', e.target.value)}
                className="rounded border p-2"
              />
              <input
                type="text"
                placeholder="Teacher"
                value={subject.teacher}
                onChange={(e) => updateSubject(index, 'teacher', e.target.value)}
                className="rounded border p-2"
              />
              <input
                type="text"
                placeholder="Room"
                value={subject.room}
                onChange={(e) => updateSubject(index, 'room', e.target.value)}
                className="rounded border p-2"
              />
              <input
                type="number"
                min="0"
                placeholder="Classes/week"
                value={subject.weeklyClasses}
                onChange={(e) => updateSubject(index, 'weeklyClasses', e.target.value)}
                className="rounded border p-2"
              />
              <button
                type="button"
                onClick={() => removeSubject(index)}
                className="rounded border border-red-300 bg-red-50 px-3 py-2 text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button type="button" onClick={addSubject} className="mt-4 rounded bg-slate-900 px-4 py-2 text-white">
          Add subject
        </button>
      </section>

      <section className="overflow-x-auto rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Generated Timetable</h2>
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border bg-slate-100 p-2">Day</th>
              {Array.from({ length: periods }, (_, i) => (
                <th key={`period-${i}`} className="border bg-slate-100 p-2">
                  Period {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetable.map((row) => (
              <tr key={row.day}>
                <td className="border p-2 font-semibold">{row.day}</td>
                {row.slots.map((slot, idx) => (
                  <td key={`${row.day}-slot-${idx}`} className="border p-2 align-top">
                    {slot ? (
                      <div>
                        <div className="font-semibold">{slot.name || 'Untitled Subject'}</div>
                        <div className="text-xs text-slate-600">{slot.teacher || 'No teacher'} • {slot.room || 'No room'}</div>
                      </div>
                    ) : (
                      <span className="text-slate-400">Free</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
