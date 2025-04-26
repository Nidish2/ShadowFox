import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Trophy, Users, Clock } from "lucide-react"

const Home = () => {
  // Mock data for upcoming match
  const upcomingMatch = {
    opponent: "Mumbai Indians",
    date: "April 12, 2025",
    time: "7:30 PM IST",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
  }

  // Mock data for news
  const latestNews = [
    {
      id: 1,
      title: "RCB unveils new jersey for IPL 2025",
      date: "March 15, 2025",
      image: "/news-1.jpg",
      excerpt:
        "Royal Challengers Bangalore has unveiled their new jersey for the upcoming IPL 2025 season with a special event in Bengaluru.",
    },
    {
      id: 2,
      title: "Virat Kohli ready to lead RCB to glory",
      date: "March 10, 2025",
      image: "/news-2.jpg",
      excerpt:
        "Star batsman Virat Kohli expresses confidence in RCB's chances for the IPL 2025 season during the pre-season press conference.",
    },
    {
      id: 3,
      title: "RCB announces new overseas signings",
      date: "March 5, 2025",
      image: "/news-3.jpg",
      excerpt:
        "Royal Challengers Bangalore has strengthened their squad with exciting new overseas talent for the upcoming IPL season.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-[#E30B5D] to-[#000000] flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container relative z-20 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to <span className="text-[#E30B5D]">RCB</span> 2025
            </h1>
            <p className="text-xl md:text-2xl">Ee Sala Cup Namde! Join us on our journey to IPL glory in 2025.</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white">
                <Link to="/matches">View Matches</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link to="/fan-zone">Fan Zone</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Match Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold">Next Match</h2>
              <div className="flex items-center gap-4 text-xl font-semibold">
                <div className="flex items-center gap-2">
                  <img src="/rcb-logo.png" alt="RCB" className="h-12 w-12" />
                  <span>RCB</span>
                </div>
                <span className="text-2xl">vs</span>
                <div className="flex items-center gap-2">
                  <img src="/mi-logo.png" alt="MI" className="h-12 w-12" />
                  <span>{upcomingMatch.opponent}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#E30B5D]" />
                  <span>{upcomingMatch.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#E30B5D]" />
                  <span>{upcomingMatch.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#E30B5D]" />
                  <span>{upcomingMatch.venue}</span>
                </div>
              </div>
              <Button asChild className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white">
                <Link to="/matches">View All Matches</Link>
              </Button>
            </div>
            <div className="flex-1">
              <img
                src="/stadium.jpg"
                alt="M. Chinnaswamy Stadium"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Team Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-[#E30B5D] flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Championship Contenders</h3>
              <p className="text-muted-foreground">
                With a strengthened squad and renewed determination, RCB is poised to challenge for the IPL trophy in
                2025.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-[#E30B5D] flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Star-Studded Lineup</h3>
              <p className="text-muted-foreground">
                Our team features some of cricket's biggest stars, ready to deliver spectacular performances.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-[#E30B5D] flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Exciting Season Ahead</h3>
              <p className="text-muted-foreground">
                Get ready for an action-packed IPL 2025 season with thrilling matches and unforgettable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Players</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((player) => (
                <CarouselItem key={player} className="md:basis-1/3 lg:basis-1/4">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={`/player-${player}.jpg`}
                          alt={`Featured Player ${player}`}
                          className="w-full aspect-[3/4] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                          <h3 className="font-bold text-lg">Player Name</h3>
                          <p className="text-sm">Batsman</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="mt-8 text-center">
            <Button asChild className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white">
              <Link to="/players">View All Players</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <Card key={news.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-48 object-cover" />
                  <div className="p-4 space-y-2">
                    <p className="text-sm text-muted-foreground">{news.date}</p>
                    <h3 className="font-bold text-lg">{news.title}</h3>
                    <p className="text-muted-foreground">{news.excerpt}</p>
                    <Button variant="link" className="text-[#E30B5D] p-0">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white">
              <Link to="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fan Engagement */}
      <section className="py-16 bg-[#E30B5D] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join the RCB Fan Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Be part of the passionate RCB family and show your support for the team.
          </p>
          <Button asChild size="lg" className="bg-white text-[#E30B5D] hover:bg-gray-100">
            <Link to="/fan-zone">Visit Fan Zone</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
