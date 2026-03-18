import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'LogiBot - Warehouse Logistics Robot Management', description: 'Warehouse logistics automation and robot management' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className="dark"><body className="min-h-screen bg-[#080510] text-gray-100 antialiased">{children}</body></html>);
}
