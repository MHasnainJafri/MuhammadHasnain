import type React from "react"
import { BookOpen, GraduationCap, Trophy, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

      <Card className="bg-gradient-to-r from-indigo-950 to-purple-950 border-none">
  <CardHeader className="pb-2">
    <div className="flex items-center gap-2">
      <GraduationCap className="h-5 w-5" />
      <CardTitle>Bachelor of Science in Software Engineering</CardTitle>
    </div>
    <div className="flex justify-between items-center mt-2">
      <div className="text-muted-foreground">Arid Agriculture University</div>
      <div>July 2019 - May 2023</div>
    </div>
    <div className="text-muted-foreground">Rawalpindi, Punjab</div>
    <div className="text-muted-foreground mt-1">
      Relevant Coursework: Web Development, Database Systems, Software Architecture, Cloud Computing, API Design,
      Microservices, DevOps Practices
    </div>
  </CardHeader>
  <CardContent>
    <div className="grid md:grid-cols-2 gap-8 mt-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Key Coursework</h3>
        <div className="grid grid-cols-2 gap-4">
          <CourseItem name="Web Development" grade="A" />
          <CourseItem name="Database Systems" grade="A" />
          <CourseItem name="Software Architecture" grade="A" />
          <CourseItem name="Cloud Computing" grade="A" />
          <CourseItem name="API Design" grade="A" />
          <CourseItem name="Microservices" grade="A" />
          <CourseItem name="DevOps Practices" grade="A" />
          <CourseItem name="Data Structures & Algorithms" grade="A" />
          <CourseItem name="Object-Oriented Programming" grade="A" />
          <CourseItem name="Software Testing" grade="A" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
        <div className="space-y-6">
          <AchievementItem
            icon={<Trophy className="h-5 w-5" />}
            title="Research Excellence"
            description="Applied advanced web development techniques to build scalable multi-service platforms."
          />
          <AchievementItem
            icon={<CheckCircle className="h-5 w-5" />}
            title="Technical Innovation"
            description="Developed microservices-based architectures for Potolo and XoBlack platforms."
          />
          <AchievementItem
            icon={<BookOpen className="h-5 w-5" />}
            title="Academic Leadership"
            description="Mentored junior developers and led study groups on Laravel and PHP development."
          />
        </div>
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Skills Developed</h3>
      <div className="space-y-4">
        <SkillProgressItem name="Web Development" value={95} />
        <SkillProgressItem name="Database Design" value={90} />
        <SkillProgressItem name="API Development" value={85} />
        <SkillProgressItem name="Performance Optimization" value={80} />
        <SkillProgressItem name="Cloud Deployment" value={85} />
      </div>
    </div>
  </CardContent>
</Card>
    </section>
  )
}

interface CourseItemProps {
  name: string
  grade: string
}

function CourseItem({ name, grade }: CourseItemProps) {
  return (
    <div className="flex justify-between items-center">
      <div>{name}</div>
      <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
        {grade}
      </div>
    </div>
  )
}

interface AchievementItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

function AchievementItem({ icon, title, description }: AchievementItemProps) {
  return (
    <div className="bg-black/20 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

interface SkillProgressItemProps {
  name: string
  value: number
}

function SkillProgressItem({ name, value }: SkillProgressItemProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div>{name}</div>
        <div>{value}%</div>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  )
}
