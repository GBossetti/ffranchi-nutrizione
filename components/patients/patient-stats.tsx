import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, TrendingUp, Clock } from "lucide-react"

export function PatientStats() {
  const stats = [
    {
      title: "Total Patients",
      value: "48",
      icon: Users,
      description: "+4 this month",
    },
    {
      title: "Appointments This Week",
      value: "12",
      icon: Calendar,
      description: "3 today",
    },
    {
      title: "Active Programs",
      value: "32",
      icon: TrendingUp,
      description: "67% completion rate",
    },
    {
      title: "Avg. Session Time",
      value: "45 min",
      icon: Clock,
      description: "Per consultation",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
