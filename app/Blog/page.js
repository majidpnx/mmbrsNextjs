"use client"
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { Input } from "../components/ui/input";
import { Users, ArrowRight, Search, Calendar, Clock } from "lucide-react";
// import { Link } from "react-router-dom";
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Image from "next/image";
const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: "grow-telegram-channel-fast",
      title: "How to Grow Your Telegram Channel Fast with Membersgram",
      excerpt: "Discover the proven strategies and features that can help you build a thriving Telegram community with real, engaged members.",
      category: "Growth Tips",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      featured: true,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop"
    },
    {
      id: "essential-telegram-features",
      title: "5 Essential Features Every Telegram Channel Needs",
      excerpt: "Learn about the must-have features that successful Telegram channels use to engage their audience and drive growth.",
      category: "Strategy",
      readTime: "4 min read",
      date: "Dec 12, 2024",
      featured: false,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
    },
    {
      id: "authentic-communities",
      title: "Building Authentic Communities on Telegram",
      excerpt: "Why authentic engagement matters more than follower count and how to achieve it with the right growth strategies.",
      category: "Best Practices",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      featured: false,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
    },
    {
      id: "monetization-strategies",
      title: "How to Monetize Your Telegram Channel in 2024",
      excerpt: "Explore various monetization strategies and learn how successful channels generate revenue from their communities.",
      category: "Monetization",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      featured: false,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
    },
    {
      id: "content-creation-tips",
      title: "Content Creation Tips for Telegram Success",
      excerpt: "Master the art of creating engaging content that keeps your Telegram audience coming back for more.",
      category: "Content",
      readTime: "5 min read",
      date: "Dec 5, 2024",
      featured: false,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    },
    {
      id: "automation-tools",
      title: "Top Automation Tools for Telegram Channel Management",
      excerpt: "Streamline your channel management with these powerful automation tools and save time while growing your audience.",
      category: "Tools",
      readTime: "6 min read",
      date: "Dec 3, 2024",
      featured: false,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["All", "Growth Tips", "Strategy", "Best Practices", "Monetization", "Content", "Tools"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Navigation />


      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Membersgram{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights, growth strategies, and tips to help you build a thriving Telegram community
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
              <div className="md:flex">
                <div className="md:w-1/2 relative ">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  fill
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {/* <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {featuredPost.category}
                    </Badge>
                    <Badge variant="outline">Featured</Badge> */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {featuredPost.category}
                    </div>
                    <div variant="outline">Featured</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link href={`/Blog/${featuredPost.id}`}>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {searchTerm || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative w-full h-48 ">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    fill
                    
                  />
                  {/* <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">
                    {post.category}
                  </Badge> */}
                  <div className="absolute top-4 left-4 bg-white/90 text-gray-700">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read more <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest growth strategies and Telegram tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/90 border-0"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Membersgram</span>
          </Link>
          <p className="text-gray-400 mb-8">
            The trusted platform for growing your Telegram channel with real, engaged members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Download Android App
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Try Web App
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;