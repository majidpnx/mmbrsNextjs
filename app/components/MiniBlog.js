import React from 'react'
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Zap, Shield, Globe } from "lucide-react";
// import { Link } from "react-router-dom";
import Link from 'next/link';
const MiniBlog = () => {
  return (
  

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600">
              Tips, strategies, and insights to help you grow your Telegram presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-lg"></div>
              <CardHeader>
                {/* <Badge className="w-fit mb-2">Growth Tips</Badge> */}
                <div className="w-fit mb-2">Growth Tips</div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  How to Grow Your Telegram Channel Fast with Membersgram
                </CardTitle>
                <CardDescription>
                  Discover the proven strategies and features that can help you build a thriving Telegram community...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog/grow-telegram-channel-fast">
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    Read more <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-lg"></div>
              <CardHeader>
                {/* <Badge className="w-fit mb-2">Strategy</Badge> */}
                <div className="w-fit mb-2">Strategy</div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  5 Essential Features Every Telegram Channel Needs
                </CardTitle>
                <CardDescription>
                  Learn about the must-have features that successful Telegram channels use to engage their audience...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 rounded-t-lg"></div>
              <CardHeader>
                <div className="w-fit mb-2">Best Practices</div>
                {/* <Badge className="w-fit mb-2">Best Practices</Badge> */}
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Building Authentic Communities on Telegram
                </CardTitle>
                <CardDescription>
                  Why authentic engagement matters more than follower count and how to achieve it...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Posts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default MiniBlog 
 
