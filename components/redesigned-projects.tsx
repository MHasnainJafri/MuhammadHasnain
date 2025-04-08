"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { SectionContainer, SectionHeader } from "@/components/ui/section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { useIsClient } from "@/hooks/use-is-client"
import { ErrorBoundary } from "@/components/error-boundary"
import {
  ExternalLink,
  Github,
  Code,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Star,
  Layers,
  Cpu,
  Globe,
  Database,
  BookOpen,
  Share2,
  Shield,
  MessageSquare,
  Zap,
  Loader2,
  Server,
} from "lucide-react"

// Project categories
const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development", icon: <Globe className="h-4 w-4" /> },
  { id: "api", name: "API Development", icon: <Code className="h-4 w-4" /> },
  { id: "microservices", name: "Microservices", icon: <Layers className="h-4 w-4" /> },
  { id: "performance", name: "Performance Optimization", icon: <Zap className="h-4 w-4" /> },
  { id: "security", name: "Security", icon: <Shield className="h-4 w-4" /> },
  { id: "devops", name: "DevOps", icon: <Server className="h-4 w-4" /> },
];

// Project data
const projects = [
  {
    id: 1,
    title: "Potolo - Multi-Service Platform",
    category: "web",
    description:
      "A large-scale multi-service platform with microservices-based architecture, supporting industries like food delivery, e-commerce, ride-hailing, logistics, and ticketing.",
    longDescription:
      "Designed and built a scalable multi-service platform with microservices architecture, supporting multi-country operations and over ten distinct user roles. Integrated Keycloak for secure authentication and role-based access control (RBAC), ensuring granular user permissions across services. Engineered RESTful APIs for seamless communication between Laravel microservices and Flutter mobile applications.",
    technologies: ["Laravel", "Flutter", "Keycloak", "Authorize.net", "MySQL", "Redis", "Docker"],
    imageUrl: "/PotoloDashboar.png",
    demoUrl: "https://dev.potolo.net",
    githubUrl: "https://github.com/MHasnainJafri",
    color: "from-blue-600 to-violet-600",
    featured: true,
    completed: "Dec 2022 - Oct 2024",
    teamSize: 5,
    difficulty: 5,
    achievements: [
      "Reduced response times by 30% through database indexing, query optimization, and caching mechanisms.",
      "Built a centralized payment infrastructure using Authorize.net and multiple gateways.",
      "Developed a high-performance admin panel with country-specific dashboards for financial tracking.",
      "Implemented a real-time chat and customer support system, improving user experience.",
    ],
  },
  {
    id: 2,
    title: "XoBlack - Social Media and Service Booking Platform",
    category: "api",
    description:
      "A multi-service social media platform integrating event booking, food ordering, barber appointments, ticketing, community forums, directories, and an e-commerce shop.",
    longDescription:
      "Architected a multi-service social media platform with Laravel backend APIs and Flutter mobile applications. Developed APIs for features like user profiles, real-time community interactions, and video shorts. Integrated service booking and directory listings, enabling businesses to manage their offerings within the platform.",
    technologies: ["Laravel", "Flutter", "MySQL", "Redis", "Docker", "CI/CD", "Nginx"],
    imageUrl: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://dev.xoblack.com",
    githubUrl: "https://github.com/MHasnainJafri",
    color: "from-green-600 to-teal-600",
    featured: false,
    completed: "Jan 2024 - Oct 2024",
    teamSize: 4,
    difficulty: 4,
    achievements: [
      "Engineered APIs for seamless communication between Laravel microservices and Flutter apps.",
      "Implemented a scalable notification system for real-time updates on bookings and interactions.",
      "Optimized system performance through caching, database indexing, and query improvements.",
      "Collaborated with DevOps teams to establish CI/CD pipelines for automated deployments.",
    ],
  },
];

