# LogiBot

> AI-powered warehouse logistics platform with interactive maps, path optimization, heat maps, and KPI dashboards.

## Features

- **Warehouse Map** -- Interactive 2D warehouse layout with zone visualization and robot positioning
- **Task Assignment** -- AI-optimized task allocation for warehouse robots with priority management
- **Order Fulfillment** -- Real-time order tracking through picking, packing, and shipping stages
- **Path Optimization** -- AI-computed optimal routes for warehouse robots with collision avoidance
- **Heat Map** -- D3-powered activity density visualization showing warehouse hotspots
- **Shift Scheduling** -- Manage robot and operator shifts with calendar-based scheduling
- **KPI Dashboard** -- Track throughput, accuracy, utilization, and efficiency metrics with charts
- **ROI Calculator** -- Estimate return on investment for warehouse automation

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Framework | Next.js 14 (App Router)             |
| Language  | TypeScript                          |
| UI        | Tailwind CSS, Lucide React          |
| Charts    | Recharts                            |
| Maps      | D3.js                               |
| State     | Zustand                             |
| Backend   | Supabase (Database)                 |

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
logibot/
├── app/
│   └── page.tsx              # Main app with tab-based navigation
├── components/
│   ├── WarehouseMap.tsx       # Interactive warehouse map
│   ├── TaskAssignment.tsx     # Task allocation
│   ├── OrderTracker.tsx       # Order fulfillment tracking
│   ├── PathOptimization.tsx   # Route optimization
│   ├── HeatMap.tsx            # Activity heat map
│   ├── ShiftScheduling.tsx    # Shift management
│   ├── KPIDashboard.tsx       # KPI metrics
│   └── ROICalculator.tsx      # ROI estimator
├── lib/
│   ├── store.ts               # Zustand store
│   └── mock-data.ts           # Mock warehouse data
└── package.json
```

