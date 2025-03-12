"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BrainCircuit, MessageSquare } from "lucide-react"

export default function AIVideoConsultation() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [conversationStage, setConversationStage] = useState(0)

  // Simulate conversation flow
  useEffect(() => {
    const questions = [
      "Hello! I'm your AI career advisor. What areas of technology interest you the most?",
      "That's interesting! Do you prefer working on visual elements or behind-the-scenes functionality?",
      "Great! How comfortable are you with mathematics and statistics?",
      "What kind of work environment do you prefer? Team-based or more independent work?",
      "Based on your responses, I'm analyzing the best career paths for you...",
    ]

    if (conversationStage < questions.length) {
      setCurrentQuestion(questions[conversationStage])

      if (conversationStage === questions.length - 1) {
        // Start analysis animation
        setIsAnalyzing(true)
        const interval = setInterval(() => {
          setAnalysisProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval)
              return 100
            }
            return prev + 5
          })
        }, 200)

        // After analysis completes
        setTimeout(() => {
          setIsAnalyzing(false)
          setCurrentQuestion(
            "Based on our conversation, I recommend exploring Frontend Development as your primary career path. You seem to have a good balance of visual creativity and technical skills!",
          )
        }, 5000)
      }
    }
  }, [conversationStage])

  const handleResponse = () => {
    if (conversationStage < 4) {
      setConversationStage((prev) => prev + 1)
    }
  }

  return (
    <div className="relative w-full h-full bg-gray-900 flex flex-col items-center justify-center">
      {/* AI Avatar */}
      <div className="flex flex-col items-center">
        <Avatar className="w-32 h-32 border-4 border-purple-500">
          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="AI Advisor" />
          <AvatarFallback className="bg-purple-100 text-purple-800 text-4xl">
            <BrainCircuit />
          </AvatarFallback>
        </Avatar>

        {/* Animated wave effect */}
        <div className="absolute w-40 h-40 rounded-full border-2 border-purple-500 opacity-30 animate-ping"></div>
        <div
          className="absolute w-48 h-48 rounded-full border-2 border-purple-400 opacity-20 animate-ping"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>

      {/* Conversation UI */}
      <Card className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur">
        {isAnalyzing ? (
          <div className="space-y-2">
            <p className="text-center font-medium">Analyzing your career preferences...</p>
            <Progress value={analysisProgress} className="h-2" />
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-center">{currentQuestion}</p>
            {conversationStage < 4 && (
              <div className="flex justify-center">
                <Button onClick={handleResponse} className="bg-purple-600 hover:bg-purple-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Respond
                </Button>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}

