'use client';

import { useStore } from '@/lib/store';

const zoneColors: Record<string, string> = { storage: '#8b5cf6', picking: '#f59e0b', shipping: '#22c55e', receiving: '#3b82f6', charging: '#ef4444' };
const statusColors: Record<string, string> = { active: '#22c55e', idle: '#eab308', charging: '#3b82f6', error: '#ef4444' };

export default function WarehouseMap() {
  const { zones, robots } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Warehouse Map</h2>
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
        <div className="relative" style={{ height: 500 }}>
          <svg className="w-full h-full" viewBox="-0.5 -0.5 12 9">
            {zones.map((z) => (
              <g key={z.id}>
                <rect x={z.x} y={z.y} width={z.w} height={z.h} fill={zoneColors[z.type] + '20'} stroke={zoneColors[z.type]} strokeWidth={0.04} rx={0.1} />
                <text x={z.x + z.w / 2} y={z.y + 0.5} textAnchor="middle" fill={zoneColors[z.type]} fontSize={0.35} fontWeight="bold">{z.name}</text>
                <text x={z.x + z.w / 2} y={z.y + 1} textAnchor="middle" fill="#888" fontSize={0.25}>{z.utilization}% utilized</text>
              </g>
            ))}
            {robots.map((r) => (
              <g key={r.id}>
                <circle cx={r.position.x} cy={r.position.y} r={0.25} fill={statusColors[r.status]} opacity={0.8} />
                <circle cx={r.position.x} cy={r.position.y} r={0.35} fill="none" stroke={statusColors[r.status]} strokeWidth={0.03} opacity={0.4} />
                <text x={r.position.x} y={r.position.y + 0.6} textAnchor="middle" fill="#ccc" fontSize={0.22}>{r.name}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
      <div className="flex gap-4">
        {Object.entries(zoneColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-2 text-xs"><div className="w-3 h-3 rounded" style={{ backgroundColor: color }} /><span className="capitalize text-gray-400">{type}</span></div>
        ))}
      </div>
    </div>
  );
}
