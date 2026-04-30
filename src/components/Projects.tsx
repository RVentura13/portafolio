import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { Card } from './Card';
import { db } from '../data/db';
import { useState } from 'react';

export const Projects = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};
	return (
		<section
			id='projects'
			className={`relative bg-dark m-auto w-full ${
				isFullScreen ? 'md:h-full' : 'md:h-screen'
			} transition-all ease-in duration-300  flex gap-5 flex-col justify-start items-center py-24`}
		>
			<h2 className='text-center text-2xl font-bold text-white uppercase mb-10'>Proyectos</h2>
			<div className='w-[90%] max-w-7xl flex gap-8 flex-wrap justify-center items-center'>
				{db.map((project, index) => (
					<Card
						key={index}
						project={project}
					/>
				))}
			</div>
			<div className='absolute bottom-0 w-full hidden md:flex justify-center bg-dark m-auto'>
				<button
					className=' text-white font-bold m-2 px-5 py-2 rounded-lg hover:text-primary transition-all duration-200 ease-in uppercase'
					onClick={toggleFullScreen}
				>
					{!isFullScreen ? (
						<span className='flex gap-3 items-center justify-center'>
							Ver Más
							<MdOutlineKeyboardDoubleArrowDown
								className='animate-bounce'
								size={30}
							/>
						</span>
					) : (
						<span className='flex gap-3 items-center justify-center'>
							Ver Menos
							<MdOutlineKeyboardDoubleArrowUp
								className='animate-bounce'
								size={30}
							/>
						</span>
					)}
				</button>
			</div>
		</section>
	);
};
