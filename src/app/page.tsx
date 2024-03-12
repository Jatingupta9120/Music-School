import HeroSection from '@/components/Hero-section'
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonialcards from '@/components/Testimonialcards'
import Upcomingwebinars from '@/components/Upcomingwebinars'
import Instructors from '@/components/Instructor'
import Footer from '@/components/Footer'
export default function Home() {
	return (
		<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
			<HeroSection />
			<FeaturedCourses />
			<WhyChooseUs />
			<Testimonialcards />
			<Upcomingwebinars />
			<Instructors />
			<Footer />
		</main>
	)
}
