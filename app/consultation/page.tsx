"use client"
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MicOff, VideoOff, Mic, Video, Download, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ConsultationPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">AI Career Consultation</h1>
      <p className="text-muted-foreground">Get personalized career guidance from our AI mentor</p>

      <Tabs defaultValue="video" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="video">Video Consultation</TabsTrigger>
          <TabsTrigger value="chat">Chat Consultation</TabsTrigger>
        </TabsList>
        <TabsContent value="video" className="mt-6">
          <VideoConsultation />
        </TabsContent>
        <TabsContent value="chat" className="mt-6">
          <ChatConsultation />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function VideoConsultation() {
    const [micOn, setMicOn] = useState(true);
    const [videoOn, setVideoOn] = useState(true);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
  
    const toggleMic = () => {
      if (stream) {
        stream.getAudioTracks().forEach(track => (track.enabled = !micOn));
        setMicOn(!micOn);
      }
    };
  
    const toggleVideo = () => {
      if (stream) {
        stream.getVideoTracks().forEach(track => (track.enabled = !videoOn));
        setVideoOn(!videoOn);
      }
    };
  
    const startConsultation = async () => {
      try {
        const userStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(userStream);
        if (videoRef.current) {
          videoRef.current.srcObject = userStream;
        }
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    };
  
    const endConsultation = () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      }
    };
  
    const downloadReport = () => {
      const reportContent = `
        AI Video Consultation Summary:
        --------------------------------
        - Recommended Career Paths: 
          1. Frontend Developer (92%)
          2. UX/UI Designer (87%)
          3. Full Stack Developer (83%)
        
        - Skill Recommendations:
          1. Strengthen JavaScript fundamentals
          2. Learn React framework in depth
          3. Develop UI/UX design principles
        
        - Next Steps:
          1. Complete the Advanced JavaScript course
          2. Build a portfolio project using React
          3. Explore internship opportunities
      `;
      const blob = new Blob([reportContent], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Consultation_Report.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Live AI Video Consultation</CardTitle>
          <CardDescription>Speak with our AI career mentor to get personalized guidance</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            {stream ? (
              <video ref={videoRef} autoPlay playsInline className="w-full h-full" />
            ) : (
              <Button onClick={startConsultation}>Start Consultation</Button>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button variant="outline" size="icon" onClick={toggleMic}>
            {micOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="icon" onClick={toggleVideo}>
            {videoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
          </Button>
          <Button variant="destructive" onClick={endConsultation}>
            End Consultation
          </Button>
          <Button onClick={downloadReport}>
            <Download className="mr-2 h-4 w-4" />
            Download Full Report
          </Button>
        </CardFooter>
      </Card>
    );
}

function ChatConsultation() {
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>([
    { sender: "ai", message: "Hello! I'm your AI career advisor. How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", message: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = {
        sender: "ai",
        message: "That's an interesting question! Let me analyze it and provide some insights.",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Chat Consultation</CardTitle>
        <CardDescription>Chat with our AI career advisor</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <ChatMessage key={index} sender={msg.sender} message={msg.message} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-2">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <Button size="icon" onClick={sendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

function ChatMessage({ sender, message }: { sender: string; message: string }) {
  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`flex gap-3 max-w-[80%] ${sender === "user" ? "flex-row-reverse" : ""}`}>
        <Avatar className={sender === "ai" ? "bg-purple-100" : "bg-blue-100"}>
          <AvatarFallback>{sender === "ai" ? "AI" : "You"}</AvatarFallback>
        </Avatar>
        <div className={`rounded-lg p-3 ${sender === "ai" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}
