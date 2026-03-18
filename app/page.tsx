'use client';

import { useEffect } from 'react';
import { useStore } from '@/lib/store';
import { mockZones, mockRobots, mockOrders, mockShifts, mockKpis } from '@/lib/mock-data';
import { Warehouse, Package, Route, Flame, Calendar, BarChart3, Calculator, ChevronRight } from 'lucide-react';
import WarehouseMap from '@/components/WarehouseMap';
import OrderTracker from '@/components/OrderTracker';
import PathOptimization from '@/components/PathOptimization';
import HeatMap from '@/components/HeatMap';
import ShiftScheduling from '@/components/ShiftScheduling';
import KPIDashboard from '@/components/KPIDashboard';
import ROICalculator from '@/components/ROICalculator';
import TaskAssignment from '@/components/TaskAssignment';

const tabs = [
  { id: 'warehouse', label: 'Warehouse Map', icon: Warehouse },
  { id: 'tasks', label: 'Task Assignment', icon: Package },
  { id: 'orders', label: 'Order Fulfillment', icon: Package },
  { id: 'paths', label: 'Path Optimization', icon: Route },
  { id: 'heatmap', label: 'Heat Map', icon: Flame },
  { id: 'shifts', label: 'Shift Scheduling', icon: Calendar },
  { id: 'kpi', label: 'KPI Dashboard', icon: BarChart3 },
  { id: 'roi', label: 'ROI Calculator', icon: Calculator },
];

export default function HomePage() {
  const { activeTab, setActiveTab, setZones, setRobots, setOrders, setShifts, setKpis } = useStore();

  useEffect(() => {
    setZones(mockZones); setRobots(mockRobots); setOrders(mockOrders);
    setShifts(mockShifts); setKpis(mockKpis);
  }, [setZones, setRobots, setOrders, setShifts, setKpis]);

  const renderContent = () => {
    switch (activeTab) {
      case 'warehouse': return <WarehouseMap />;
      case 'tasks': return <TaskAssignment />;
      case 'orders': return <OrderTracker />;
      case 'paths': return <PathOptimization />;
      case 'heatmap': return <HeatMap />;
      case 'shifts': return <ShiftScheduling />;
      case 'kpi': return <KPIDashboard />;
      case 'roi': return <ROICalculator />;
      default: return <WarehouseMap />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-56 bg-gray-900/50 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold bg-gradient-to-r from-logi-400 to-logi-600 bg-clip-text text-transparent">LogiBot</h1>
          <p className="text-xs text-gray-500">Warehouse Logistics</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${
                  activeTab === t.id ? 'bg-logi-500/20 text-logi-400 border border-logi-500/30' : 'text-gray-400 hover:bg-gray-800/50'
                }`}><Icon size={14} /><span className="flex-1 text-left">{t.label}</span>
                {activeTab === t.id && <ChevronRight size={12} />}</button>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-6">{renderContent()}</main>
    </div>
  );
}
