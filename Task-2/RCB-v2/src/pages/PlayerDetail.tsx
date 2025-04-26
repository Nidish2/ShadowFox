"use client"

import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Flag, Award, TrendingUp, Shirt } from "lucide-react"

// Mock player data - in a real app, this would come from an API
const playersData = [
  {
    id: 1,
    name: "Virat Kohli",
    role: "Batsman",
    country: "India",
    image: "/player-1.jpg",
    jerseyNumber: 18,
    dateOfBirth: "November 5, 1988",
    bio: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He is widely regarded as one of the greatest batsmen in the history of cricket and the best active batsman in the world.",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium",
    ipl: {
      matches: 237,
      runs: 7263,
      average: 37.21,
      strikeRate: 130.02,
      fifties: 50,
      hundreds: 7,
      highestScore: "113*",
    },
    stats: [
      { label: "Matches", value: 237 },
      { label: "Runs", value: 7263 },
      { label: "Average", value: 37.21 },
      { label: "Strike Rate", value: 130.02 },
      { label: "50s", value: 50 },
      { label: "100s", value: 7 },
      { label: "Highest Score", value: "113*" },
    ],
    achievements: [
      "Most runs in IPL history",
      "Most centuries in IPL history",
      "Most 50+ scores in IPL history",
      "Orange Cap winner (2016)",
      "Most runs in a single IPL season (973 in 2016)",
    ],
    recentPerformances: [
      { match: "RCB vs MI", date: "April 2, 2025", performance: "82 (44)" },
      { match: "RCB vs CSK", date: "April 6, 2025", performance: "56 (38)" },
      { match: "RCB vs KKR", date: "April 10, 2025", performance: "113* (50)" },
      { match: "RCB vs PBKS", date: "April 14, 2025", performance: "24 (18)" },
      { match: "RCB vs RR", date: "April 18, 2025", performance: "67 (42)" },
    ],
  },
  // More players would be defined here
]

const PlayerDetail = () => {
  const { id } = useParams()
  const playerId = Number.parseInt(id || "1")

  // Find the player by ID (in a real app, this would be a data fetch)
  const player = playersData.find((p) => p.id === playerId) || playersData[0]

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-6">
        <Button asChild variant="ghost" className="pl-0 mb-4">
          <Link to="/players" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Players
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Player Image and Basic Info */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={player.image || "/placeholder.svg"}
                alt={player.name}
                className="w-full aspect-[3/4] object-cover"
              />
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Player Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Shirt className="h-5 w-5 text-[#E30B5D]" />
                <div>
                  <p className="text-sm text-muted-foreground">Jersey Number</p>
                  <p className="font-medium">{player.jerseyNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[#E30B5D]" />
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{player.dateOfBirth}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Flag className="h-5 w-5 text-[#E30B5D]" />
                <div>
                  <p className="text-sm text-muted-foreground">Nationality</p>
                  <p className="font-medium">{player.country}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-[#E30B5D]" />
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="font-medium">{player.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#E30B5D]" />
                <div>
                  <p className="text-sm text-muted-foreground">Batting Style</p>
                  <p className="font-medium">{player.battingStyle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#E30B5D]" />
                <div>
                  <p className="text-sm text-muted-foreground">Bowling Style</p>
                  <p className="font-medium">{player.bowlingStyle}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Player Details */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{player.name}</h1>
            <p className="text-xl text-muted-foreground">{player.role}</p>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <p>{player.bio}</p>
          </div>

          <Tabs defaultValue="stats" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="stats">Statistics</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="recent">Recent Form</TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>IPL Career Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {player.stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Career Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {player.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-[#E30B5D] mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recent" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Performances</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {player.recentPerformances.map((perf, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="font-medium">{perf.match}</p>
                          <p className="text-sm text-muted-foreground">{perf.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{perf.performance}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default PlayerDetail
