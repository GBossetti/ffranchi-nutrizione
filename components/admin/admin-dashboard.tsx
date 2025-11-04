import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, Download, Calendar, TrendingUp, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AdminDashboard() {
  const stats = [
    {
      title: "Total Patients",
      value: "48",
      change: "+4 this month",
      icon: Users,
      trend: "up",
    },
    {
      title: "Blog Posts",
      value: "24",
      change: "3 drafts",
      icon: FileText,
      trend: "neutral",
    },
    {
      title: "Resource Downloads",
      value: "18.2K",
      change: "+12% this month",
      icon: Download,
      trend: "up",
    },
    {
      title: "Appointments",
      value: "12",
      change: "This week",
      icon: Calendar,
      trend: "neutral",
    },
  ]

  const recentActivity = [
    {
      type: "patient",
      message: "New patient registration: Emma Wilson",
      time: "2 hours ago",
    },
    {
      type: "blog",
      message: "Blog post published: Understanding Macronutrients",
      time: "5 hours ago",
    },
    {
      type: "resource",
      message: "Resource downloaded 45 times: Weekly Meal Planner",
      time: "1 day ago",
    },
    {
      type: "appointment",
      message: "Appointment scheduled with James Martinez",
      time: "1 day ago",
    },
  ]

  const popularContent = [
    {
      title: "Understanding Macronutrients",
      views: 2456,
      type: "Blog Post",
    },
    {
      title: "Weekly Meal Planner Template",
      views: 1243,
      type: "Resource",
    },
    {
      title: "Pre & Post Workout Nutrition",
      views: 1098,
      type: "Blog Post",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-primary" />}
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                  <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Content */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {popularContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between pb-3 border-b last:border-0">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{content.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{content.type}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    {content.views.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button className="w-full" asChild>
              <Link href="/patients">View Patients</Link>
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              Create Blog Post
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              Upload Resource
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              Schedule Appointment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
