'use client';
import { useStore } from '@/lib/store';
import { Calendar, Clock, Bot, User } from 'lucide-react';

export default function ShiftScheduling() {
  const { shifts, robots } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Shift Scheduling</h2>
      <div className="space-y-4">
        {shifts.map((shift) => (
          <div key={shift.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{shift.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400"><Clock size={14} />{shift.start} - {shift.end}</div>
            </div>
            <div className="flex items-center gap-2 mb-3 text-sm"><User size={14} className="text-logi-400" /><span>Supervisor: {shift.supervisor}</span></div>
            <div className="flex gap-2">
              {shift.robots.map((rid) => {
                const r = robots.find((rb) => rb.id === rid);
                return <span key={rid} className="px-3 py-1.5 bg-logi-500/10 text-logi-400 rounded-lg text-xs flex items-center gap-1"><Bot size={12} />{r?.name || rid}</span>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
