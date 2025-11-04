"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Edit, Trash2, Download } from "lucide-react"

const mockResources = [
  {
    id: 1,
    title: "Weekly Meal Planner Template",
    category: "Meal Plans",
    type: "PDF",
    downloads: 1243,
    size: "2.4 MB",
    date: "2023-12-01",
  },
  {
    id: 2,
    title: "Macronutrient Calculator Guide",
    category: "Calculators",
    type: "PDF",
    downloads: 892,
    size: "1.8 MB",
    date: "2023-11-15",
  },
  {
    id: 3,
    title: "Healthy Grocery Shopping List",
    category: "Guides",
    type: "PDF",
    downloads: 2156,
    size: "1.2 MB",
    date: "2023-11-01",
  },
  {
    id: 4,
    title: "Portion Control Visual Guide",
    category: "Guides",
    type: "PDF",
    downloads: 1567,
    size: "3.1 MB",
    date: "2023-10-20",
  },
]

export function ResourceManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResources = mockResources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Resources Management</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Upload Resource
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResources.map((resource) => (
                <TableRow key={resource.id}>
                  <TableCell className="font-medium">{resource.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{resource.category}</Badge>
                  </TableCell>
                  <TableCell>{resource.type}</TableCell>
                  <TableCell>{resource.downloads.toLocaleString()}</TableCell>
                  <TableCell>{resource.size}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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
