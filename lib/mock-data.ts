import { WarehouseZone, LogiRobot, Order, Shift, KPI } from './store';

export const mockZones: WarehouseZone[] = [
  { id: 'z1', name: 'Storage A', type: 'storage', x: 0, y: 0, w: 4, h: 6, utilization: 78 },
  { id: 'z2', name: 'Storage B', type: 'storage', x: 4, y: 0, w: 4, h: 6, utilization: 65 },
  { id: 'z3', name: 'Picking', type: 'picking', x: 8, y: 0, w: 3, h: 4, utilization: 82 },
  { id: 'z4', name: 'Shipping', type: 'shipping', x: 8, y: 4, w: 3, h: 2, utilization: 55 },
  { id: 'z5', name: 'Receiving', type: 'receiving', x: 0, y: 6, w: 4, h: 2, utilization: 40 },
  { id: 'z6', name: 'Charging Bay', type: 'charging', x: 4, y: 6, w: 2, h: 2, utilization: 30 },
];

export const mockRobots: LogiRobot[] = [
  { id: 'lr1', name: 'Logi-01', status: 'active', battery: 82, currentTask: 'Picking Order #1234', position: { x: 9, y: 2 }, ordersCompleted: 156 },
  { id: 'lr2', name: 'Logi-02', status: 'active', battery: 65, currentTask: 'Transport to Shipping', position: { x: 6, y: 3 }, ordersCompleted: 143 },
  { id: 'lr3', name: 'Logi-03', status: 'charging', battery: 22, currentTask: null, position: { x: 5, y: 7 }, ordersCompleted: 201 },
  { id: 'lr4', name: 'Logi-04', status: 'active', battery: 91, currentTask: 'Picking Order #1237', position: { x: 2, y: 4 }, ordersCompleted: 178 },
  { id: 'lr5', name: 'Logi-05', status: 'idle', battery: 100, currentTask: null, position: { x: 5, y: 7 }, ordersCompleted: 120 },
  { id: 'lr6', name: 'Logi-06', status: 'error', battery: 55, currentTask: null, position: { x: 3, y: 1 }, ordersCompleted: 89 },
];

export const mockOrders: Order[] = [
  { id: 'ord1', items: ['Widget A', 'Widget B', 'Widget C'], status: 'picking', assignedRobot: 'lr1', priority: 'express', created_at: '2024-04-01T08:00:00Z' },
  { id: 'ord2', items: ['Gadget X'], status: 'packed', assignedRobot: 'lr2', priority: 'normal', created_at: '2024-04-01T07:30:00Z' },
  { id: 'ord3', items: ['Part 1', 'Part 2', 'Part 3', 'Part 4'], status: 'pending', assignedRobot: null, priority: 'urgent', created_at: '2024-04-01T09:00:00Z' },
  { id: 'ord4', items: ['Module Z'], status: 'picking', assignedRobot: 'lr4', priority: 'normal', created_at: '2024-04-01T08:45:00Z' },
  { id: 'ord5', items: ['Widget A', 'Gadget X'], status: 'shipped', assignedRobot: null, priority: 'normal', created_at: '2024-04-01T06:00:00Z' },
  { id: 'ord6', items: ['Part 5', 'Part 6'], status: 'pending', assignedRobot: null, priority: 'express', created_at: '2024-04-01T09:15:00Z' },
];

export const mockShifts: Shift[] = [
  { id: 'sh1', name: 'Morning Shift', start: '06:00', end: '14:00', robots: ['lr1', 'lr2', 'lr3'], supervisor: 'Alex K.' },
  { id: 'sh2', name: 'Afternoon Shift', start: '14:00', end: '22:00', robots: ['lr4', 'lr5', 'lr6'], supervisor: 'Jordan M.' },
  { id: 'sh3', name: 'Night Shift', start: '22:00', end: '06:00', robots: ['lr1', 'lr4'], supervisor: 'Sam P.' },
];

export const mockKpis: KPI[] = [
  { label: 'Orders/Hour', value: 42, unit: 'orders', change: 8, target: 50 },
  { label: 'Avg Pick Time', value: 45, unit: 'sec', change: -5, target: 40 },
  { label: 'Fleet Utilization', value: 78, unit: '%', change: 3, target: 85 },
  { label: 'Order Accuracy', value: 99.2, unit: '%', change: 0.1, target: 99.5 },
  { label: 'On-Time Delivery', value: 94, unit: '%', change: 2, target: 98 },
  { label: 'Cost per Order', value: 2.45, unit: '$', change: -0.15, target: 2.00 },
];
