"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock match data
const matches = {
  upcoming: [
    {
      id: 1,
      opponent: "Mumbai Indians",
      date: "April 12, 2025",
      time: "7:30 PM IST",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      isHome: true,
      opponentLogo: "/mi-logo.png",
    },
    {
      id: 2,
      opponent: "Chennai Super Kings",
      date: "April 16, 2025",
      time: "7:30 PM IST",
      venue: "M.A. Chidambaram Stadium, Chennai",
      isHome: false,
      opponentLogo: "/csk-logo.png",
    },
    {
      id: 3,
      opponent: "Kolkata Knight Riders",
      date: "April 20, 2025",
      time: "3:30 PM IST",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      isHome: true,
      opponentLogo: "/kkr-logo.png",
    },
    {
      id: 4,
      opponent: "Rajasthan Royals",
      date: "April 24, 2025",
      time: "7:30 PM IST",
      venue: "Sawai Mansingh Stadium, Jaipur",
      isHome: false,
      opponentLogo: "/rr-logo.png",
    },
    {
      id: 5,
      opponent: "Delhi Capitals",
      date: "April 28, 2025",
      time: "7:30 PM IST",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      isHome: true,
      opponentLogo: "/dc-logo.png",
    },
  ],
  completed: [
    {
      id: 101,
      opponent: "Punjab Kings",
      date: "April 2, 2025",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      result: "Won by 42 runs",
      rcbScore: "203/5",
      opponentScore: "161/9",
      isHome: true,
      opponentLogo: "/pbks-logo.png",
      playerOfMatch: "Virat Kohli",
    },
    {
      id: 102,
      opponent: "Sunrisers Hyderabad",
      date: "April 6, 2025",
      venue: "Rajiv Gandhi International Stadium, Hyderabad",
      result: "Lost by 5 wickets",
      rcbScore: "176/8",
      opponentScore: "177/5",
      isHome: false,
      opponentLogo: "/srh-logo.png",
      playerOfMatch: "Heinrich Klaasen",
    },
    {
      id: 103,
      opponent: "Gujarat Titans",
      date: "April 10, 2025",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      result: "Won by 8 wickets",
      rcbScore: "182/2",
      opponentScore: "178/6",
      isHome: true,
      opponentLogo: "/gt-logo.png",
      playerOfMatch: "Glenn Maxwell",
    },
  ],
}

const Matches = () => {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null)

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">RCB Matches - IPL 2025</h1>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
          <TabsTrigger value="completed">Completed Matches</TabsTrigger>
        </TabsList>

        {/* Upcoming Matches */}
        <TabsContent value="upcoming" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.upcoming.map((match) => (
              <Card key={match.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-[#E30B5D] text-white text-xs font-bold px-2 py-1 rounded">
                          {match.isHome ? "HOME" : "AWAY"}
                        </div>
                        <div className="text-sm text-muted-foreground">Match #{match.id}</div>
                      </div>
                      <div className="text-sm font-medium">{match.date}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-center">
                        <img src="/rcb-logo.png" alt="RCB" className="h-16 w-16" />
                        <span className="font-bold mt-2">RCB</span>
                      </div>
                      <div className="text-2xl font-bold">VS</div>
                      <div className="flex flex-col items-center">
                        <img
                          src={match.opponentLogo || "/placeholder.svg"}
                          alt={match.opponent}
                          className="h-16 w-16"
                        />
                        <span className="font-bold mt-2">{match.opponent}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#E30B5D]" />
                        <span className="text-sm">{match.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#E30B5D]" />
                        <span className="text-sm">{match.venue}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-[#E30B5D] hover:bg-[#C00A4D] text-white">Set Reminder</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Completed Matches */}
        <TabsContent value="completed" className="pt-6">
          <div className="grid grid-cols-1 gap-6">
            {matches.completed.map((match) => (
              <Card
                key={match.id}
                className={`overflow-hidden cursor-pointer transition-all ${
                  selectedMatch === match.id ? "ring-2 ring-[#E30B5D]" : ""
                }`}
                onClick={() => setSelectedMatch(selectedMatch === match.id ? null : match.id)}
              >
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="bg-[#E30B5D] text-white text-xs font-bold px-2 py-1 rounded">
                            {match.isHome ? "HOME" : "AWAY"}
                          </div>
                          <div className="text-sm text-muted-foreground">{match.date}</div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex flex-col items-center">
                            <img src="/rcb-logo.png" alt="RCB" className="h-12 w-12" />
                            <span className="font-bold mt-1 text-sm">RCB</span>
                          </div>
                          <div className="text-lg font-bold">{match.rcbScore}</div>
                          <div className="text-lg">vs</div>
                          <div className="text-lg font-bold">{match.opponentScore}</div>
                          <div className="flex flex-col items-center">
                            <img
                              src={match.opponentLogo || "/placeholder.svg"}
                              alt={match.opponent}
                              className="h-12 w-12"
                            />
                            <span className="font-bold mt-1 text-sm">{match.opponent}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        <div
                          className={`font-bold text-lg ${
                            match.result.includes("Won") ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {match.result}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Trophy className="h-4 w-4 text-[#E30B5D]" />
                          <span>Player of the Match: {match.playerOfMatch}</span>
                        </div>
                      </div>
                    </div>

                    {selectedMatch === match.id && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-[#E30B5D]" />
                          <span className="text-sm">{match.venue}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-bold mb-2">RCB Highlights</h4>
                            <ul className="text-sm space-y-1">
                              <li>Virat Kohli - 82 (44)</li>
                              <li>Glenn Maxwell - 56 (32)</li>
                              <li>Mohammed Siraj - 3/24</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2">{match.opponent} Highlights</h4>
                            <ul className="text-sm space-y-1">
                              <li>Player 1 - 45 (38)</li>
                              <li>Player 2 - 32 (28)</li>
                              <li>Player 3 - 2/35</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="text-[#E30B5D] border-[#E30B5D]">
                            View Full Scorecard
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Season Schedule */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Complete Season Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left">Match</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Opponent</th>
                <th className="p-3 text-left">Venue</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              {[...matches.completed, ...matches.upcoming]
                .sort((a, b) => a.id - b.id)
                .map((match) => (
                  <tr key={match.id} className="border-b">
                    <td className="p-3">#{match.id}</td>
                    <td className="p-3">{match.date}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <img src={match.opponentLogo || "/placeholder.svg"} alt={match.opponent} className="h-6 w-6" />
                        {match.opponent}
                      </div>
                    </td>
                    <td className="p-3">{match.venue}</td>
                    <td className="p-3">{"time" in match ? match.time : "-"}</td>
                    <td className="p-3">
                      {"result" in match ? (
                        <span className={match.result.includes("Won") ? "text-green-600" : "text-red-600"}>
                          {match.result}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">Upcoming</span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Matches
