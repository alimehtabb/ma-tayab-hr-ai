// File: src/App.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          MA TAYAB HR AI Agent
        </h1>
        <p className="text-center text-gray-500 text-lg">
          Internal Performance Dashboard & AI Suggestions (Prototype)
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Departmental Task Summary</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Sales: Daily calls, market visits, lead conversion</li>
              <li>Accounts: Report generation, payment follow-ups</li>
              <li>IT: Design updates, system maintenance, flyers</li>
              <li>HR/Admin: Attendance, payroll, employee reporting</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Top Performers This Week</h2>
            <ul className="list-decimal ml-6 text-gray-700">
              <li>Kamrul Islam (Accounts)</li>
              <li>Mehtab Ali (HR/Admin)</li>
              <li>Nayem Hosen (IT/Field)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">AI Agent Suggestions</h2>
            <ul className="ml-6 text-gray-700 list-disc">
              <li>Promote daily task logging using mobile input</li>
              <li>Start points-based reward system (Gamification)</li>
              <li>Track ideas submitted per department</li>
            </ul>
            <Button className="mt-4" variant="outline">
              <Sparkles className="mr-2 h-4 w-4" /> Generate New Suggestion
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Live Department Health</h2>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div>Sales: 🔵 80%</div>
              <div>Accounts: 🟢 90%</div>
              <div>IT: 🟡 70%</div>
              <div>Admin: 🔴 50%</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
