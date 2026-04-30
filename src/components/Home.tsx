export const Home = () => {
	return (
		<section
			id='home'
			className='bg-dark w-full h-screen flex gap-10 flex-col justify-center items-center'
		>
			<div className='max-w-7xl m-auto flex flex-col gap-20 md:flex-row justify-center items-center'>
				<div className='space-y-4 flex flex-col justify-center items-center md:items-start'>
					<div className='relative w-[80%] md:max-w-xl flex gap-3 flex-col justify-center items-center md:items-start'>
						<img
							src='/decoration-images/code.svg'
							alt='Arrow'
							className='absolute top-4 left-56 md:top-10 md:left-64 w-10 md:w-20 rotate-[30deg] animate-pulse z-10'
						/>

						<h1 className='text-4xl text-white text-center md:text-left'>
							<span className='block text-white  text-5xl md:text-8xl font-bold'>Rony Ventura</span>
						</h1>
						<h2 className='text-3xl text-white text-center md:text-left'>Desarrollador Web</h2>
						<p className='text-sm uppercase text-white text-center md:text-left'>
							"Transformando ideas en experiencias digitales"
						</p>
					</div>

					<div className='flex justify-center items-center gap-5'>
						<a
							href='#contact'
							className='bg-primary text-white text-xl font-bold px-4 py-2 rounded-xl [text-shadow:2px_2px_2px_#1a2540] hover:bg-white hover:text-primary transition-all duration-150 ease-in uppercase'
						>
							Contáctame
						</a>

						<a
							href='#projects'
							className='text-white text-xl font-bold px-4 py-2 rounded-xl border-2 border-white hover:border-primary hover:text-primary transition-all duration-150 uppercase'
						>
							Proyectos
						</a>
					</div>
				</div>
				<figure className='relative w-[90%] md:w-[60%]'>
					<img
						src='/decoration-images/arrow.svg'
						alt='Fun Arrow'
						className='hidden md:block absolute -top-20 left-20 w-10 md:w-20 rotate-[30deg] animate-pulse z-10'
					/>
					<img
						src='/programming.svg'
						alt='Programador'
					/>
					<img
						src='/decoration-images/fun-arrow.svg'
						alt='Fun Arrow'
						className='hidden md:block absolute -bottom-20 right-20 w-10 md:w-20 rotate-[30deg] animate-pulse z-10'
					/>
				</figure>
			</div>
		</section>
	);
};
