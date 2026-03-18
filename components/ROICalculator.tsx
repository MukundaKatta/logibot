'use client';
import { useState } from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [robots, setRobots] = useState(6);
  const [costPerRobot, setCostPerRobot] = useState(25000);
  const [laborSaved, setLaborSaved] = useState(4);
  const [laborCost, setLaborCost] = useState(45000);
  const [efficiencyGain, setEfficiencyGain] = useState(35);

  const totalInvestment = robots * costPerRobot;
  const annualSavings = laborSaved * laborCost + (efficiencyGain / 100) * laborSaved * laborCost;
  const paybackMonths = Math.round((totalInvestment / annualSavings) * 12);
  const threeYearROI = ((annualSavings * 3 - totalInvestment) / totalInvestment * 100);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">ROI Calculator</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-5">
          <h3 className="font-semibold">Input Parameters</h3>
          {[
            { label: 'Number of Robots', value: robots, set: setRobots, min: 1, max: 50, step: 1 },
            { label: 'Cost per Robot ($)', value: costPerRobot, set: setCostPerRobot, min: 10000, max: 100000, step: 5000 },
            { label: 'FTEs Replaced', value: laborSaved, set: setLaborSaved, min: 1, max: 20, step: 1 },
            { label: 'Annual Labor Cost ($)', value: laborCost, set: setLaborCost, min: 30000, max: 80000, step: 5000 },
            { label: 'Efficiency Gain (%)', value: efficiencyGain, set: setEfficiencyGain, min: 10, max: 80, step: 5 },
          ].map((p) => (
            <div key={p.label}>
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">{p.label}</span><span className="font-mono text-logi-400">{p.value.toLocaleString()}</span></div>
              <input type="range" min={p.min} max={p.max} step={p.step} value={p.value}
                onChange={(e) => p.set(Number(e.target.value))} className="w-full accent-logi-500" />
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <DollarSign size={18} className="text-logi-400 mb-2" />
              <p className="text-2xl font-bold">${totalInvestment.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Total Investment</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <TrendingUp size={18} className="text-green-400 mb-2" />
              <p className="text-2xl font-bold text-green-400">${annualSavings.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Annual Savings</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <Calculator size={18} className="text-blue-400 mb-2" />
              <p className="text-2xl font-bold text-blue-400">{paybackMonths} mo</p>
              <p className="text-xs text-gray-500">Payback Period</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <TrendingUp size={18} className="text-logi-400 mb-2" />
              <p className="text-2xl font-bold text-logi-400">{threeYearROI.toFixed(0)}%</p>
              <p className="text-xs text-gray-500">3-Year ROI</p>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-3">Projected Savings (3 Years)</h3>
            <div className="h-40 flex items-end gap-2">
              {[1, 2, 3].map((year) => {
                const cumSavings = annualSavings * year;
                const net = cumSavings - totalInvestment;
                const maxH = annualSavings * 3;
                return (
                  <div key={year} className="flex-1 text-center">
                    <div className="relative" style={{ height: 120 }}>
                      <div className="absolute bottom-0 w-full bg-logi-500/30 rounded-t" style={{ height: `${(cumSavings / maxH) * 100}%` }} />
                      <div className="absolute bottom-0 left-1/4 w-1/2 bg-red-500/30 rounded-t" style={{ height: `${(totalInvestment / maxH) * 100}%` }} />
                    </div>
                    <p className="text-xs mt-2">Year {year}</p>
                    <p className={`text-xs font-bold ${net > 0 ? 'text-green-400' : 'text-red-400'}`}>{net > 0 ? '+' : ''}${(net / 1000).toFixed(0)}k</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
