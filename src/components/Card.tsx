import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import type { Project } from '../types';

type CardProps = {
	project: Project;
};

export const Card = ({ project }: CardProps) => {
	const { image, title, description, github, link, technologies } = project;
	return (
		<div className='max-w-[400px] mx-auto space-y-4 bg-white rounded-2xl shadow-md shadow-white overflow-hidden flex flex-col pb-4'>
			<div className='h-48'>
				<img
					className='w-full h-full object-cover transform transition duration-300 hover:scale-110'
					src={image}
					alt='Imagen de proyecto'
				/>
			</div>
			<div className='px-6 overflow-visible'>
				<div className='font-bold text-primary text-xl'>{title}</div>
				<p className='h-20 text-dark text-base'>{description}</p>
			</div>
			<div className='flex justify-between items-center'>
				<div className='px-6 flex gap-5 justify-center items-center'>
					<div className='text-primary text-3xl text-center transition-all duration-150 hover:scale-110 ease-in'>
						<a
							href={github}
							target='_blank'
							rel='noreferrer noopener'
							title='GitHub'
							className=''
						>
							<FaGithub />
						</a>
					</div>
					<div className='text-primary text-3xl transition-all duration-150 hover:scale-110 ease-in'>
						<a
							href={link}
							target='_blank'
							rel='noreferrer noopener'
							title='Enlace al proyecto'
						>
							<FaLink />
						</a>
					</div>
				</div>
				<div className='px-6 flex gap-2'>
					{technologies.map((technology, index) => (
						<img
							key={index}
							src={`../skills-images/${technology}.svg`}
							alt={technology}
							title={technology}
							className='w-8'
						/>
					))}
				</div>
			</div>
		</div>
	);
};
