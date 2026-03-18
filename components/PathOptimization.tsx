'use client';
export default function PathOptimization() {
  const paths = [
    { id: 'p1', from: 'Storage A', to: 'Picking', distance: 12.5, time: 18, optimized: true },
    { id: 'p2', from: 'Picking', to: 'Shipping', distance: 8.3, time: 12, optimized: true },
    { id: 'p3', from: 'Receiving', to: 'Storage B', distance: 15.2, time: 22, optimized: false },
    { id: 'p4', from: 'Storage B', to: 'Picking', distance: 10.1, time: 15, optimized: true },
  ];
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Path Optimization</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"><p className="text-sm text-gray-400">Avg Path Length</p><p className="text-3xl font-bold text-logi-400">11.5m</p></div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"><p className="text-sm text-gray-400">Avg Transit Time</p><p className="text-3xl font-bold text-blue-400">16.8s</p></div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"><p className="text-sm text-gray-400">Optimization Score</p><p className="text-3xl font-bold text-green-400">87%</p></div>
      </div>
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
        <h3 className="font-semibold text-sm mb-3">Active Routes</h3>
        <div className="space-y-2">
          {paths.map((p) => (
            <div key={p.id} className="flex items-center gap-4 p-3 bg-gray-800/30 rounded-lg">
              <div className="flex-1"><span className="text-logi-400">{p.from}</span><span className="text-gray-500 mx-2">-&gt;</span><span className="text-logi-400">{p.to}</span></div>
              <span className="text-xs text-gray-400">{p.distance}m</span>
              <span className="text-xs text-gray-400">{p.time}s</span>
              <span className={`text-xs px-2 py-0.5 rounded ${p.optimized ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                {p.optimized ? 'Optimized' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
