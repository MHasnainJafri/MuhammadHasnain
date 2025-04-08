"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SectionContainer, SectionHeader } from "@/components/ui/section-container"
import { ScrollReveal, StaggeredContainer, StaggerItem } from "@/components/ui/scroll-reveal"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"
import {
  Code,
  Cpu,
  Database,
  Cloud,
  BookOpen,
  PenToolIcon as Tool,
  Microscope,
  Laptop,
  BarChart3,
  Globe,
  MessageSquare,
  Shield,
  Zap,
  Briefcase,
  Loader2,
  Layout,
} from "lucide-react"

// Dynamically import the 3D globe component with no SSR
const SkillsGlobe = dynamic(() => import("@/components/3d-skills-globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <span className="ml-2">Loading 3D Globe...</span>
    </div>
  ),
})

// Skill categories with icons
const skillCategories = [
  {
    id: "laravel",
    name: "Laravel/PHP",
    icon: <Code className="h-5 w-5" />, // Or use a PHP/Laravel-specific icon if available
    color: "from-red-500 to-rose-500", // Laravel's red color theme
    description: "Backend architecture, APIs, microservices, and package development."
  },
  {
    id: "frontend",
    name: "Frontend (React/Vue)",
    icon: <Layout className="h-5 w-5" />,
    color: "from-blue-500 to-indigo-500",
    description: "Modern UI development with React.js, Vue.js, and admin panels."
  },
  {
    id: "database",
    name: "Databases",
    icon: <Database className="h-5 w-5" />,
    color: "from-emerald-500 to-green-500",
    description: "PostgreSQL, MySQL, query optimization, and multi-database systems."
  },
  {
    id: "devops",
    name: "DevOps & Servers",
    icon: <Cloud className="h-5 w-5" />,
    color: "from-amber-500 to-orange-500",
    description: "AWS, DigitalOcean, Docker, CI/CD, Nginx/Apache, and 99.9% uptime."
  },
  {
    id: "security",
    name: "Security",
    icon: <Shield className="h-5 w-5" />,
    color: "from-purple-500 to-violet-500",
    description: "Keycloak, RBAC, server hardening, and vulnerability reduction."
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    icon: <Tool className="h-5 w-5" />,
    color: "from-cyan-500 to-blue-500",
    description: "Payment gateways (Authorize.net), Flutter API integration, and more."
  }
];

