"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProtectedRoute } from "@/components/protected-route"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlogManagement } from "@/components/admin/blog-management"
import { ResourceManagement } from "@/components/admin/resource-management"
import { SettingsPanel } from "@/components/admin/settings-panel"

export default function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={["nutritionist"]}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 bg-accent/30">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Admin Panel</h1>
              <p className="text-muted-foreground">Manage your content, patients, and platform settings</p>
            </div>

            <Tabs defaultValue="dashboard" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 lg:w-auto">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard">
                <AdminDashboard />
              </TabsContent>

              <TabsContent value="blog">
                <BlogManagement />
              </TabsContent>

              <TabsContent value="resources">
                <ResourceManagement />
              </TabsContent>

              <TabsContent value="settings">
                <SettingsPanel />
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
