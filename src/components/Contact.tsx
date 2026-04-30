import { FaArrowUp } from 'react-icons/fa';
import { ContactLinks } from './ContactLinks';
import { Footer } from './Footer';
export const Contact = () => {
	return (
		<section
			id='contact'
			className='relative bg-whiteCustom m-auto w-full h-full md:h-screen flex flex-col gap-5 justify-center items-center py-24'
		>
			<div className='w-[90%] md:max-w-7xl flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center'>
				<figure className='w-[50%] md:w-1/3'>
					<img
						src='/contact.svg'
						alt='Contacto'
						title='Contacto por Correo'
					/>
				</figure>
				<div className='w-[90%] md:w-2/5 space-y-4'>
					<h2 className='text-primary text-center font-bold uppercase text-2xl'>Contáctame</h2>

					<ContactLinks
						textColor='text-white'
						bgColor='bg-primary'
						shadowColor='shadow-dark'
						textSize='text-5xl'
					/>
					<div className='w-full space-y-5'>
						<p className='text-dark text-xl'>
							¡Gracias por visitar mi sitio web! Si tienes alguna pregunta o solicitud no dudes en ponerte en contacto
							conmigo.
						</p>
						<p className='text-dark text-xl'>
							Estoy disponible para proyectos interesantes y colaboraciones emocionantes. ¡Espero saber pronto de ti!
						</p>
					</div>
				</div>
			</div>
			<div className='absolute bottom-0 w-full'>
				<Footer />
			</div>
			<figure className='absolute bottom-10 right-10 text-4xl flex justify-end animate-bounce text-white bg-primary rounded-full p-2'>
				<a
					href='#home'
					title='Ir Arriba'
				>
					<FaArrowUp />
				</a>
			</figure>
		</section>
	);
};
