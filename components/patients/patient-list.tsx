"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, Plus, Eye, Mail, Phone } from "lucide-react"

const mockPatients = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    phone: "(555) 123-4567",
    program: "Weight Management",
    status: "Active",
    lastVisit: "2024-01-15",
    nextAppointment: "2024-01-22",
  },
  {
    id: 2,
    name: "James Martinez",
    email: "james.m@email.com",
    phone: "(555) 234-5678",
    program: "Sports Nutrition",
    status: "Active",
    lastVisit: "2024-01-14",
    nextAppointment: "2024-01-21",
  },
  {
    id: 3,
    name: "Sophia Chen",
    email: "sophia.chen@email.com",
    phone: "(555) 345-6789",
    program: "Diabetes Management",
    status: "Active",
    lastVisit: "2024-01-13",
    nextAppointment: "2024-01-20",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.b@email.com",
    phone: "(555) 456-7890",
    program: "General Wellness",
    status: "Inactive",
    lastVisit: "2023-12-10",
    nextAppointment: null,
  },
  {
    id: 5,
    name: "Olivia Taylor",
    email: "olivia.t@email.com",
    phone: "(555) 567-8901",
    program: "Digestive Health",
    status: "Active",
    lastVisit: "2024-01-12",
    nextAppointment: "2024-01-19",
  },
]

export function PatientList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<(typeof mockPatients)[0] | null>(null)

  const filteredPatients = mockPatients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.program.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Patient Records</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search patients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Patient
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Next Appointment</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="font-medium">{patient.name}</TableCell>
                  <TableCell>{patient.program}</TableCell>
                  <TableCell>
                    <Badge variant={patient.status === "Active" ? "default" : "secondary"}>{patient.status}</Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(patient.lastVisit).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>
                    {patient.nextAppointment
                      ? new Date(patient.nextAppointment).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-2" onClick={() => setSelectedPatient(patient)}>
                          <Eye className="h-4 w-4" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Patient Details</DialogTitle>
                          <DialogDescription>View and manage patient information</DialogDescription>
                        </DialogHeader>
                        {selectedPatient && (
                          <div className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground mb-1">Full Name</h3>
                                <p className="text-lg font-semibold">{selectedPatient.name}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground mb-1">Status</h3>
                                <Badge variant={selectedPatient.status === "Active" ? "default" : "secondary"}>
                                  {selectedPatient.status}
                                </Badge>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{selectedPatient.email}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{selectedPatient.phone}</span>
                              </div>
                            </div>

                            <div className="rounded-lg bg-accent/50 p-4">
                              <h3 className="font-semibold mb-2">Current Program</h3>
                              <p className="text-sm text-muted-foreground">{selectedPatient.program}</p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground mb-1">Last Visit</h3>
                                <p className="text-sm">
                                  {new Date(selectedPatient.lastVisit).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground mb-1">Next Appointment</h3>
                                <p className="text-sm">
                                  {selectedPatient.nextAppointment
                                    ? new Date(selectedPatient.nextAppointment).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                      })
                                    : "Not scheduled"}
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Button className="flex-1">Edit Patient</Button>
                              <Button variant="outline" className="flex-1 bg-transparent">
                                View History
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
