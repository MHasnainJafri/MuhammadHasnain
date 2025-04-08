import { Book, Presentation } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Publications() {
  return (
    <section id="publications" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications & Contributions</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Book className="h-5 w-5" />
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>

          <div className="space-y-4">
            <CertificationCard
              title="Mastering Laravel Framework and PHP"
              issuer="Board Infinity Institution (Coursera)"
              date="December 2023"
              description="Advanced course covering Laravel framework features, PHP best practices, and scalable application development."
            />

            <CertificationCard
              title="Laravel Protections"
              issuer="InfoSec Institute (Coursera)"
              date="December 2023"
              description="In-depth training on securing Laravel applications against common vulnerabilities and attacks."
            />

            <CertificationCard
              title="Front End Development Libraries"
              issuer="FreeCodeCamp"
              date="September 2024"
              description="Hands-on certification in front-end libraries like React, Redux, and Bootstrap for building responsive web applications."
            />

            <CertificationCard
              title="Legacy JavaScript Algorithms and Data Structures"
              issuer="FreeCodeCamp"
              date="February 2023"
              description="Comprehensive training in JavaScript algorithms, data structures, and problem-solving techniques."
            />
          </div>
        </div>

        {/* Open Source Contributions */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Presentation className="h-5 w-5" />
            <h3 className="text-xl font-semibold">Open Source Contributions</h3>
          </div>

          <div className="space-y-4">
            <ContributionCard
              title="RestApiKit"
              link="https://packagist.org/packages/mhasnainjafri/restapikit"
              description="A powerful Laravel toolkit for simplifying REST API development, featuring automatic documentation generation, built-in validation, and testing utilities."
            />

            <ContributionCard
              title="Laravel CPanel API Library"
              link="https://packagist.org/packages/mhasnainjafri/cpanel"
              description="A Laravel package for managing cPanel functionalities programmatically, including file management, email configuration, and domain setup."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  description: string
}

function CertificationCard({ title, issuer, date, description }: CertificationCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge>{issuer}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">{date}</div>
        </div>
      </CardContent>
    </Card>
  )
}

interface ContributionCardProps {
  title: string
  link: string
  description: string
}

function ContributionCard({ title, link, description }: ContributionCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <a href={link} className="text-sm text-primary hover:underline">
            View on Packagist
          </a>
        </div>
      </CardContent>
    </Card>
  )
}