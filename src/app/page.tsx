"use client";

import { motion } from "framer-motion";
import { Mail, Code, MapPin, Database, Award, ExternalLink } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border/40 bg-background/80">
        <div className="container max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-lg">yash<span className="text-primary">.dev</span></span>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 container max-w-4xl mx-auto px-6 py-12 md:py-24 flex flex-col gap-24">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={fadeIn}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Hi, I'm Yash Agarwal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium flex items-center gap-2">
              <Code className="w-6 h-6" /> Data-Driven CS Student (AI & ML)
            </p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Passionate about building interactive dashboards, uncovering insights through exploratory analytics, and creating machine learning models. I specialize in turning complex, real-world datasets into actionable intelligence.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="mailto:yash.agarwal2024@nst.rishihood.edu.in" className={buttonVariants({ variant: "default" })}>
              <Mail className="w-4 h-4 mr-2" /> Contact Me
            </Link>
            <Link href="#projects" className={buttonVariants({ variant: "outline" })}>
              View Projects
            </Link>
          </div>
        </motion.section>

        <Separator className="bg-border/50" />

        {/* Experience / Education */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          className="flex flex-col gap-8"
        >
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" /> Education & Extracurricular
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border/50 shadow-sm backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">B.Tech in AI & ML</CardTitle>
                <CardDescription>Rishihood University • 2024 - 2028</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Current Grade: 8.229/10.0</p>
                <p className="text-sm text-muted-foreground mt-2">Specializing in Machine Learning, Data Analytics, and Software Development.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 shadow-sm backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">AI Club Startup (Fashion Culture Lab)</CardTitle>
                <CardDescription>Extracurricular Activity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Working at the intersection of computer vision, fashion, and cultural analytics to build AI-driven visual understanding systems.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          id="projects"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="flex flex-col gap-8"
        >
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Database className="w-6 h-6 text-primary" /> Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <motion.div variants={fadeIn}>
              <Card className="bg-card/40 border-border/50 hover:bg-card/60 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Uber Trip & Revenue Analytics Dashboard</CardTitle>
                      <CardDescription className="mt-1">April 2026</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><GithubIcon className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><ExternalLink className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Revenue trends & trip distribution (hourly patterns)</li>
                    <li>Distance vs fare correlation using scatter analysis</li>
                    <li>Payment method & city-wise fare comparison</li>
                    <li>Trip status breakdown + KPI tracking</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">Data Analytics</Badge>
                  <Badge variant="secondary">Python</Badge>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-card/40 border-border/50 hover:bg-card/60 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">UK Road Accident Risk & Safety Analytics</CardTitle>
                      <CardDescription className="mt-1">April 2026</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><GithubIcon className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><ExternalLink className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Time-series analysis of accident trends (year-wise patterns)</li>
                    <li>Severity segmentation (Fatal / Serious / Slight) + KPI tracking</li>
                    <li>Temporal hotspots (hour / day heatmaps)</li>
                    <li>Environmental geographic analysis (weather, light, speed mapping)</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">Data Cleaning</Badge>
                  <Badge variant="secondary">Geospatial</Badge>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-card/40 border-border/50 hover:bg-card/60 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Credit Card Customer Segmentation & Risk</CardTitle>
                      <CardDescription className="mt-1">February 2026</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><GithubIcon className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><ExternalLink className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Customer segmentation based on Payment Tier, Tenure, Purchase Behavior</li>
                    <li>Feature engineering & outlier handling (IQR, winsorization)</li>
                    <li>Risk profiling using credit utilization bands</li>
                    <li>Behavioral insights for targeting business strategy</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Pandas</Badge>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          className="flex flex-col gap-6"
        >
          <h2 className="text-2xl font-bold tracking-tight">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {["Machine Learning", "Python", "SQL", "PostgreSQL", "Tableau", "Pandas", "NumPy", "Matplotlib", "Figma", "Natural Language Processing", "Git & Github", "GenAI"].map((skill) => (
              <Badge key={skill} variant="outline" className="px-3 py-1 text-sm border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20 py-8 mt-12">
        <div className="container max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Yash Agarwal. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://github.com" className="hover:text-foreground transition-colors">Github</Link>
            <Link href="https://linkedin.com" className="hover:text-foreground transition-colors">LinkedIn</Link>
            <Link href="https://kaggle.com" className="hover:text-foreground transition-colors">Kaggle</Link>
            <Link href="https://leetcode.com" className="hover:text-foreground transition-colors">LeetCode</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
