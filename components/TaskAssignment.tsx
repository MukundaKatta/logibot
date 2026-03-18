'use client';
import { useStore } from '@/lib/store';
import { Bot, Package } from 'lucide-react';

export default function TaskAssignment() {
  const { robots, orders } = useStore();
  const pending = orders.filter((o) => !o.assignedRobot);
  const idle = robots.filter((r) => r.status === 'idle');

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Task Assignment</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
          <h3 className="font-semibold text-sm mb-3">Unassigned Orders ({pending.length})</h3>
          <div className="space-y-2">
            {pending.map((o) => (
              <div key={o.id} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                <Package size={16} className="text-logi-400" />
                <div className="flex-1"><p className="text-sm font-medium">Order #{o.id}</p><p className="text-xs text-gray-500">{o.items.length} items | {o.priority}</p></div>
                <button className="px-3 py-1 bg-logi-500/20 text-logi-400 rounded text-xs">Assign</button>
              </div>
            ))}
            {pending.length === 0 && <p className="text-sm text-gray-500 text-center py-4">All orders assigned</p>}
          </div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
          <h3 className="font-semibold text-sm mb-3">Available Robots ({idle.length})</h3>
          <div className="space-y-2">
            {robots.map((r) => (
              <div key={r.id} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                <Bot size={16} className={r.status === 'active' ? 'text-green-400' : r.status === 'idle' ? 'text-yellow-400' : 'text-gray-400'} />
                <div className="flex-1"><p className="text-sm font-medium">{r.name}</p><p className="text-xs text-gray-500">{r.status} | Battery: {r.battery}%</p></div>
                {r.currentTask && <span className="text-xs text-gray-400">{r.currentTask}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
