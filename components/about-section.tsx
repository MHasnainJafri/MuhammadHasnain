"use client"
import { SectionContainer, SectionHeader } from "@/components/ui/section-container"
import { ScrollReveal, StaggeredContainer, StaggerItem } from "@/components/ui/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Award, Briefcase, GraduationCap, Heart, ExternalLink, Code, Server, Settings, Database } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <SectionContainer id="about" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />

      <SectionHeader
        title="About Me"
        subtitle="Learn more about my journey, skillset, and passion for developing robust Laravel applications, API architectures, and DevOps pipelines."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/MuhammadHasnain.jpg"
                alt="Muhammad Hasnain"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Add an overlay with a subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">Muhammad Hasnain</p>
                  <p className="text-sm text-white/80">Senior Laravel Developer | Software Engineer </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-primary/50 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-lg -z-10" />

          
          </div>
        </ScrollReveal>

        <div >
          <StaggeredContainer>
            <StaggerItem>
              <h3 className="text-2xl font-bold mb-4">Senior Laravel Developer & Software Engineer </h3>
            </StaggerItem>

            <StaggerItem>
  <p className="text-muted-foreground mb-6">
    I'm a passionate Senior Software Engineer and Full-Stack Developer with a strong focus on Laravel, React.js, and scalable backend systems. With several years of hands-on experience, I specialize in building modern web applications, microservices, and API-first platforms optimized for performance, security, and scalability.
  </p>
</StaggerItem>

<StaggerItem>
  <p className="text-muted-foreground mb-6">
    My work spans from architecting robust DevOps pipelines and cloud deployments to leading the development of user-focused digital products. I'm committed to writing clean, maintainable code and leveraging tools like Docker, GitHub Actions, and CI/CD to streamline development workflows. I thrive on solving real-world problems with technology that’s built to last.
  </p>
</StaggerItem>


<StaggerItem>
  <div className="flex flex-wrap gap-3 mb-8">
    <Badge className="px-3 py-1.5 bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/30 transition-colors">
      <Briefcase className="h-3.5 w-3.5 mr-1" />
      Full-Stack Development
    </Badge>
    <Badge className="px-3 py-1.5 bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/30 transition-colors">
      <Code className="h-3.5 w-3.5 mr-1" />
      Laravel & React.js
    </Badge>
    <Badge className="px-3 py-1.5 bg-yellow-500/20 text-yellow-500 border-yellow-500/30 hover:bg-yellow-500/30 transition-colors">
      <Server className="h-3.5 w-3.5 mr-1" />
      API Development
    </Badge>
    <Badge className="px-3 py-1.5 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30 transition-colors">
      <Settings className="h-3.5 w-3.5 mr-1" />
      DevOps & CI/CD
    </Badge>
    <Badge className="px-3 py-1.5 bg-indigo-500/20 text-indigo-500 border-indigo-500/30 hover:bg-indigo-500/30 transition-colors">
      <Database className="h-3.5 w-3.5 mr-1" />
      MySQL & PostgreSQL
    </Badge>
  </div>
</StaggerItem>

            <StaggerItem>
              <Button className="gap-2 group shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" className="ml-3 gap-2 group" asChild>
                <a
                  href="https://www.linkedin.com/in/mhasnainjafri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View LinkedIn</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </StaggerItem>
          </StaggeredContainer>
        </div>
      </div>
    </SectionContainer>
  )
}
