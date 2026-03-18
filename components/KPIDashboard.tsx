'use client';
import { useStore } from '@/lib/store';
import { TrendingUp, TrendingDown, Target } from 'lucide-react';

export default function KPIDashboard() {
  const { kpis } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">KPI Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        {kpis.map((kpi) => {
          const pct = (kpi.value / kpi.target) * 100;
          const positive = kpi.label.includes('Cost') || kpi.label.includes('Time') ? kpi.change < 0 : kpi.change > 0;
          return (
            <div key={kpi.label} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">{kpi.label}</span>
                <div className={`flex items-center gap-1 text-xs ${positive ? 'text-green-400' : 'text-red-400'}`}>
                  {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {kpi.change > 0 ? '+' : ''}{kpi.change}{kpi.unit === '%' ? 'pp' : kpi.unit}
                </div>
              </div>
              <p className="text-3xl font-bold">{kpi.value}<span className="text-sm text-gray-500 ml-1">{kpi.unit}</span></p>
              <div className="mt-3 flex items-center gap-2">
                <Target size={12} className="text-gray-500" />
                <span className="text-xs text-gray-500">Target: {kpi.target}{kpi.unit}</span>
              </div>
              <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${pct >= 90 ? 'bg-green-500' : pct >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${Math.min(100, pct)}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
