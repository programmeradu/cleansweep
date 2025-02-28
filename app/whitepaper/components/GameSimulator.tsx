"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Leaf, Trophy, BarChart3, Zap, CheckCircle2 } from "lucide-react"

type Challenge = {
  id: number
  title: string
  description: string
  icon: JSX.Element
  points: number
  completed: boolean
  difficulty: "easy" | "medium" | "hard"
}

export function GameSimulator() {
  const [userScore, setUserScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [progress, setProgress] = useState(0)
  const [activeTab, setActiveTab] = useState("challenges")
  const [animation, setAnimation] = useState(false)
  
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "Trash Collection",
      description: "Collect and properly sort 10 pieces of virtual trash",
      icon: <Recycle className="h-5 w-5" />,
      points: 50,
      completed: false,
      difficulty: "easy"
    },
    {
      id: 2,
      title: "Plant a Tree",
      description: "Plant a virtual tree and earn carbon credits",
      icon: <Leaf className="h-5 w-5" />,
      points: 100,
      completed: false,
      difficulty: "medium"
    },
    {
      id: 3,
      title: "Energy Saver",
      description: "Complete the energy conservation mini-game",
      icon: <Zap className="h-5 w-5" />,
      points: 75,
      completed: false,
      difficulty: "easy"
    },
    {
      id: 4,
      title: "Sustainability Champion",
      description: "Complete all challenges in record time",
      icon: <Trophy className="h-5 w-5" />,
      points: 200,
      completed: false,
      difficulty: "hard"
    }
  ])

  const completeChallenge = (id: number) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id ? { ...challenge, completed: true } : challenge
    ))
    
    const challenge = challenges.find(c => c.id === id)
    if (challenge && !challenge.completed) {
      // Add points
      setUserScore(prev => prev + challenge.points)
      
      // Update progress
      const newProgress = Math.min(progress + 25, 100)
      setProgress(newProgress)
      
      // Level up if progress is 100%
      if (newProgress === 100) {
        setTimeout(() => {
          setLevel(prev => prev + 1)
          setProgress(0)
          setAnimation(true)
          setTimeout(() => setAnimation(false), 2000)
        }, 500)
      }
    }
  }

  const resetGame = () => {
    setChallenges(challenges.map(challenge => ({ ...challenge, completed: false })))
    setUserScore(0)
    setLevel(1)
    setProgress(0)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* User Stats */}
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle>Player Stats</CardTitle>
            <CardDescription>Your sustainability journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Level</span>
                <motion.span 
                  className="text-xl font-bold"
                  animate={animation ? { scale: [1, 1.5, 1] } : {}}
                >
                  {level}
                </motion.span>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Score</span>
                <motion.span 
                  className="text-xl font-bold text-emerald-600 dark:text-emerald-400"
                  animate={animation ? { scale: [1, 1.2, 1] } : {}}
                >
                  {userScore}
                </motion.span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Main Game Area */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>CleanSweep Simulator</CardTitle>
            <CardDescription>Experience the gamified sustainability platform</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="challenges" className="space-y-4 pt-4">
                {challenges.map(challenge => (
                  <div 
                    key={challenge.id}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      challenge.completed 
                        ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800' 
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        challenge.difficulty === 'easy' ? 'bg-emerald-100 dark:bg-emerald-900/50' :
                        challenge.difficulty === 'medium' ? 'bg-amber-100 dark:bg-amber-900/50' :
                        'bg-red-100 dark:bg-red-900/50'
                      }`}>
                        {challenge.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{challenge.points} pts</span>
                      {challenge.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <Button 
                          size="sm" 
                          onClick={() => completeChallenge(challenge.id)}
                          className="bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700"
                        >
                          Complete
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="rewards" className="pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-amber-500" />
                        <CardTitle className="text-base">Achievements</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className={`p-2 rounded-lg ${userScore >= 50 ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Beginner</span>
                            <span className="text-xs">{userScore >= 50 ? 'Unlocked' : 'Locked'}</span>
                          </div>
                        </div>
                        <div className={`p-2 rounded-lg ${userScore >= 200 ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Intermediate</span>
                            <span className="text-xs">{userScore >= 200 ? 'Unlocked' : 'Locked'}</span>
                          </div>
                        </div>
                        <div className={`p-2 rounded-lg ${userScore >= 400 ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Advanced</span>
                            <span className="text-xs">{userScore >= 400 ? 'Unlocked' : 'Locked'}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-blue-500" />
                        <CardTitle className="text-base">Impact Stats</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">CO₂ Saved</span>
                          <span className="text-sm font-medium">{userScore * 0.5} kg</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Trees Planted</span>
                          <span className="text-sm font-medium">{Math.floor(userScore / 100)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Waste Recycled</span>
                          <span className="text-sm font-medium">{userScore * 0.2} kg</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={resetGame} className="ml-auto">
              Reset Simulator
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
