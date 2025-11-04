"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProtectedRoute } from "@/components/protected-route"
import { PatientList } from "@/components/patients/patient-list"
import { PatientStats } from "@/components/patients/patient-stats"

export default function PatientsPage() {
  return (
    <ProtectedRoute allowedRoles={["nutritionist"]}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 bg-accent/30">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Patient Management</h1>
              <p className="text-muted-foreground">View and manage your patient records, appointments, and progress</p>
            </div>
            <PatientStats />
            <PatientList />
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
