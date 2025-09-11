import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Data for charts
  const revenueData = [
    { year: '2021', HOOD: 95, SOFI: 80 },
    { year: '2022', HOOD: -25, SOFI: 50 },
    { year: '2023', HOOD: 40, SOFI: 30 },
    { year: '2024', HOOD: 60, SOFI: 25 },
    { year: 'LTM', HOOD: 65, SOFI: 20 }
  ];

  const dilutionData = [
    { year: '2022', HOOD: 75, SOFI: 70 },
    { year: '2023', HOOD: 5, SOFI: 8 },
    { year: '2024', HOOD: 3, SOFI: 10 },
    { year: 'LTM', HOOD: 2, SOFI: 12 }
  ];

  const ebitdaData = [
    { year: '2021', HOOD: -50, SOFI: 150 },
    { year: '2022', HOOD: -250, SOFI: 400 },
    { year: '2023', HOOD: 200, SOFI: 250 },
    { year: '2024', HOOD: 600, SOFI: 100 },
    { year: 'LTM', HOOD: 150, SOFI: 50 }
  ];

  const stockData = [
    { date: '2021-01', HOOD: 0, SOFI: 0 },
    { date: '2021-06', HOOD: 20, SOFI: 15 },
    { date: '2021-08', HOOD: 110, SOFI: 110 },
    { date: '2021-10', HOOD: 100, SOFI: 100 },
    { date: '2021-12', HOOD: 90, SOFI: 95 },
    { date: '2022-03', HOOD: 80, SOFI: 80 },
    { date: '2022-06', HOOD: 70, SOFI: 75 },
    { date: '2022-09', HOOD: -40, SOFI: -10 },
    { date: '2022-12', HOOD: -45, SOFI: -5 },
    { date: '2023-03', HOOD: -50, SOFI: 0 },
    { date: '2023-06', HOOD: -45, SOFI: 5 },
    { date: '2023-09', HOOD: -40, SOFI: 10 },
    { date: '2023-12', HOOD: -30, SOFI: 15 },
    { date: '2024-03', HOOD: -10, SOFI: 20 },
    { date: '2024-06', HOOD: 20, SOFI: 25 },
    { date: '2024-09', HOOD: 60, SOFI: 30 },
    { date: '2024-12', HOOD: 121, SOFI: 124 }
  ];

  const valuationData = [
    { date: 'Jan 2025', HOOD: 30, SOFI: 30 },
    { date: 'Mar 2025', HOOD: 35, SOFI: 32 },
    { date: 'May 2025', HOOD: 45, SOFI: 28 },
    { date: 'Jul 2025', HOOD: 40, SOFI: 25 },
    { date: 'Sep 2025', HOOD: 50, SOFI: 27 },
    { date: 'Now', HOOD: 80, SOFI: 38 }
  ];

  const balanceSheetData = [
    { year: '2021', HOOD: 45, SOFI: 85 },
    { year: '2022', HOOD: 25, SOFI: 100 },
    { year: '2023', HOOD: 50, SOFI: 95 },
    { year: '2024', HOOD: 95, SOFI: 45 },
    { year: 'LTM', HOOD: 110, SOFI: 45 }
  ];

  const marginsData = [
    { type: 'Gross margin', HOOD: 85, SOFI: 80 },
    { type: 'EBITDA margin', HOOD: 50, SOFI: 25 }
  ];

  const roeData = [
    { year: '2021', HOOD: -10, SOFI: -5 },
    { year: '2022', HOOD: -15, SOFI: -8 },
    { year: '2023', HOOD: -12, SOFI: -3 },
    { year: '2024', HOOD: 8, SOFI: 2 },
    { year: 'LTM', HOOD: 18, SOFI: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-4">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold">Robinhood</span>
          </div>
          <span className="text-4xl font-bold">vs</span>
          <div className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full grid grid-cols-3 gap-1 p-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-blue-500 rounded-full w-1 h-1"></div>
              ))}
            </div>
            <span className="text-xl font-bold">SoFi</span>
          </div>
        </div>
      </div>

      {/* Q2 2025 Badge */}
      <div className="flex justify-center mb-8">
        <div className="bg-black text-white px-4 py-2 rounded-full">Q2 2025</div>
      </div>

      {/* Top Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Growth */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Revenue growth</h3>
              <p className="text-sm text-gray-500">Growth rate in percentages</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Line type="monotone" dataKey="HOOD" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="SOFI" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">HOOD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">SOFI</span>
            </div>
          </div>
        </div>

        {/* Dilution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white transform rotate-45"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Dilution</h3>
              <p className="text-sm text-gray-500">Change in shares outstanding (in %)</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dilutionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Bar dataKey="HOOD" fill="#22c55e" />
              <Bar dataKey="SOFI" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">HOOD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">SOFI</span>
            </div>
          </div>
        </div>

        {/* Adj. EBITDA */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">€</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Adj. EBITDA</h3>
              <p className="text-sm text-gray-500">Growth rate in percentages</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={ebitdaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Line type="monotone" dataKey="HOOD" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="SOFI" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">HOOD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">SOFI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Stock Performance */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white transform rotate-12">
                <div className="w-full h-1 bg-gray-800 mt-1"></div>
                <div className="w-full h-1 bg-gray-800 mt-1"></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Stock</h3>
              <p className="text-sm text-gray-500">Since being public</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Line type="monotone" dataKey="HOOD" stroke="#22c55e" strokeWidth={2} />
              <Line type="monotone" dataKey="SOFI" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-600">HOOD goes public</div>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-bold">+124%</div>
                <div className="text-sm text-gray-500 mt-1">SOFI</div>
              </div>
              <div className="text-center">
                <div className="bg-green-500 text-white px-3 py-2 rounded-full text-sm font-bold">+121%</div>
                <div className="text-sm text-gray-500 mt-1">HOOD</div>
              </div>
            </div>
          </div>
        </div>

        {/* Valuation */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full border-2 border-gray-800"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Valuation</h3>
              <p className="text-sm text-gray-500">Price to free cash flow (forward looking)</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={valuationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Line type="monotone" dataKey="HOOD" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="SOFI" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-end gap-6 mt-4">
            <div className="text-center">
              <div className="bg-green-500 text-white px-3 py-2 rounded-full text-sm font-bold">80x</div>
              <div className="text-sm text-gray-500 mt-1">HOOD</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-bold">38x</div>
              <div className="text-sm text-gray-500 mt-1">SOFI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Balance Sheet */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">$</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Balance sheet</h3>
              <p className="text-sm text-gray-500">Debt to equity ratio (lower is better)</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={balanceSheetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Bar dataKey="HOOD" fill="#22c55e" />
              <Bar dataKey="SOFI" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">HOOD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">SOFI</span>
            </div>
          </div>
        </div>

        {/* Margins */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full">
                <div className="w-full h-2 bg-gray-800 rounded-t-full"></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Margins</h3>
              <p className="text-sm text-gray-500">Last twelve months</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={marginsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Bar dataKey="HOOD" fill="#22c55e" />
              <Bar dataKey="SOFI" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">HOOD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">SOFI</span>
            </div>
          </div>
        </div>

        {/* Return on Equity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white flex items-center justify-center">
                <span className="text-gray-800 font-bold text-xs">€</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Return on equity</h3>
              <p className="text-sm text-gray-500">In percentages</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={roeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Bar dataKey="HOOD" fill="#22c55e" />
              <Bar dataKey="SOFI" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">HOOD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">SOFI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t">
        <div className="flex justify-center items-center gap-4 mb-2">
          <div className="flex gap-2">
            <span>♥</span>
            <span>💬</span>
            <span>↗</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span>Not financial advice</span>
          <span>@INVESTINGVISUALS</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;