export default function RedesignedProjects() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()
  const isClient = useIsClient()

  // Get featured projects
  const featuredProjects = projects.filter((project) => project.featured)

  // Filter projects based on category
  const filteredProjects =
    selectedCategory === "all"
      ? projects.filter((project) => !project.featured)
      : projects.filter((project) => project.category === selectedCategory && !project.featured)

  const handleNext = () => {
    if (!isClient) return
    setDirection(1)
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const handlePrev = () => {
    if (!isClient) return
    setDirection(-1)
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  const handleDemoClick = (url: string) => {
    if (!isClient) return
    toast({
      title: "Demo Link",
      description: "Opening demo in a new tab...",
      duration: 3000,
    })
    window.open(url, "_blank")
  }

  // Simulate loading delay
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isClient])

  // If not client-side yet, show a loading state
  if (!isClient || isLoading) {
    return (
      <SectionContainer id="projects" className="relative">
        <SectionHeader
          title="Project Portfolio"
          subtitle="Explore my portfolio of AI, machine learning, and software development projects."
        />
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
          <span>Loading projects...</span>
        </div>
      </SectionContainer>
    )
  }

  return (
    <SectionContainer id="projects" className="relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />

      <SectionHeader
        title="Project Portfolio"
        subtitle="Explore my portfolio of AI, machine learning, and software development projects. Each project demonstrates different skills and technologies."
      />

      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 justify-center">
              <Layers className="h-5 w-5 text-primary" />
              <span>Featured Projects</span>
            </h3>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative rounded-xl overflow-hidden">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={featuredProjects[currentFeaturedIndex].id}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? 1000 : -1000,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  exit={{
                    x: direction > 0 ? -1000 : 1000,
                    opacity: 0,
                    transition: {
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  className="relative w-full aspect-[16/9]"
                >
                  <div className="absolute inset-0 flex flex-col md:flex-row">
                    <div className="relative w-full h-48 md:h-auto md:w-1/2">
                      <Image
                        src={featuredProjects[currentFeaturedIndex].imageUrl || "/placeholder.svg"}
                        alt={featuredProjects[currentFeaturedIndex].title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    <div
                      className={cn(
                        "w-full md:w-1/2 p-6 flex flex-col justify-center opacity-90 bg-gradient-to-r",
                        featuredProjects[currentFeaturedIndex].color,
                      )}
                    >
                      <Badge
                        variant="outline"
                        className="w-fit mb-4 bg-black/50 backdrop-blur-sm text-white border-white/20"
                      >
                        Featured Project
                      </Badge>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                        {featuredProjects[currentFeaturedIndex].title}
                      </h3>
                      <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base line-clamp-3 md:line-clamp-none">
                        {featuredProjects[currentFeaturedIndex].description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                        {featuredProjects[currentFeaturedIndex].technologies.slice(0, 3).map((tech, index) => (
                          <Badge
                            key={index}
                            className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {featuredProjects[currentFeaturedIndex].technologies.length > 3 && (
                          <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm">
                            +{featuredProjects[currentFeaturedIndex].technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button
                          className="bg-white text-black hover:bg-white/90 group text-sm"
                          onClick={() => handleDemoClick(featuredProjects[currentFeaturedIndex].demoUrl)}
                        >
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white/20 gap-2 text-sm"
                          asChild
                        >
                          <a
                            href={featuredProjects[currentFeaturedIndex].githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white/20 gap-2 text-sm"
                          onClick={() => {
                            setSelectedProject(featuredProjects[currentFeaturedIndex])
                            setIsDialogOpen(true)
                          }}
                        >
                          <Code className="h-4 w-4" />
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation controls */}
              <Button
                size="icon"
                variant="ghost"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Progress dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      currentFeaturedIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80",
                    )}
                    onClick={() => {
                      setDirection(index > currentFeaturedIndex ? 1 : -1)
                      setCurrentFeaturedIndex(index)
                    }}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}

      <ScrollReveal>
        <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full">
          <div className="overflow-x-auto pb-2 no-scrollbar">
            <TabsList className="flex justify-start gap-2 mb-8 bg-transparent w-max mx-auto">
              {projectCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all data-[state=active]:shadow-lg whitespace-nowrap",
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80",
                  )}
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    {category.icon && category.icon}
                    <span>{category.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ErrorBoundary key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard
                      project={project}
                      onSelect={() => {
                        setSelectedProject(project)
                        setIsDialogOpen(true)
                      }}
                    />
                  </motion.div>
                </ErrorBoundary>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </ScrollReveal>

      {/* Project details dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 w-[95vw]">
          {selectedProject && (
            <div className="flex flex-col h-full">
              <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-2">
                      {selectedProject.category === "ai"
                        ? "AI & Machine Learning"
                        : selectedProject.category === "web"
                          ? "Web Development"
                          : selectedProject.category === "data"
                            ? "Data Science"
                            : selectedProject.category === "audio"
                              ? "Audio & Voice Tech"
                              : "Research"}
                    </Badge>
                    <DialogTitle className="text-xl sm:text-2xl">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="mt-2 text-sm">{selectedProject.description}</DialogDescription>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs defaultValue="overview" className="flex-1 overflow-hidden">
                <div className="px-4 sm:px-6 border-b">
                  <TabsList className="justify-start rounded-none bg-transparent h-10">
                    <TabsTrigger value="overview" className="text-sm">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="details" className="text-sm">
                      Details
                    </TabsTrigger>
                    <TabsTrigger value="gallery" className="text-sm">
                      Gallery
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                  <TabsContent value="overview" className="mt-0 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h4 className="text-lg font-semibold mb-3">Project Details</h4>
                        <p className="mb-6 text-sm sm:text-base">{selectedProject.longDescription}</p>

                        <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2 mb-6">
                          {selectedProject.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <span className="text-xs text-primary">✓</span>
                              </div>
                              <span className="text-sm sm:text-base">{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() => handleDemoClick(selectedProject.demoUrl)}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Button>
                          <Button variant="outline" className="gap-2" asChild>
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Project Info</h4>
                        <div className="space-y-4">
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">Completed</span>
                            <span>{selectedProject.completed}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">Team Size</span>
                            <span>{selectedProject.teamSize} people</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">Difficulty</span>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="mt-0">
                    <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.imageUrl || "/placeholder.svg"}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Project Description</h4>
                        <p className="text-sm sm:text-base">{selectedProject.longDescription}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Implementation Details</h4>
                        <p className="text-sm sm:text-base">
                          This project was implemented using {selectedProject.technologies.join(", ")}. The development
                          process involved careful planning, iterative development, and rigorous testing to ensure
                          high-quality results.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Challenges & Solutions</h4>
                        <p className="text-sm sm:text-base">
                          During development, we encountered several challenges including performance optimization,
                          scalability concerns, and integration complexities. These were addressed through innovative
                          approaches and best practices in software engineering.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                          <Image
                            src={`/placeholder.svg?height=400&width=600&text=Screenshot ${index}`}
                            alt={`${selectedProject.title} screenshot ${index}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SectionContainer>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[0]
  onSelect: () => void
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isClient = useIsClient()

  return (
    <Card
      className="overflow-hidden h-full flex flex-col border-none shadow-md hover:shadow-lg transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isClient && isHovered ? "scale-110" : "scale-100",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-r",
            project.color,
          )}
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="outline" className="border-white text-white hover:bg-white/20" onClick={onSelect}>
            View Details
          </Button>
        </div>
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs">
            {project.category === "ai"
              ? "AI & ML"
              : project.category === "web"
                ? "Web Dev"
                : project.category === "data"
                  ? "Data Science"
                  : project.category === "audio"
                    ? "Audio"
                    : "Research"}
          </Badge>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
              />
            ))}
          </div>
        </div>

        <h3 className="font-bold mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{project.completed}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>Team: {project.teamSize}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
