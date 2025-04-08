"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionContainer, SectionHeader } from "@/components/ui/section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { ErrorBoundary } from "@/components/error-boundary"
import {
  Calendar,
  MapPin,
  Building,
  ChevronRight,
  ChevronDown,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Target,
} from "lucide-react"

// Experience data
const experiences = [
  {
    id: "alright-tech",
    title: "Senior Laravel Developer",
    company: "Alright Tech Pvt LTD",
    location: "Rawalpindi, Punjab (Remote)",
    period: "Feb 2022 - Present",
    type: "work",
    description:
      "Led development of scalable Laravel applications with microservices architecture, payment integrations, and multi-country operations.",
    responsibilities: [
      "Built multi-service platform supporting food delivery, e-commerce, and logistics with 10+ user roles",
      "Designed RESTful APIs for Flutter apps with secure data exchange across services",
      "Integrated Keycloak for authentication and RBAC across admin panels and APIs",
      "Developed centralized super admin panel for real-time analytics and financial tracking",
      "Implemented payment processing system using Authorize.net and multiple gateways",
      "Optimized database performance through indexing and caching (30% faster response times)",
      "Mentored 5 junior developers, improving team productivity by 15%",
    ],
    skills: ["Laravel", "PHP", "Microservices", "React/Vue", "MySQL/PostgreSQL", "AWS", "Docker", "CI/CD"],
    metrics: [
      { value: "30%", label: "Performance improvement" },
      { value: "5", label: "Junior developers mentored" },
      { value: "10+", label: "User roles supported" },
    ],
    color: "from-red-600 to-orange-600", // Laravel's color theme
  },
  {
    id: "freelance",
    title: "Freelance Laravel Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2020 - Feb 2022",
    type: "work",
    description:
      "Delivered custom Laravel solutions for clients including e-commerce platforms, CMS systems, and API integrations.",
    responsibilities: [
      "Debugged and optimized PHP/Laravel applications for 20+ clients",
      "Deployed applications on AWS/DigitalOcean with 99.9% uptime",
      "Configured Nginx/Apache servers with Redis caching for high performance",
      "Implemented server hardening techniques (30% security vulnerability reduction)",
      "Built custom e-commerce platforms with inventory management",
      "Integrated third-party APIs (payment gateways, shipping providers)",
    ],
    skills: ["Laravel", "PHP", "AWS", "Nginx/Apache", "MySQL", "Redis", "Security"],
    metrics: [
      { value: "99.9%", label: "Uptime" },
      { value: "30%", label: "Security improvement" },
      { value: "20+", label: "Client projects" },
    ],
    color: "from-purple-600 to-violet-600",
  },
  {
    id: "education",
    title: "Bachelor of Software Engineering",
    company: "Arid Agriculture University",
    location: "Rawalpindi, Punjab",
    period: "July 2019 - May 2023",
    type: "education",
    description:
      "Completed degree while simultaneously building professional Laravel expertise through freelance work.",
    responsibilities: [
      "Balanced academic studies with freelance development projects",
      "Applied coursework knowledge to real-world web applications",
      "Specialized in database design and software architecture",
    ],
    skills: ["Software Architecture", "Database Design", "Project Management"],
    metrics: [
      { value: "4.0", label: "GPA" },
      { value: "15+", label: "Academic projects" },
    ],
    color: "from-blue-600 to-cyan-600",
  }
];

export default function RedesignedExperience() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)
  const [experienceType, setExperienceType] = useState<"all" | "work" | "education">("all")

  const toggleExpand = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id)
  }

  // Filter experiences based on type
  const filteredExperiences =
    experienceType === "all" ? experiences : experiences.filter((exp) => exp.type === experienceType)

  return (
    <SectionContainer id="experience" className="bg-gradient-to-b from-background/95 to-background">
     <SectionHeader
  title="Professional Journey"
  subtitle="My career highlights in building scalable web applications, leading development teams, and delivering high-impact Laravel solutions for global clients."
/>

      <ScrollReveal>
        <Tabs
          defaultValue="all"
          onValueChange={(value) => setExperienceType(value as "all" | "work" | "education")}
          className="w-full"
        >
          <div className="overflow-x-auto pb-2 no-scrollbar">
            <TabsList className="flex justify-center gap-2 mb-8 bg-transparent w-fit mx-auto">
              <TabsTrigger
                value="all"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  experienceType === "all" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
                )}
              >
                <div className="flex items-center gap-2">
                  <span>All Experience</span>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="work"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  experienceType === "work" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
                )}
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Work Experience</span>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="education"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  experienceType === "education" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
                )}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Education</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="space-y-6">
            {filteredExperiences.map((experience, index) => (
              <ErrorBoundary key={experience.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={cn("overflow-hidden border-none shadow-lg", `bg-gradient-to-br ${experience.color}/10`)}
                  >
                    <CardContent className="p-0">
                      <div
                        className={cn(
                          "p-4 sm:p-6 cursor-pointer transition-all duration-300",
                          expandedExperience === experience.id ? "pb-3" : "",
                        )}
                        onClick={() => toggleExpand(experience.id)}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div>
                            <Badge
                              className={cn(
                                "mb-2 px-3 py-1",
                                experience.type === "work"
                                  ? "bg-blue-500/20 text-blue-500 border-blue-500/30"
                                  : "bg-amber-500/20 text-amber-500 border-amber-500/30",
                              )}
                            >
                              {experience.type === "work" ? (
                                <Briefcase className="h-3 w-3 mr-1" />
                              ) : (
                                <GraduationCap className="h-3 w-3 mr-1" />
                              )}
                              {experience.type === "work" ? "Work Experience" : "Education"}
                            </Badge>
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                              {experience.title}
                              <motion.div
                                animate={{ rotate: expandedExperience === experience.id ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {expandedExperience === experience.id ? (
                                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                )}
                              </motion.div>
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Building className="h-4 w-4" />
                                <span>{experience.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{experience.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{experience.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground">{experience.description}</p>
                      </div>

                      <AnimatePresence>
                        {expandedExperience === experience.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-6">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t">
                                <div>
                                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Award className="h-5 w-5 text-primary" />
                                    Key Responsibilities
                                  </h4>
                                  <ul className="space-y-2">
                                    {experience.responsibilities.map((responsibility, i) => (
                                      <li key={i} className="flex items-start gap-2">
                                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                          <span className="text-xs text-primary">✓</span>
                                        </div>
                                        <span className="text-sm sm:text-base">{responsibility}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  <div className="mt-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                      <Users className="h-5 w-5 text-primary" />
                                      Skills Applied
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {experience.skills.map((skill, i) => (
                                        <Badge key={i} variant="secondary">
                                          {skill}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Target className="h-5 w-5 text-primary" />
                                    Key Metrics & Achievements
                                  </h4>

                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                    {experience.metrics.map((metric, i) => (
                                      <div key={i} className="bg-primary/10 rounded-lg p-3 text-center">
                                        <div className="text-xl sm:text-2xl font-bold">{metric.value}</div>
                                        <div className="text-xs sm:text-sm text-muted-foreground">{metric.label}</div>
                                      </div>
                                    ))}
                                  </div>

                                  {experience.type === "work" && (
                                    <div className="mt-4">
                                      <Button variant="outline" className="w-full">
                                        View Reference Letter
                                      </Button>
                                    </div>
                                  )}

                                  {experience.type === "education" && (
                                    <div className="mt-4">
                                      <Button variant="outline" className="w-full">
                                        View Transcript
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              </ErrorBoundary>
            ))}
          </div>
        </Tabs>
      </ScrollReveal>
    </SectionContainer>
  )
}
