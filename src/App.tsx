# Magnolia-OS Inspired CRE AI Agent Frontend

This commit introduces the full Magnolia-style executive UI for the **Commercial Real Estate AI Agent Framework**, built with React, TypeScript, TailwindCSS, Framer Motion, and shadcn/ui.

## Features
- Magnolia-OS institutional visual language (navy, brass, and slate)
- Modular layout: Sidebar, Executive Header, KPI Cards, Insights Panel, and Activity Feed
- TailwindCSS custom tokens for brass and slate palette
- Inter, Newsreader, and JetBrains Mono typography
- Responsive 12-column layout
- Shadcn UI components and Radix primitives integrated
- Framer Motion transitions

To initialize the frontend:

```bash
npm create vite@latest cre-dashboard -- --template react-ts
cd cre-dashboard
npm install tailwindcss postcss autoprefixer @radix-ui/react-icons framer-motion lucide-react @tanstack/react-query recharts
npx tailwindcss init -p
```

Replace the contents of `src/App.tsx` with the Magnolia UI code below and configure Tailwind per provided config.

---

### `/src/App.tsx`
```tsx
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Bell, Building2, MessageSquare, Settings, BarChart3, Home, Zap } from 'lucide-react'

export default function MagnoliaCRE() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-inter flex">
      <aside className="w-80 bg-gradient-to-b from-slate-900 to-slate-950 border-r border-slate-700 flex flex-col">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-700">
          <Zap className="w-6 h-6 text-[#D4A574]" />
          <h1 className="font-newsreader text-2xl">Magnolia CRE</h1>
        </div>
        <nav className="flex-1 px-4 space-y-3 mt-6">
          {[
            { name: 'Portfolio', icon: Building2 },
            { name: 'Analytics', icon: BarChart3 },
            { name: 'AI Strategist', icon: Zap },
            { name: 'Reports', icon: MessageSquare },
            { name: 'Settings', icon: Settings },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition-all border-l-4 border-transparent hover:border-[#D4A574]">
              <item.icon className="w-5 h-5 text-slate-300" />
              <span className="text-slate-200 font-medium">{item.name}</span>
            </div>
          ))}
        </nav>
        <div className="border-t border-slate-700 p-4 text-slate-500 text-sm">v1.0 • Compliance Verified</div>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="h-20 bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-b border-[#D4A574] flex items-center justify-between px-8">
          <Input placeholder="Search or run command (⌘K)" className="w-1/3 bg-slate-800 border-slate-700 placeholder-slate-400" />
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 bg-[#10B981] rounded-full"></span>
              Market Open
            </div>
            <Button variant="ghost"><Bell className="w-5 h-5 text-slate-300" /></Button>
            <div className="w-10 h-10 rounded-full bg-slate-600"></div>
          </div>
        </header>
        <div className="flex-1 p-8 grid grid-cols-12 gap-8 max-w-[1600px] mx-auto">
          {[
            { label: 'Assets Managed', value: '$842M', icon: Building2 },
            { label: 'Active Deals', value: '56', icon: BarChart3 },
            { label: 'Avg Yield', value: '7.2%', icon: Zap },
            { label: 'Pipeline Volume', value: '$129M', icon: Home },
          ].map((kpi) => (
            <Card key={kpi.label} className="col-span-3 rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">{kpi.label}</p>
                  <p className="text-2xl font-semibold text-[#D4A574] mt-1 font-jetbrains">{kpi.value}</p>
                </div>
                <kpi.icon className="w-8 h-8 text-slate-500" />
              </CardContent>
            </Card>
          ))}
          <Card className="col-span-8 rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 font-newsreader">AI Market Insights</h2>
              <p className="text-slate-400 leading-relaxed">CRE AI agents detected increased institutional acquisitions in Sunbelt metros and elevated refinancing activity among mid-tier REITs. Cap rates expected to compress further in Q1.</p>
            </CardContent>
          </Card>
          <Card className="col-span-4 rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 font-newsreader">Recent Activity</h2>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>• AI Strategist executed site analysis for Austin MHP deal.</li>
                <li>• Portfolio metrics updated (NAV +1.2%).</li>
                <li>• New industrial acquisition added to pipeline.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
```

### `/tailwind.config.js`
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brass: '#D4A574',
        navy: '#0F172A',
        slate: { 700: '#334155', 800: '#1E293B', 900: '#0F172A' }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        newsreader: ['Newsreader', 'serif'],
        jetbrains: ['JetBrains Mono', 'monospace']
      }
    }
  }
}
```

Commit message:

> feat: implement Magnolia-style executive UI for Commercial Real Estate AI Agent Framework
