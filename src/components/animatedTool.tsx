'use client';
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export default function AnimatedTool() {
    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        // Add the other people here...
    ];

    const featuredWebinars = [
        { title: "Webinar 1", description: "Description for Webinar 1" },
        { title: "Webinar 2", description: "Description for Webinar 2" },
        // Add more webinars as needed...
    ];

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>

                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars.map(webinar => ({
                            title: webinar.title,
                            description: webinar.description,
                            link: '/' // Adjust the link as necessary
                        }))}
                    />
                </div>

                <div className="mt-10 text-center">
                    <Link href="/"
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All Webinars
                    </Link>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {people.map(person => (
                        <div key={person.id} className="bg-gray-800 p-4 rounded-lg text-white">
                            <img src={person.image} alt={person.name} className="w-full h-40 object-cover rounded-md" />
                            <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
                            <p className="text-sm">{person.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
