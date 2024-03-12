import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import Link from 'next/link'
export default function HeroSection() {
	return (
		<div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0  ">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<div className="p-4 relative  z-10  w-full  text-center text-white ">
				<h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
					Master <br />
					the art of music
				</h1>
				<p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
					It is not just about hitting the right notes; it's about
					expressing your soul through sound, weaving melodies that
					resonate with the depths of human emotion. It's a journey of
					endless discovery, where every chord struck and every rhythm
					felt brings us closer to understanding the essence of our
					existence
				</p>
				<div className="mt-4">
					<Link href="/courses">
						<Button
							borderRadius="1.75rem"
							className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:bg-black dark:border-slate-800"
						>
							Explore courses
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
