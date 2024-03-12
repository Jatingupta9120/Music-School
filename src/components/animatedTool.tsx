'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/animated-tooltip";
export default function animatedTool(){
    const people = [
        {
          id: 1,
          name: "John Doe",
          designation: "Software Engineer",
          image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
          id: 2,
          name: "Robert Johnson",
          designation: "Product Manager",
          image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 3,
          name: "Jane Smith",
          designation: "Data Scientist",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "UX Designer",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 5,
          name: "Tyler Durden",
          designation: "Soap Developer",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        },
        {
          id: 6,
          name: "Dora",
          designation: "The Explorer",
          image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
        },
        {
          id: 7,
          name: "Alex Watson",
          designation: "Frontend Developer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          id: 8,
          name: "Emma Parker",
          designation: "Backend Developer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
          id: 9,
          name: "Michael Brown",
          designation: "DevOps Engineer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
          id: 10,
          name: "Sophia Wilson",
          designation: "Full Stack Developer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
        },
      ];
      
    return(
        <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
          </div>
  
          <div className="mt-10">
            <HoverEffect
            items={featuredWebinars.map(webinar => (
              {
                title: webinar.title,
                description: webinar.description,
                link: '/'
              }
            ))}
            />
          </div>
  
          <div className="mt-10 text-center">
            <Link href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              View All webinars
            </Link>
          </div>
        </div>
      </div>
    )
} 