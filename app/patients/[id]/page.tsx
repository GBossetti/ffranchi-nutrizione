"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProtectedRoute } from "@/components/protected-route"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Mail, Phone, TrendingUp, FileText, Apple } from "lucide-react"
import Link from "next/link"

// Mock patient data
const patientData = {
  id: 1,
  name: "Emma Wilson",
  email: "emma.wilson@email.com",
  phone: "(555) 123-4567",
  program: "Weight Management",
  status: "Active",
  joinDate: "2023-09-15",
  lastVisit: "2024-01-15",
  nextAppointment: "2024-01-22",
  goals: ["Lose 20 pounds in 6 months", "Improve energy levels", "Develop sustainable eating habits"],
  progress: [
    { date: "2023-09-15", weight: 185, notes: "Initial consultation" },
    { date: "2023-10-15", weight: 182, notes: "Good progress, following meal plan" },
    { date: "2023-11-15", weight: 178, notes: "Consistent exercise routine established" },
    { date: "2023-12-15", weight: 175, notes: "Holiday challenges discussed" },
    { date: "2024-01-15", weight: 172, notes: "Excellent adherence to plan" },
  ],
  notes: [
    {
      date: "2024-01-15",
      title: "Monthly Check-in",
      content:
        "Patient is doing excellent. Lost 3 pounds this month. Energy levels significantly improved. Discussed strategies for upcoming travel.",
    },
    {
      date: "2023-12-15",
      title: "Holiday Planning",
      content:
        "Reviewed strategies for managing holiday eating. Patient feels confident about maintaining progress through the season.",
    },
  ],
  mealPlan: {
    breakfast: "Greek yogurt with berries and granola",
    lunch: "Grilled chicken salad with olive oil dressing",
    dinner: "Baked salmon with roasted vegetables",
    snacks: "Apple with almond butter, mixed nuts",
  },
}

export default function PatientDetailPage() {
  return (
    <ProtectedRoute allowedRoles={["nutritionist"]}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 bg-accent/30">
          <div className="container mx-auto px-4 py-8">
            <Button variant="ghost" className="gap-2 mb-6" asChild>
              <Link href="/patients">
                <ArrowLeft className="h-4 w-4" />
                Back to Patients
              </Link>
            </Button>

            {/* Patient Header */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight mb-2">{patientData.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {patientData.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {patientData.phone}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button>Schedule Appointment</Button>
                  <Button variant="outline">Edit Patient</Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">Status</div>
                    <Badge variant="default">{patientData.status}</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">Program</div>
                    <div className="font-semibold">{patientData.program}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">Last Visit</div>
                    <div className="font-semibold">
                      {new Date(patientData.lastVisit).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">Next Appointment</div>
                    <div className="font-semibold">
                      {new Date(patientData.nextAppointment).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Patient Details Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="meal-plan">Meal Plan</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {patientData.goals.map((goal, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {patientData.progress
                          .slice(-3)
                          .reverse()
                          .map((entry, index) => (
                            <div key={index} className="flex justify-between items-center pb-3 border-b last:border-0">
                              <div>
                                <div className="font-semibold">{entry.weight} lbs</div>
                                <div className="text-sm text-muted-foreground">
                                  {new Date(entry.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground max-w-[200px]">{entry.notes}</div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Latest Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {patientData.notes.slice(0, 2).map((note, index) => (
                          <div key={index} className="pb-3 border-b last:border-0">
                            <div className="font-semibold mb-1">{note.title}</div>
                            <div className="text-sm text-muted-foreground mb-2">
                              {new Date(note.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                            <p className="text-sm">{note.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="progress">
                <Card>
                  <CardHeader>
                    <CardTitle>Weight Progress Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {patientData.progress.map((entry, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-accent/50">
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold">{entry.weight}</div>
                              <div className="text-xs text-muted-foreground">lbs</div>
                            </div>
                            <div>
                              <div className="font-semibold">
                                {new Date(entry.date).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </div>
                              <div className="text-sm text-muted-foreground">{entry.notes}</div>
                            </div>
                          </div>
                          {index > 0 && (
                            <Badge
                              variant={entry.weight < patientData.progress[index - 1].weight ? "default" : "secondary"}
                            >
                              {entry.weight - patientData.progress[index - 1].weight > 0 ? "+" : ""}
                              {entry.weight - patientData.progress[index - 1].weight} lbs
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Session Notes
                      </CardTitle>
                      <Button>Add Note</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {patientData.notes.map((note, index) => (
                        <div key={index} className="p-4 rounded-lg bg-accent/50">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold">{note.title}</h3>
                            <span className="text-sm text-muted-foreground">
                              {new Date(note.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="meal-plan">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Apple className="h-5 w-5" />
                        Current Meal Plan
                      </CardTitle>
                      <Button>Edit Plan</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="p-4 rounded-lg bg-accent/50">
                        <h3 className="font-semibold mb-2">Breakfast</h3>
                        <p className="text-sm text-muted-foreground">{patientData.mealPlan.breakfast}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent/50">
                        <h3 className="font-semibold mb-2">Lunch</h3>
                        <p className="text-sm text-muted-foreground">{patientData.mealPlan.lunch}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent/50">
                        <h3 className="font-semibold mb-2">Dinner</h3>
                        <p className="text-sm text-muted-foreground">{patientData.mealPlan.dinner}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent/50">
                        <h3 className="font-semibold mb-2">Snacks</h3>
                        <p className="text-sm text-muted-foreground">{patientData.mealPlan.snacks}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
