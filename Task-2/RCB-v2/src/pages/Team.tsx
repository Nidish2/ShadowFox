import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Calendar, MapPin } from "lucide-react"

const Team = () => {
  return (
    <div className="container py-8 md:py-12">
      {/* Team Header */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="flex-shrink-0">
          <img src="/rcb-logo.png" alt="RCB Logo" className="h-32 w-32" />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">Royal Challengers Bangalore</h1>
          <p className="text-xl text-muted-foreground">
            One of the founding members of the Indian Premier League, Royal Challengers Bangalore represents the city of
            Bengaluru in the IPL.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#E30B5D]" />
              <span>Bengaluru, Karnataka</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#E30B5D]" />
              <span>Founded: 2008</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-[#E30B5D]" />
              <span>Home Ground: M. Chinnaswamy Stadium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Content Tabs */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
        </TabsList>

        {/* About Tab */}
        <TabsContent value="about" className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Team Overview</h2>
              <div className="prose max-w-none dark:prose-invert">
                <p>
                  Royal Challengers Bangalore (RCB) is a franchise cricket team based in Bengaluru, Karnataka, that
                  plays in the Indian Premier League (IPL). The team is owned by United Spirits Limited, a Diageo Group
                  company. The team's home ground is the M. Chinnaswamy Stadium.
                </p>
                <p>
                  RCB has been one of the most popular teams in the IPL, known for their aggressive batting lineup and
                  passionate fan base. The team's primary colors are red and black, and their logo features a lion's
                  head, symbolizing strength and leadership.
                </p>
                <p>
                  For the 2025 season, RCB has assembled a formidable squad with a mix of experienced international
                  stars and promising young talent, aiming to secure their first IPL title.
                </p>
              </div>
            </div>
            <div>
              <img src="/team-photo.jpg" alt="RCB Team" className="w-full h-auto rounded-lg shadow-lg" />
              <div className="grid grid-cols-3 gap-4 mt-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Trophy className="h-8 w-8 mx-auto mb-2 text-[#E30B5D]" />
                    <p className="text-sm font-medium">IPL Runners-up</p>
                    <p className="text-xl font-bold">3 Times</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 mx-auto mb-2 text-[#E30B5D]" />
                    <p className="text-sm font-medium">Playoff Appearances</p>
                    <p className="text-xl font-bold">8 Times</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-[#E30B5D]" />
                    <p className="text-sm font-medium">IPL Seasons</p>
                    <p className="text-xl font-bold">18</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="py-6">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Team History</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p>
                Royal Challengers Bangalore was established in 2008 as one of the eight founding teams of the Indian
                Premier League. The franchise was purchased by Vijay Mallya, the owner of United Breweries Group, for
                $111.6 million.
              </p>
              <h3>Early Years (2008-2010)</h3>
              <p>
                RCB had a difficult start in the inaugural IPL season, finishing seventh. However, they made significant
                improvements in the following seasons, reaching the finals in 2009 under the captaincy of Anil Kumble,
                where they lost to the Deccan Chargers.
              </p>
              <h3>The Virat Kohli Era (2011-2022)</h3>
              <p>
                Virat Kohli was appointed as the captain in 2013, beginning one of the most significant periods in the
                team's history. Under his leadership, RCB reached the finals in 2016 but lost to Sunrisers Hyderabad.
                Despite having some of the best batsmen in the world, including AB de Villiers and Chris Gayle, the team
                struggled to secure the championship.
              </p>
              <h3>Recent Years (2023-2024)</h3>
              <p>
                After Kohli stepped down from captaincy, RCB entered a transition phase with new leadership and team
                composition. The team continued to be a strong contender, consistently reaching the playoffs but falling
                short of the ultimate prize.
              </p>
              <h3>Current Era (2025)</h3>
              <p>
                For the 2025 season, RCB has revamped their squad with a focus on creating a balanced team capable of
                winning in all conditions. With a mix of experienced players and exciting young talent, RCB aims to
                finally break their title drought and bring the IPL trophy to Bengaluru.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>2008</CardTitle>
                  <CardDescription>Inaugural Season</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Finished 7th in the league</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>2009</CardTitle>
                  <CardDescription>First Finals Appearance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Runners-up, lost to Deccan Chargers</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>2016</CardTitle>
                  <CardDescription>Kohli's Record Season</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Runners-up, Kohli scored 973 runs</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>2025</CardTitle>
                  <CardDescription>Current Season</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Aiming for first championship</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="py-6">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Team Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>IPL Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-[#E30B5D]" />
                        <span>IPL Runners-up</span>
                      </div>
                      <span className="font-bold">2009, 2011, 2016</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-[#E30B5D]" />
                        <span>Playoff Appearances</span>
                      </div>
                      <span className="font-bold">8 Times</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-[#E30B5D]" />
                        <span>Champions League T20</span>
                      </div>
                      <span className="font-bold">Runners-up (2011)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Individual Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-[#E30B5D]" />
                        <span>Most Runs in a Season</span>
                      </div>
                      <span className="font-bold">973 (Virat Kohli, 2016)</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-[#E30B5D]" />
                        <span>Highest Team Score</span>
                      </div>
                      <span className="font-bold">263/5 vs PWI (2013)</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-[#E30B5D]" />
                        <span>Most Sixes in an Innings</span>
                      </div>
                      <span className="font-bold">17 (Chris Gayle, 2013)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="col-span-1 md:col-span-3">
                <CardHeader>
                  <CardTitle>Notable Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Team Records</h3>
                      <ul className="space-y-1 text-sm">
                        <li>Highest successful chase: 207 vs CSK (2012)</li>
                        <li>Longest winning streak: 7 matches (2020)</li>
                        <li>Most 200+ scores in IPL history</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Batting Milestones</h3>
                      <ul className="space-y-1 text-sm">
                        <li>Chris Gayle's 175* (66) - Highest individual score in T20 cricket</li>
                        <li>AB de Villiers' 100* (47) vs MI (2015)</li>
                        <li>Virat Kohli - Most runs for a single franchise in IPL</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Bowling Highlights</h3>
                      <ul className="space-y-1 text-sm">
                        <li>Anil Kumble's 5/5 vs RR (2009)</li>
                        <li>Harshal Patel - Purple Cap with 32 wickets (2021)</li>
                        <li>Yuzvendra Chahal - Most wickets for RCB</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Management Tab */}
        <TabsContent value="management" className="py-6">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Team Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img src="/owner.jpg" alt="Team Owner" className="h-32 w-32 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold text-lg">Team Owner</h3>
                      <p className="text-muted-foreground">United Spirits Limited (Diageo Group)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img src="/coach.jpg" alt="Head Coach" className="h-32 w-32 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold text-lg">Head Coach</h3>
                      <p className="text-muted-foreground">Andy Flower</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img src="/captain.jpg" alt="Team Captain" className="h-32 w-32 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold text-lg">Team Captain</h3>
                      <p className="text-muted-foreground">Faf du Plessis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Support Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-center gap-4">
                    <img src="/staff-1.jpg" alt="Batting Coach" className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold">Batting Coach</h3>
                      <p className="text-sm text-muted-foreground">Sanjay Bangar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/staff-2.jpg" alt="Bowling Coach" className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold">Bowling Coach</h3>
                      <p className="text-sm text-muted-foreground">Adam Griffith</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/staff-3.jpg" alt="Fielding Coach" className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold">Fielding Coach</h3>
                      <p className="text-sm text-muted-foreground">Jonty Rhodes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/staff-4.jpg" alt="Team Mentor" className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold">Team Mentor</h3>
                      <p className="text-sm text-muted-foreground">AB de Villiers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/staff-5.jpg"
                      alt="Strength & Conditioning Coach"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold">Strength & Conditioning Coach</h3>
                      <p className="text-sm text-muted-foreground">Shankar Basu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/staff-6.jpg"
                      alt="Team Physiotherapist"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold">Team Physiotherapist</h3>
                      <p className="text-sm text-muted-foreground">Evan Speechly</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Team
