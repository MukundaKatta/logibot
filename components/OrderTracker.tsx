'use client';
import { useStore } from '@/lib/store';
import { Package, Clock, CheckCircle, Truck } from 'lucide-react';

const statusConfig: Record<string, { color: string; icon: any }> = {
  pending: { color: 'text-yellow-400', icon: Clock }, picking: { color: 'text-blue-400', icon: Package },
  packed: { color: 'text-purple-400', icon: CheckCircle }, shipped: { color: 'text-green-400', icon: Truck },
};
const prioColors: Record<string, string> = { normal: 'text-gray-400 bg-gray-500/10', express: 'text-logi-400 bg-logi-500/10', urgent: 'text-red-400 bg-red-500/10' };

export default function OrderTracker() {
  const { orders, robots } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Order Fulfillment Tracker</h2>
      <div className="grid grid-cols-4 gap-4">
        {['pending', 'picking', 'packed', 'shipped'].map((s) => (
          <div key={s} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-400 capitalize">{s}</p>
            <p className="text-3xl font-bold">{orders.filter((o) => o.status === s).length}</p>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {orders.map((o) => {
          const config = statusConfig[o.status];
          const Icon = config.icon;
          const robot = robots.find((r) => r.id === o.assignedRobot);
          return (
            <div key={o.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon size={18} className={config.color} />
                  <div>
                    <p className="font-semibold text-sm">Order #{o.id}</p>
                    <p className="text-xs text-gray-500">{o.items.join(', ')} | Robot: {robot?.name || 'Unassigned'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded ${prioColors[o.priority]}`}>{o.priority}</span>
                  <span className={`text-xs capitalize ${config.color}`}>{o.status}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
