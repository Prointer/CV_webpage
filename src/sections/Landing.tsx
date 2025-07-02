
const Landing: React.FC = () => {
	return (
		<section className='relative -mt-[65px] bg-bgbrand dark:bg-bgbrand-dark bg-cover bg-center bg-no-repeat'>
			<div className='sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden'>
				<div className='relative'>
					<div className='mx-auto'>
						<div className='relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8'>
							<div className='flex flex-col items-center'>
								<h1 className='text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl text-center'><span className='block text-foreground'>Hi, I'm <span className='text-green-700 dark:text-green-500'>Vladyslav</span>!</span><span className='text-brand block md:ml-0'>From sketch to screen — I design and develop user-first web experiences.</span></h1>
								<p className='pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg text-center'>"I design and develop modern web interfaces with focus on performance, accessibility, and user experience. <br className='hidden md:block' /> "Using technologies like React, TypeScript, and Tailwind, I turn complex ideas into simple and elegant solutions. I value thoughtful design, clean architecture, and meaningful interactions."</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Landing;