export const About = () => {
	return (
		<section
			id='about'
			className='bg-whiteCustom w-full h-full md:h-screen flex gap-10 flex-col justify-start items-center py-5'
		>
			<div className='w-[90%] md:max-w-7xl m-auto flex flex-col md:flex-row gap-10 justify-start items-center py-10'>
				<figure className='rounded-lg overflow-hidden w-full'>
					<img
						src='/aboutme.webp'
						alt='Código'
					/>
				</figure>
				<div className='space-y-4 flex flex-col justify-start items-center md:items-start '>
					<h2 className='text-2xl text-primary font-bold text-center uppercase'>Acerca de mí</h2>
					<p className='text-xl text-dark text-center md:text-left'>
						Soy un entusiasta desarrollador web junior con una pasión por aprender y crecer en la industria del
						desarrollo de software. Actualmente, estoy enfocando mis esfuerzos en adquirir nuevas habilidades y
						conocimientos en el campo del desarrollo web.
					</p>
					<p className='text-xl text-dark text-center md:text-left'>
						Aunque no tengo experiencia profesional previa en el desarrollo web, he completado cursos y proyectos de
						aprendizaje autodidacta donde he trabajado con tecnologías como
						<span className='font-bold'> HTML, CSS, JavaScript y TypeScript </span>, tambien con las librerías y
						frameworks
						<span className='font-bold'> React y TailwindCSS </span>. Mi objetivo es obtener experiencia práctica y
						contribuir a proyectos significativos que me permitan desarrollar y demostrar mis habilidades.
					</p>
					<p className='text-xl text-dark text-center md:text-left'>
						Estoy explorando las diferentes áreas del desarrollo web, incluido el front-end, el back-end y el diseño de
						aplicaciones web. Mi enfoque actual es aprender más sobre frameworks, librerías y entornos de desarrollo
						modernas como React y Node.js con base de datos en MySQL y MongoDB para construir aplicaciones web dinámicas
						e interactivas.
					</p>
					<p className='text-xl text-dark text-center md:text-left'>
						Cuento con estudios en <span className='font-bold'>Ingeniería en Sistemas, pénsum cerrado</span> y tengo
						experiencia laboral en redes de telecomunicaciones, donde adquirí habilidades técnicas y resolución de
						problemas que ahora estoy aplicando al desarrollo web. Mi objetivo es combinar mis habilidades técnicas con
						mi pasión por la programación para crear soluciones innovadoras y de calidad.
					</p>
				</div>
			</div>
		</section>
	);
};