// Skill data
const skillsData = {
  // Backend & Laravel
  "laravel": [
    { name: "Laravel", level: 95 },
    { name: "PHP", level: 90 },
    { name: "RESTful APIs", level: 90 },
    { name: "Microservices", level: 85 },
    { name: "PHP Package Development", level: 80 },
    { name: "Keycloak/RBAC", level: 85 },
    { name: "Payment Gateways", level: 80 },
  ],

  // Frontend
  "frontend": [
    { name: "React.js", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "Admin Panel Development", level: 85 },
    { name: "Flutter API Integration", level: 75 },
  ],

  // Databases
  "database": [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Query Optimization", level: 90 },
    { name: "Database Indexing", level: 85 },
    { name: "Redis Caching", level: 80 },
  ],

  // DevOps & Cloud
  "devops": [
    { name: "AWS", level: 85 },
    { name: "Docker", level: 90 },
    { name: "CI/CD Pipelines", level: 85 },
    { name: "Nginx/Apache", level: 90 },
    { name: "Server Management", level: 95 },
    { name: "DigitalOcean/VPS", level: 85 },
    { name: "Linux/Unix", level: 90 },
  ],

  // Security
  "security": [
    { name: "SSL/TLS", level: 85 },
    { name: "Firewall Configuration", level: 80 },
    { name: "Server Hardening", level: 90 },
    { name: "Vulnerability Mitigation", level: 85 },
  ],

  // Tools & Platforms
  "tools": [
    { name: "Git/GitHub", level: 95 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Composer", level: 80 },
    { name: "Jira/Trello", level: 75 },
  ],

  // Leadership & Soft Skills
  "transferable": [
    { name: "Team Leadership", level: 90 },
    { name: "Mentoring", level: 85 },
    { name: "Project Management", level: 80 },
    { name: "Technical Documentation", level: 90 },
    { name: "Client Communication", level: 85 },
  ],
};

export default function RedesignedSkills() {
  const [activeCategory, setActiveCategory] = useState("laravel")
  const [visualizationType, setVisualizationType] = useState<"chart" | "globe">("chart")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <SectionContainer id="skills" className="bg-gradient-to-b from-background to-background/95">
     <SectionHeader
  title="Technical Skills"
  subtitle="A deep dive into my expertise in full-stack development, DevOps, and scalable system architecture—powered by Laravel, cloud technologies, and modern frameworks."
/>

      <ScrollReveal>
        <Tabs defaultValue="laravel" onValueChange={setActiveCategory} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : "bg-muted hover:bg-muted/80",
                )}
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-full p-1 flex">
              <button
                onClick={() => setVisualizationType("chart")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  visualizationType === "chart" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted/80",
                )}
              >
                <BarChart3 className="h-4 w-4" />
                <span>Chart View</span>
              </button>
              {/* <button
                onClick={() => setVisualizationType("globe")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  visualizationType === "globe" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted/80",
                )}
              >
                <Globe className="h-4 w-4" />
                <span>3D Globe</span>
              </button> */}
            </div>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card className="border-none bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  {visualizationType === "chart" ? (
                    <StaggeredContainer className="grid md:grid-cols-2 gap-8">
                      {/* Left column - Skill bars */}
                      <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                          {category.icon}
                          <span>{category.name} Proficiency</span>
                        </h3>

                        <div className="space-y-6">
                          {skillsData[category.id as keyof typeof skillsData].map((skill, index) => (
                            <StaggerItem key={skill.name} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{skill.name}</span>
                                <Badge
                                  className={cn(
                                    "px-2 py-0.5 text-xs",
                                    skill.level >= 90
                                      ? "bg-green-500/20 text-green-500 border-green-500/30"
                                      : skill.level >= 75
                                        ? "bg-blue-500/20 text-blue-500 border-blue-500/30"
                                        : "bg-amber-500/20 text-amber-500 border-amber-500/30",
                                  )}
                                >
                                  {skill.level}%
                                </Badge>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                            </StaggerItem>
                          ))}
                        </div>
                      </div>

                      {/* Right column - Skill visualization */}
                      <div className="flex items-center justify-center">
                        {isMounted && (
                          <SkillVisualization
                            category={category}
                            skills={skillsData[category.id as keyof typeof skillsData]}
                          />
                        )}
                      </div>
                    </StaggeredContainer>
                  ) : (
                    <div className="flex justify-center">{isMounted && <SkillsGlobe />}</div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </ScrollReveal>

      <div className="mt-12 text-center">
      <ScrollReveal>
  <p className="text-muted-foreground">
    My technical skills reflect 4+ years of delivering production-grade Laravel applications, 
    from RESTful APIs to real-time admin panels—all optimized for scalability, security, 
    and cross-service synchronization.
  </p>
</ScrollReveal>
      </div>
    </SectionContainer>
  )
}

interface SkillVisualizationProps {
  category: (typeof skillCategories)[0]
  skills: { name: string; level: number }[]
}

