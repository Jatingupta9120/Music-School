'use client'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'

const instructors = [
	{
		id: 1,
		name: 'Jatin Gupta',
		designation: 'Guitar Specialist',
		image: '/'
	},
	{
		id: 2,
		name: 'Kuldeepak Singh',
		designation: 'Table wala',
		image: '/'
	},
	{
		id: 3,
		name: 'Gaurank Joshi',
		designation: 'Piano Teacher',
		image: '/'
	},
	{
		id: 4,
		name: 'Divyansh Bose',
		designation: 'Drumming Expert',
		image: '/'
	}
]

function Instructors() {
	return (
		<div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
			<WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
				<h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
					Meet Our Instructors
				</h2>
				<p className="text-base md:text-lg text-white text-center mb-4">
					Discover the talented professionals who will guide your
					musical journey
				</p>
				<div className="flex flex-row items-center justify-center mb-10 w-full">
					<AnimatedTooltip items={instructors} />
				</div>
			</WavyBackground>
		</div>
	)
}

export default Instructors
