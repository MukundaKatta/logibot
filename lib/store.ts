import { create } from 'zustand';

export interface WarehouseZone { id: string; name: string; type: 'storage' | 'picking' | 'shipping' | 'receiving' | 'charging'; x: number; y: number; w: number; h: number; utilization: number; }
export interface LogiRobot { id: string; name: string; status: 'active' | 'idle' | 'charging' | 'error'; battery: number; currentTask: string | null; position: { x: number; y: number }; ordersCompleted: number; }
export interface Order { id: string; items: string[]; status: 'pending' | 'picking' | 'packed' | 'shipped'; assignedRobot: string | null; priority: 'normal' | 'express' | 'urgent'; created_at: string; }
export interface Shift { id: string; name: string; start: string; end: string; robots: string[]; supervisor: string; }
export interface KPI { label: string; value: number; unit: string; change: number; target: number; }

interface LogiBotState {
  activeTab: string;
  zones: WarehouseZone[];
  robots: LogiRobot[];
  orders: Order[];
  shifts: Shift[];
  kpis: KPI[];
  setActiveTab: (t: string) => void;
  setZones: (z: WarehouseZone[]) => void;
  setRobots: (r: LogiRobot[]) => void;
  setOrders: (o: Order[]) => void;
  setShifts: (s: Shift[]) => void;
  setKpis: (k: KPI[]) => void;
}

export const useStore = create<LogiBotState>((set) => ({
  activeTab: 'warehouse', zones: [], robots: [], orders: [], shifts: [], kpis: [],
  setActiveTab: (tab) => set({ activeTab: tab }),
  setZones: (zones) => set({ zones }),
  setRobots: (robots) => set({ robots }),
  setOrders: (orders) => set({ orders }),
  setShifts: (shifts) => set({ shifts }),
  setKpis: (kpis) => set({ kpis }),
}));
