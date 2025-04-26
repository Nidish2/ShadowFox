"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Mock player data
const players = [
  {
    id: 1,
    name: "Virat Kohli",
    role: "Batsman",
    country: "India",
    image: "/player-1.jpg",
    category: "batsman",
  },
  {
    id: 2,
    name: "Faf du Plessis",
    role: "Batsman (Captain)",
    country: "South Africa",
    image: "/player-2.jpg",
    category: "batsman",
  },
  {
    id: 3,
    name: "Glenn Maxwell",
    role: "All-rounder",
    country: "Australia",
    image: "/player-3.jpg",
    category: "all-rounder",
  },
  {
    id: 4,
    name: "Mohammed Siraj",
    role: "Bowler",
    country: "India",
    image: "/player-4.jpg",
    category: "bowler",
  },
  {
    id: 5,
    name: "Dinesh Karthik",
    role: "Wicket-keeper",
    country: "India",
    image: "/player-5.jpg",
    category: "wicket-keeper",
  },
  {
    id: 6,
    name: "Rajat Patidar",
    role: "Batsman",
    country: "India",
    image: "/player-6.jpg",
    category: "batsman",
  },
  {
    id: 7,
    name: "Wanindu Hasaranga",
    role: "All-rounder",
    country: "Sri Lanka",
    image: "/player-7.jpg",
    category: "all-rounder",
  },
  {
    id: 8,
    name: "Josh Hazlewood",
    role: "Bowler",
    country: "Australia",
    image: "/player-8.jpg",
    category: "bowler",
  },
  {
    id: 9,
    name: "Anuj Rawat",
    role: "Wicket-keeper",
    country: "India",
    image: "/player-9.jpg",
    category: "wicket-keeper",
  },
  {
    id: 10,
    name: "Harshal Patel",
    role: "Bowler",
    country: "India",
    image: "/player-10.jpg",
    category: "bowler",
  },
  {
    id: 11,
    name: "Will Jacks",
    role: "Batsman",
    country: "England",
    image: "/player-11.jpg",
    category: "batsman",
  },
  {
    id: 12,
    name: "Mahipal Lomror",
    role: "All-rounder",
    country: "India",
    image: "/player-12.jpg",
    category: "all-rounder",
  },
]

const Players = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPlayers = (category: string) => {
    return players.filter(
      (player) =>
        (category === "all" || player.category === category) &&
        (player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          player.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          player.role.toLowerCase().includes(searchTerm.toLowerCase())),
    )
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold">RCB Squad 2025</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search players..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="all">All Players</TabsTrigger>
            <TabsTrigger value="batsman">Batsmen</TabsTrigger>
            <TabsTrigger value="bowler">Bowlers</TabsTrigger>
            <TabsTrigger value="all-rounder">All-rounders</TabsTrigger>
            <TabsTrigger value="wicket-keeper">Wicket-keepers</TabsTrigger>
          </TabsList>

          {["all", "batsman", "bowler", "all-rounder", "wicket-keeper"].map((category) => (
            <TabsContent key={category} value={category} className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredPlayers(category).map((player) => (
                  <Link to={`/players/${player.id}`} key={player.id}>
                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={player.image || "/placeholder.svg"}
                            alt={player.name}
                            className="w-full aspect-[3/4] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                            <h3 className="font-bold text-lg">{player.name}</h3>
                            <p className="text-sm opacity-90">{player.role}</p>
                            <div className="flex items-center mt-1">
                              <img
                                src={`/flags/${player.country.toLowerCase().replace(" ", "-")}.png`}
                                alt={player.country}
                                className="w-5 h-3 mr-2"
                              />
                              <span className="text-xs">{player.country}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredPlayers(category).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No players found matching your search criteria.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Players
