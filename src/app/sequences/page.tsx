// src/app/sequences/page.tsx
export default function SequencesPage() {
  const sequences = [
    {
      id: '1',
      title: 'Morning Energizer',
      duration: '30 min',
      tags: ['Beginner', 'Energizing'],
      lastUsed: 'Apr 28, 2025'
    },
    {
      id: '2',
      title: 'Evening Wind-down',
      duration: '45 min',
      tags: ['Relaxing', 'All levels'],
      lastUsed: 'Apr 25, 2025'
    },
    {
      id: '3',
      title: 'Ashtanga Flow',
      duration: '75 min',
      tags: ['Intermediate', 'Energizing'],
      lastUsed: 'Apr 22, 2025'
    }
  ];

  return (
    <main>
      <header>
        <h1>Your Sequences</h1>
        <p>Manage and reuse your class flows.</p>
      </header>
      <section>
        <ul>
          {sequences.map((seq) => (
            <li key={seq.id}>
              <article>
                <h2>{seq.title}</h2>
                <p>Duration: {seq.duration}</p>
                <p>Last used: {seq.lastUsed}</p>
                <p>Tags: {seq.tags.join(', ')}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
