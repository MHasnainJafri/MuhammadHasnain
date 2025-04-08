"use client"

import { useState } from "react"
import { ArrowRight, Code, ChevronRight, BarChart, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Case study data
const caseStudies = [
  {
    id: 1,
    title: "Potolo - Multi-Service Platform",
    icon: <Code className="h-5 w-5" />,
    description:
      "Designed and built a large-scale multi-service platform with microservices-based architecture, supporting multi-country operations and over ten distinct user roles.",
    metrics: [
      { value: "30%", label: "Performance Improvement" },
      { value: "99.9%", label: "System Uptime" },
      { value: "15%", label: "Team Productivity Increase" },
    ],
    timeline: [
      { phase: "Planning", duration: "1 month" },
      { phase: "Development", duration: "6 months" },
      { phase: "Optimization", duration: "2 months" },
    ],
    technologies: [
      "Laravel",
      "Flutter",
      "Keycloak",
      "Authorize.net",
      "MySQL",
      "Redis",
      "Docker",
    ],
    bgColor: "from-blue-900/50 to-purple-900/50",
    details: {
      overview:
        "This case study explores the development of Potolo, a large-scale multi-service platform designed for industries such as food delivery, e-commerce, ride-hailing, logistics, and ticketing. The system was built using Laravel and microservices architecture to ensure scalability and reliability across multiple countries.",
      challenges: [
        "Designing a scalable architecture to support multiple services and countries",
        "Implementing secure authentication and role-based access control (RBAC) for diverse user roles",
        "Ensuring high performance and low latency for real-time data synchronization",
      ],
      solutions: [
        "Built a multi-database, multi-service infrastructure in Laravel for efficient cross-service communication",
        "Integrated Keycloak for secure authentication and granular RBAC permissions",
        "Developed a centralized payment infrastructure using Authorize.net and multiple gateways",
        "Optimized database indexing, caching mechanisms, and query structures to reduce response times by 30%",
      ],
      results:
        "The platform successfully supported multi-country operations and over ten distinct user roles. It achieved 99.9% uptime and reduced response times by 30%. Additionally, team productivity increased by 15% through mentorship and best practices.",
    },
  },
  {
    id: 2,
    title: "XoBlack - Social Media and Service Booking Platform",
    icon: <Code className="h-5 w-5" />,
    description:
      "Architected a multi-service social media platform integrating event booking, food ordering, barber appointments, ticketing, community forums, directories, and an e-commerce shop.",
    metrics: [
      { value: "10x", label: "API Performance Improvement" },
      { value: "99.9%", label: "System Reliability" },
      { value: "40%", label: "Cost Reduction" },
    ],
    timeline: [
      { phase: "Research", duration: "1 month" },
      { phase: "Development", duration: "4 months" },
      { phase: "Testing", duration: "2 months" },
    ],
    technologies: [
      "Laravel",
      "Flutter",
      "MySQL",
      "Redis",
      "Docker",
      "CI/CD",
      "Nginx",
    ],
    bgColor: "from-green-900/50 to-teal-900/50",
    details: {
      overview:
        "This case study details the development of XoBlack, a multi-service social media platform that integrates event booking, food ordering, barber appointments, ticketing, community forums, directories, and an e-commerce shop. The backend was built using Laravel, and APIs were optimized for seamless communication with Flutter mobile applications.",
      challenges: [
        "Building a scalable backend to handle multiple services and real-time interactions",
        "Ensuring high performance and reliability for APIs consumed by Flutter apps",
        "Integrating diverse features such as service booking, directories, and social media functionalities",
      ],
      solutions: [
        "Developed RESTful APIs for seamless communication between Laravel microservices and Flutter apps",
        "Implemented caching, database indexing, and optimized query structures to improve API performance by 10x",
        "Collaborated with DevOps teams to establish CI/CD pipelines for automated deployments",
        "Engineered a scalable notification system for real-time updates on event bookings, order statuses, and social interactions",
      ],
      results:
        "The platform achieved 99.9% system reliability and improved API performance by 10x. Costs were reduced by 40% through efficient resource utilization and optimized infrastructure.",
    },
  },
];
export default function CaseStudies() {
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedCaseStudy(expandedCaseStudy === id ? null : id)
  }

  return (
    <section id="case-studies" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
<h2 className="text-3xl font-bold text-center mb-4">Case Studies</h2>
<p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
  Architectural breakdowns of production Laravel systems handling 50k+ transactions monthly, featuring:
  Keycloak RBAC integration, multi-gateway payments, and real-time inventory management.
</p>
      </motion.div>

      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className={cn(
                "border-none overflow-hidden transition-all duration-500",
                `bg-gradient-to-br ${study.bgColor}`,
                expandedCaseStudy === study.id ? "shadow-xl" : "",
              )}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  {study.icon}
                  <CardTitle>{study.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{study.description}</p>
              </CardHeader>

              <CardContent>
                <div
                  className={cn(
                    "grid gap-6 transition-all duration-500",
                    expandedCaseStudy === study.id ? "md:grid-cols-1" : "md:grid-cols-2",
                  )}
                >
                  {expandedCaseStudy !== study.id && (
                    <>
                      <div>
                        <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                          <BarChart className="h-4 w-4" />
                          Key Metrics
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-3 text-center hover:bg-black/30 transition-colors"
                            >
                              <div className="text-xl font-bold">{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-sm font-medium flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Timeline
                          </h4>
                          <div className="flex gap-2">
                            {study.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          {study.timeline.map((item, i) => (
                            <div key={i} className="flex justify-between items-center">
                              <span>{item.phase}</span>
                              <span className="text-xs text-muted-foreground">{item.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {expandedCaseStudy === study.id && (
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid grid-cols-3 mb-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="team">Team</TabsTrigger>
                      </TabsList>

                      <TabsContent value="overview" className="space-y-4">
                        <p>{study.details.overview}</p>

                        <div className="grid md:grid-cols-3 gap-4 mt-6">
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors"
                            >
                              <div className="text-2xl font-bold">{metric.value}</div>
                              <div className="text-sm text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {study.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="details" className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Challenges</h4>
                          <ul className="space-y-2">
                            {study.details.challenges.map((challenge, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 mt-1 text-primary" />
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2">Solutions</h4>
                          <ul className="space-y-2">
                            {study.details.solutions.map((solution, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 mt-1 text-primary" />
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2">Results</h4>
                          <p>{study.details.results}</p>
                        </div>

                        <div className="mt-4">
                          <h4 className="text-lg font-semibold mb-2">Timeline</h4>
                          <div className="space-y-0">
                            {study.timeline.map((item, i) => (
                              <div key={i} className="timeline-item">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium">{item.phase}</span>
                                  <span className="text-sm text-muted-foreground">{item.duration}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="team">
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">Team information coming soon.</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )}
                </div>

                <div className="mt-4 flex justify-end">
                  <Button variant="link" className="p-0 h-auto gap-1" onClick={() => toggleExpand(study.id)}>
                    {expandedCaseStudy === study.id ? (
                      <>View Less</>
                    ) : (
                      <>
                        Read Full Case Study
                        <ArrowRight className="h-3 w-3" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