function SkillVisualization({ category, skills }: SkillVisualizationProps) {
  // Helper function to safely extract colors from gradient string
  const getColorFromGradient = (gradientString: string, position: "from" | "to") => {
    // Default colors in case parsing fails
    const defaultColors = {
      from: "#3b82f6", // blue-500
      to: "#6366f1", // indigo-500
    }

    try {
      // Find the part that starts with 'from-' or 'to-'
      const parts = gradientString.split(" ")
      const colorPart = parts.find((part) => part.startsWith(position + "-"))

      if (!colorPart) return defaultColors[position]

      // Extract the color name (e.g., 'blue-500' from 'from-blue-500')
      const colorName = colorPart.replace(position + "-", "")

      // Map color names to actual hex values
      // This is a simplified mapping - you might want to expand this
      const colorMap: Record<string, string> = {
        "blue-500": "#3b82f6",
        "indigo-500": "#6366f1",
        "purple-500": "#8b5cf6",
        "violet-500": "#8b5cf6",
        "emerald-500": "#10b981",
        "green-500": "#22c55e",
        "amber-500": "#f59e0b",
        "yellow-500": "#eab308",
        "sky-500": "#0ea5e9",
        "rose-500": "#f43f5e",
        "pink-500": "#ec4899",
        "orange-500": "#f97316",
        "cyan-500": "#06b6d4",
        "teal-500": "#14b8a6",
        "red-500": "#ef4444",
      }

      return colorMap[colorName] || defaultColors[position]
    } catch (error) {
      console.error("Error parsing gradient color:", error)
      return defaultColors[position]
    }
  }

  // Create a radar chart visualization
  const numSkills = skills.length
  const angleStep = (Math.PI * 2) / numSkills

  // Calculate coordinates for each skill point
  const skillPoints = skills.map((skill, i) => {
    const angle = i * angleStep - Math.PI / 2 // Start from top
    const radius = (skill.level / 100) * 120 // Scale to fit in container
    return {
      x: 150 + radius * Math.cos(angle),
      y: 150 + radius * Math.sin(angle),
      name: skill.name,
      level: skill.level,
    }
  })

  // Create polygon points string
  const polygonPoints = skillPoints.map((point) => `${point.x},${point.y}`).join(" ")

  return (
    <div className="relative w-[300px] h-[300px]">
      <svg width="300" height="300" viewBox="0 0 300 300">
        {/* Background circles */}
        {[25, 50, 75, 100].map((level) => (
          <circle
            key={level}
            cx="150"
            cy="150"
            r={(level / 100) * 120}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {Array.from({ length: numSkills }).map((_, i) => {
          const angle = i * angleStep - Math.PI / 2
          const x2 = 150 + 120 * Math.cos(angle)
          const y2 = 150 + 120 * Math.sin(angle)
          return (
            <line key={i} x1="150" y1="150" x2={x2} y2={y2} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
          )
        })}

        {/* Skill polygon */}
        <motion.polygon
          points={polygonPoints}
          fill={`url(#gradient-${category.id})`}
          fillOpacity="0.3"
          stroke={`url(#gradient-${category.id})`}
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id={`gradient-${category.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            {/* Extract colors safely from the gradient string */}
            <stop offset="0%" stopColor={getColorFromGradient(category.color, "from")} />
            <stop offset="100%" stopColor={getColorFromGradient(category.color, "to")} />
          </linearGradient>
        </defs>

        {/* Skill points */}
        {skillPoints.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="white"
            stroke={`url(#gradient-${category.id})`}
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          />
        ))}

        {/* Skill labels */}
        {skillPoints.map((point, i) => {
          const angle = i * angleStep - Math.PI / 2
          const labelRadius = 135
          const labelX = 150 + labelRadius * Math.cos(angle)
          const labelY = 150 + labelRadius * Math.sin(angle)

          // Adjust text anchor based on position
          const textAnchor =
            angle > -Math.PI / 4 && angle < Math.PI / 4
              ? "start"
              : angle > (Math.PI * 3) / 4 || angle < (-Math.PI * 3) / 4
                ? "end"
                : "middle"

          // Adjust vertical alignment
          const dy =
            angle > Math.PI / 4 && angle < (Math.PI * 3) / 4
              ? "0.8em"
              : angle > (-Math.PI * 3) / 4 && angle < -Math.PI / 4
                ? "-0.5em"
                : "0.3em"

          return (
            <motion.text
              key={i}
              x={labelX}
              y={labelY}
              textAnchor={textAnchor}
              dy={dy}
              fontSize="10"
              fill="currentColor"
              fillOpacity="0.7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 + 0.3 }}
            >
              {point.name}
            </motion.text>
          )
        })}
      </svg>
    </div>
  )
}
