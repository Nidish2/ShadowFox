"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, ArrowRight } from "lucide-react"

// Mock news data
const newsData = [
  {
    id: 1,
    title: "RCB unveils new jersey for IPL 2025",
    date: "March 15, 2025",
    image: "/news-1.jpg",
    category: "team",
    excerpt:
      "Royal Challengers Bangalore has unveiled their new jersey for the upcoming IPL 2025 season with a special event in Bengaluru.",
    content:
      "Royal Challengers Bangalore has unveiled their new jersey for the upcoming IPL 2025 season with a special event in Bengaluru. The new design features the traditional red and black colors with gold accents, symbolizing the team's royal heritage and ambition for glory. The jersey was unveiled by team captain Faf du Plessis and star player Virat Kohli at a grand ceremony attended by fans and media.",
  },
  {
    id: 2,
    title: "Virat Kohli ready to lead RCB to glory",
    date: "March 10, 2025",
    image: "/news-2.jpg",
    category: "players",
    excerpt:
      "Star batsman Virat Kohli expresses confidence in RCB's chances for the IPL 2025 season during the pre-season press conference.",
    content:
      "Star batsman Virat Kohli has expressed confidence in RCB's chances for the IPL 2025 season during the pre-season press conference. 'This year, we have a very balanced squad with quality players in all departments. I believe we have what it takes to go all the way,' said Kohli. The former captain, who has been with RCB since the inaugural IPL season, emphasized the team's determination to secure their first IPL trophy.",
  },
  {
    id: 3,
    title: "RCB announces new overseas signings",
    date: "March 5, 2025",
    image: "/news-3.jpg",
    category: "team",
    excerpt:
      "Royal Challengers Bangalore has strengthened their squad with exciting new overseas talent for the upcoming IPL season.",
    content:
      "Royal Challengers Bangalore has strengthened their squad with exciting new overseas talent for the upcoming IPL season. The team has signed Australian fast bowler Mitchell Starc, England all-rounder Sam Curran, and South African wicketkeeper-batsman Quinton de Kock. These additions are expected to address key areas that needed reinforcement after last season's performance.",
  },
  {
    id: 4,
    title: "RCB's new training facility inaugurated",
    date: "February 28, 2025",
    image: "/news-4.jpg",
    category: "team",
    excerpt: "Royal Challengers Bangalore inaugurates state-of-the-art training facility ahead of IPL 2025.",
    content:
      "Royal Challengers Bangalore has inaugurated a state-of-the-art training facility ahead of IPL 2025. The facility, located near M. Chinnaswamy Stadium, features advanced training equipment, simulation technology, and recovery amenities. 'This facility will help our players prepare better and recover faster during the intense IPL schedule,' said head coach Andy Flower during the inauguration ceremony.",
  },
  {
    id: 5,
    title: "Glenn Maxwell aims for consistent performance",
    date: "February 22, 2025",
    image: "/news-5.jpg",
    category: "players",
    excerpt:
      "Australian all-rounder Glenn Maxwell sets personal goals for consistency in the upcoming IPL season with RCB.",
    content:
      "Australian all-rounder Glenn Maxwell has set personal goals for consistency in the upcoming IPL season with RCB. Known for his explosive batting, Maxwell aims to contribute more regularly with both bat and ball. 'I've been working on specific aspects of my game to ensure I can deliver consistently throughout the tournament, not just in patches,' Maxwell said during a virtual press conference from Australia.",
  },
  {
    id: 6,
    title: "RCB announces ticket sales for home matches",
    date: "February 15, 2025",
    image: "/news-6.jpg",
    category: "matches",
    excerpt: "Tickets for RCB's home matches at M. Chinnaswamy Stadium for IPL 2025 to go on sale from March 1.",
    content:
      "Tickets for RCB's home matches at M. Chinnaswamy Stadium for IPL 2025 will go on sale from March 1. The team has announced special packages for season ticket holders and introduced new fan experiences at the stadium. 'We want to make the match day experience even more memorable for our loyal fans,' said the team's CEO. The team will play seven home matches during the league stage of IPL 2025.",
  },
  {
    id: 7,
    title: "Mohammed Siraj leads bowling attack",
    date: "February 10, 2025",
    image: "/news-7.jpg",
    category: "players",
    excerpt:
      "Indian pacer Mohammed Siraj to spearhead RCB's bowling attack in IPL 2025 after impressive international performances.",
    content:
      "Indian pacer Mohammed Siraj will spearhead RCB's bowling attack in IPL 2025 after impressive international performances. Siraj, who has evolved into one of India's premier fast bowlers, is expected to play a crucial role in RCB's campaign. 'Siraj has grown tremendously as a bowler and has shown he can perform under pressure. He will be key to our bowling plans,' said bowling coach Adam Griffith.",
  },
  {
    id: 8,
    title: "RCB Fan Day announced for April 5",
    date: "February 5, 2025",
    image: "/news-8.jpg",
    category: "fans",
    excerpt:
      "Royal Challengers Bangalore to host special Fan Day event on April 5 with player interactions and activities.",
    content:
      "Royal Challengers Bangalore will host a special Fan Day event on April 5 with player interactions and activities. The event, to be held at M. Chinnaswamy Stadium, will feature meet-and-greet sessions with players, autograph opportunities, and interactive games. 'This is our way of thanking the fans for their unwavering support,' said team captain Faf du Plessis. Tickets for the event will be available from March 15.",
  },
]

const News = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNews = (category: string) => {
    return newsData.filter(
      (news) =>
        (category === "all" || news.category === category) &&
        (news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())),
    )
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold">RCB News & Updates</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search news..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="all">All News</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="players">Players</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="fans">Fans</TabsTrigger>
          </TabsList>

          {["all", "team", "players", "matches", "fans"].map((category) => (
            <TabsContent key={category} value={category} className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews(category).map((news) => (
                  <Card key={news.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{news.date}</span>
                        </div>
                        <h3 className="font-bold text-lg line-clamp-2">{news.title}</h3>
                        <p className="text-muted-foreground line-clamp-3">{news.excerpt}</p>
                        <Button variant="link" className="text-[#E30B5D] p-0 flex items-center gap-1">
                          Read More <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredNews(category).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No news found matching your search criteria.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Featured Article */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img src="/featured-news.jpg" alt="Featured Article" className="w-full h-full object-cover" />
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>March 20, 2025</span>
                </div>
                <h3 className="font-bold text-2xl">RCB's Journey: The Road to IPL 2025</h3>
                <p className="text-muted-foreground">
                  As Royal Challengers Bangalore prepares for another exciting IPL season, we look back at the team's
                  evolution over the years and the changes that have shaped their current squad. From the early days
                  under Anil Kumble to the Virat Kohli era and now the current leadership, RCB has always been a team
                  that captures the imagination of cricket fans worldwide.
                </p>
                <p className="text-muted-foreground">
                  This comprehensive article explores the strategic decisions, key player acquisitions, and the vision
                  that drives RCB's quest for their first IPL trophy in 2025.
                </p>
                <Button className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white">Read Full Article</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-muted rounded-lg p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Stay Updated with RCB News</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to receive the latest news, match updates, and exclusive content directly in
              your inbox.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to receive emails from RCB. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
