"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Download, Heart, MessageSquare, Share2, ThumbsUp } from "lucide-react"

const FanZone = () => {
  const [selectedWallpaper, setSelectedWallpaper] = useState<string | null>(null)
  const [pollVoted, setPollVoted] = useState<boolean>(false)
  const [selectedPoll, setSelectedPoll] = useState<string>("")

  // Mock data for wallpapers
  const wallpapers = [
    { id: 1, image: "/wallpaper-1.jpg", title: "Team Celebration" },
    { id: 2, image: "/wallpaper-2.jpg", title: "Virat Kohli" },
    { id: 3, image: "/wallpaper-3.jpg", title: "RCB Logo" },
    { id: 4, image: "/wallpaper-4.jpg", title: "Chinnaswamy Stadium" },
    { id: 5, image: "/wallpaper-5.jpg", title: "Team Huddle" },
    { id: 6, image: "/wallpaper-6.jpg", title: "Faf du Plessis" },
  ]

  // Mock data for fan posts
  const fanPosts = [
    {
      id: 1,
      user: "RCBFan123",
      avatar: "/fan-1.jpg",
      date: "April 5, 2025",
      content:
        "Just got my tickets for the first home game! Can't wait to see RCB in action at Chinnaswamy Stadium. This is our year! #PlayBold #WeAreChallengers",
      image: "/fan-post-1.jpg",
      likes: 245,
      comments: 32,
    },
    {
      id: 2,
      user: "BengaluruCricket",
      avatar: "/fan-2.jpg",
      date: "April 3, 2025",
      content:
        "My collection of RCB jerseys over the years. Been supporting this team since day one! Which one is your favorite design?",
      image: "/fan-post-2.jpg",
      likes: 189,
      comments: 45,
    },
    {
      id: 3,
      user: "CricketLover22",
      avatar: "/fan-3.jpg",
      date: "April 1, 2025",
      content:
        "Made this fan art of Virat Kohli after his amazing century last season. Hope he brings the same form to IPL 2025! #KingKohli #RCB",
      image: "/fan-post-3.jpg",
      likes: 312,
      comments: 67,
    },
  ]

  const handleWallpaperClick = (id: number) => {
    setSelectedWallpaper(wallpapers.find((w) => w.id === id)?.image || null)
  }

  const handleVote = () => {
    if (selectedPoll) {
      setPollVoted(true)
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">RCB Fan Zone</h1>

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E30B5D] to-[#000000] z-10"></div>
        <div className="absolute inset-0 bg-[url('/fan-zone-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to the RCB Fan Community</h2>
          <p className="text-lg md:text-xl max-w-2xl">
            Join thousands of passionate RCB fans, share your experiences, and show your support for the team.
          </p>
        </div>
      </section>

      <Tabs defaultValue="fan-gallery" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="fan-gallery">Fan Gallery</TabsTrigger>
          <TabsTrigger value="wallpapers">Wallpapers</TabsTrigger>
          <TabsTrigger value="polls">Fan Polls</TabsTrigger>
          <TabsTrigger value="forum">Fan Forum</TabsTrigger>
        </TabsList>

        {/* Fan Gallery Tab */}
        <TabsContent value="fan-gallery" className="pt-6">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Fan Posts</h2>
              <Button className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white">Share Your Story</Button>
            </div>

            <div className="space-y-6">
              {fanPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={post.avatar || "/placeholder.svg"}
                        alt={post.user}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold">{post.user}</h3>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                    <p className="mb-4">{post.content}</p>
                    {post.image && (
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Fan Post"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                    )}
                    <div className="flex items-center gap-6 pt-2">
                      <button className="flex items-center gap-1 text-sm">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-sm">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1 text-sm">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline">Load More Posts</Button>
            </div>
          </div>
        </TabsContent>

        {/* Wallpapers Tab */}
        <TabsContent value="wallpapers" className="pt-6">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">RCB Wallpapers</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {wallpapers.map((wallpaper) => (
                <Card
                  key={wallpaper.id}
                  className="overflow-hidden cursor-pointer transition-all hover:shadow-lg"
                  onClick={() => handleWallpaperClick(wallpaper.id)}
                >
                  <CardContent className="p-0">
                    <img
                      src={wallpaper.image || "/placeholder.svg"}
                      alt={wallpaper.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="p-4 flex justify-between items-center">
                      <h3 className="font-medium">{wallpaper.title}</h3>
                      <Download className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedWallpaper && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                <div className="relative max-w-4xl w-full">
                  <Button
                    variant="ghost"
                    className="absolute top-2 right-2 text-white z-10"
                    onClick={() => setSelectedWallpaper(null)}
                  >
                    ✕
                  </Button>
                  <img
                    src={selectedWallpaper || "/placeholder.svg"}
                    alt="Wallpaper Preview"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <Button className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white">Download Wallpaper</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Fan Polls Tab */}
        <TabsContent value="polls" className="pt-6">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Fan Polls</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Who will be RCB's top performer in IPL 2025?</CardTitle>
                </CardHeader>
                <CardContent>
                  {!pollVoted ? (
                    <div className="space-y-6">
                      <RadioGroup value={selectedPoll} onValueChange={setSelectedPoll}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="virat" id="virat" />
                          <Label htmlFor="virat">Virat Kohli</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="faf" id="faf" />
                          <Label htmlFor="faf">Faf du Plessis</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="maxwell" id="maxwell" />
                          <Label htmlFor="maxwell">Glenn Maxwell</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="siraj" id="siraj" />
                          <Label htmlFor="siraj">Mohammed Siraj</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Someone else</Label>
                        </div>
                      </RadioGroup>
                      <Button
                        className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white w-full"
                        onClick={handleVote}
                        disabled={!selectedPoll}
                      >
                        Vote Now
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Virat Kohli</span>
                          <span>42%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Faf du Plessis</span>
                          <span>18%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "18%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Glenn Maxwell</span>
                          <span>25%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Mohammed Siraj</span>
                          <span>10%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Someone else</span>
                          <span>5%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "5%" }}></div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Total votes: 1,245</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Which match are you most excited about?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>RCB vs MI</span>
                        <span>35%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>RCB vs CSK</span>
                        <span>30%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>RCB vs KKR</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>RCB vs SRH</span>
                        <span>10%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Other matches</span>
                        <span>10%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Total votes: 2,187</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Will RCB win IPL 2025?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Yes, definitely!</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>They'll reach the finals</span>
                        <span>20%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>They'll reach playoffs</span>
                        <span>10%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Not this year</span>
                        <span>5%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-[#E30B5D] h-2.5 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Total votes: 3,542</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Suggest a Poll</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="poll-title">Poll Question</Label>
                      <Input id="poll-title" placeholder="Enter your poll question" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="poll-options">Poll Options (one per line)</Label>
                      <Textarea id="poll-options" placeholder="Enter poll options" className="min-h-[100px]" />
                    </div>
                    <Button className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white w-full">Submit Poll</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Fan Forum Tab */}
        <TabsContent value="forum" className="pt-6">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Fan Forum</h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Start a Discussion</h3>
                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic</Label>
                    <Input id="topic" placeholder="Enter discussion topic" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Share your thoughts..." className="min-h-[120px]" />
                  </div>
                  <Button className="bg-[#E30B5D] hover:bg-[#C00A4D] text-white">Post Discussion</Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Recent Discussions</h3>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/fan-4.jpg" alt="User" className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold">RCBSupporter</h4>
                      <p className="text-xs text-muted-foreground">April 6, 2025</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Thoughts on our bowling lineup this season?</h3>
                  <p className="mb-4">
                    I think our bowling attack looks much stronger this season with the addition of Mitchell Starc. What
                    do you all think? Can our bowling unit deliver consistently this season?
                  </p>
                  <div className="flex items-center gap-6 pt-2">
                    <button className="flex items-center gap-1 text-sm">
                      <Heart className="h-4 w-4" />
                      <span>32</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm">
                      <MessageSquare className="h-4 w-4" />
                      <span>18 replies</span>
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/fan-5.jpg" alt="User" className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold">CricketAnalyst</h4>
                      <p className="text-xs text-muted-foreground">April 4, 2025</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Analyzing RCB's chances in IPL 2025</h3>
                  <p className="mb-4">
                    I've done a detailed analysis of RCB's squad and their potential performance in IPL 2025. Looking at
                    the balance of the team, the home conditions, and the schedule, I believe RCB has a 70% chance of
                    making it to the playoffs and a 35% chance of reaching the finals. What do you think?
                  </p>
                  <div className="flex items-center gap-6 pt-2">
                    <button className="flex items-center gap-1 text-sm">
                      <Heart className="h-4 w-4" />
                      <span>45</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm">
                      <MessageSquare className="h-4 w-4" />
                      <span>27 replies</span>
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/fan-6.jpg" alt="User" className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold">BangaloreFan</h4>
                      <p className="text-xs text-muted-foreground">April 2, 2025</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Best places to watch RCB matches in Bengaluru?</h3>
                  <p className="mb-4">
                    Apart from the stadium, what are some good sports bars or fan zones in Bengaluru to watch RCB
                    matches with fellow fans? Looking for recommendations for the upcoming season.
                  </p>
                  <div className="flex items-center gap-6 pt-2">
                    <button className="flex items-center gap-1 text-sm">
                      <Heart className="h-4 w-4" />
                      <span>28</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm">
                      <MessageSquare className="h-4 w-4" />
                      <span>34 replies</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline">View More Discussions</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Fan Community CTA */}
      <section className="mt-16 bg-[#E30B5D] text-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-bold">Join the Official RCB Fan Club</h2>
            <p className="text-lg">
              Get exclusive access to player meet-and-greets, special events, merchandise discounts, and more!
            </p>
            <Button className="bg-white text-[#E30B5D] hover:bg-gray-100">Become a Member</Button>
          </div>
          <div className="relative h-64 md:h-auto">
            <img src="/fan-club.jpg" alt="RCB Fan Club" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FanZone
