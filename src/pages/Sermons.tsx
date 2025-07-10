import React from 'react';

const dummySermons = [
  {
    title: 'The Power of Faith',
    speaker: 'Pastor Michael Johnson',
    date: '2024-06-09',
    audioUrl: '#',
    duration: '32:15',
  },
  {
    title: 'Hope in Uncertain Times',
    speaker: 'Pastor Sarah Williams',
    date: '2024-06-02',
    audioUrl: '#',
    duration: '28:47',
  },
  {
    title: 'Walking in Love',
    speaker: 'Pastor David Chen',
    date: '2024-05-26',
    audioUrl: '#',
    duration: '35:10',
  },
];

const Sermons = () => {
  return (
    <section className="py-16 bg-background min-h-[60vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Sermons</h1>
        <div className="max-w-2xl mx-auto space-y-6">
          {dummySermons.map((sermon, idx) => (
            <div key={idx} className="rounded-lg bg-white shadow soteria-card-gradient p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-primary mb-1">{sermon.title}</h2>
                <p className="text-muted-foreground text-sm mb-1">{sermon.speaker} &bull; {sermon.date}</p>
                <span className="inline-block text-xs text-soteria-goldenYellow font-medium">Duration: {sermon.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-soteria-royalBlue text-white px-4 py-2 rounded hover:bg-soteria-skyBlue transition">Play</button>
                <button className="bg-soteria-goldenYellow text-soteria-textDark px-4 py-2 rounded hover:bg-soteria-goldenYellow/90 transition">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sermons; 