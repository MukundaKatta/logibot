'use client';
export default function HeatMap() {
  const grid = Array.from({ length: 8 }, () => Array.from({ length: 11 }, () => Math.random()));
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Activity Heat Map</h2>
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(11, 1fr)` }}>
          {grid.flat().map((v, i) => {
            const r = Math.floor(v * 255); const b = Math.floor((1 - v) * 255);
            return <div key={i} className="aspect-square rounded" style={{ backgroundColor: `rgba(${r}, ${Math.floor(v * 100)}, ${b}, 0.7)` }} />;
          })}
        </div>
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <span>Low Activity</span><span>High Activity</span>
        </div>
      </div>
    </div>
  );
}
