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
    setChallenges(challenges.map(challenge => {
      if (challenge.id === id && !challenge.completed) {
        // Update score and progress
        const newScore = userScore + challenge.points
        setUserScore(newScore)
        
        // Calculate level and progress
        const newLevel = Math.floor(newScore / 500) + 1
        const newProgress = (newScore % 500) / 5
        
        setLevel(newLevel)
        setProgress(newProgress)
        
        // Trigger animation
        setAnimation(true)
        setTimeout(() => setAnimation(false), 1000)
        
        return { ...challenge, completed: true }
      }
      return challenge
    }))
  }
  
  const resetGame = () => {
    setUserScore(0)
    setLevel(1)
    setProgress(0)
    setChallenges(challenges.map(challenge => ({ ...challenge, completed: false })))
  }
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-3">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-4">
          <div>
            <CardTitle className="text-lg sm:text-xl">CleanSweep Game Demo</CardTitle>
            <CardDescription className="text-xs sm:text-sm mt-1">
              Interactive preview of the gamified sustainability experience
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
              <span className="text-sm sm:text-base font-medium">{userScore} pts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
              <span className="text-sm sm:text-base font-medium">Level {level}</span>
            </div>
          </div>
        </div>
        <div className="mt-3 sm:mt-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs sm:text-sm">Progress to Level {level + 1}</span>
            <span className="text-xs sm:text-sm ml-auto">{progress.toFixed(0)}%</span>
          </div>
          <Progress value={progress} className="h-2 sm:h-3" />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 rounded-none border-b">
            <TabsTrigger value="challenges" className="text-xs sm:text-sm py-2 sm:py-3">Challenges</TabsTrigger>
            <TabsTrigger value="rewards" className="text-xs sm:text-sm py-2 sm:py-3">Rewards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="challenges" className="p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className={`overflow-hidden transition-all ${challenge.completed ? 'bg-muted/50' : ''}`}>
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg 
                        ${challenge.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 
                          challenge.difficulty === 'medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300' : 
                          'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}`}
                      >
                        {challenge.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-medium text-sm sm:text-base">{challenge.title}</h4>
                          <div className="flex items-center gap-1 whitespace-nowrap">
                            <Trophy className="h-3.5 w-3.5 text-amber-500" />
                            <span className="text-xs sm:text-sm font-medium">{challenge.points}</span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{challenge.description}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button 
                        size="sm"
                        variant={challenge.completed ? "outline" : "default"}
                        className={`text-xs sm:text-sm ${challenge.completed ? 'text-green-600 border-green-600 dark:text-green-400 dark:border-green-400' : ''}`}
                        onClick={() => completeChallenge(challenge.id)}
                        disabled={challenge.completed}
                      >
                        {challenge.completed ? (
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Completed
                          </span>
                        ) : "Complete Challenge"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rewards" className="p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Carbon Credit NFT</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">Earn a unique NFT representing 10kg of carbon offset</p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="text-xs sm:text-sm" disabled={userScore < 200}>
                          {userScore >= 200 ? "Claim Reward" : `Need ${200 - userScore} more points`}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Sustainability Badge</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">Earn a digital badge to showcase your commitment</p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="text-xs sm:text-sm" disabled={userScore < 100}>
                          {userScore >= 100 ? "Claim Reward" : `Need ${100 - userScore} more points`}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Eco Power-Up</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">Boost your impact by 2x for the next challenge</p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="text-xs sm:text-sm" disabled={userScore < 300}>
                          {userScore >= 300 ? "Claim Reward" : `Need ${300 - userScore} more points`}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="p-4 sm:p-6 pt-2 sm:pt-3 flex justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={resetGame}
          className="text-xs sm:text-sm"
        >
          Reset Demo
        </Button>
      </CardFooter>
      
      {/* Animation for points */}
      {animation && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -20 }}
          exit={{ opacity: 0 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
        >
          +Points!
        </motion.div>
      )}
    </Card>
  )
}
