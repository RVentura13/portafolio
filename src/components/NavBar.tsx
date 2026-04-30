import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { ContactLinks } from './ContactLinks';
export const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeSection, setActiveSection] = useState<string>('home');

	//Controla el despliegue del menú responsive
	const handleMenu = () => {
		setShowMenu(prev => !prev);
	};
	//Controla el despliegue del menú responsive desde el logo
	const handleMenuLogo = () => {
		setShowMenu(false);
	};

	//Función para controlar el scroll y poner sombra al nav y estilar la opcion en el nav de la seccion que se muestra en pantalla
	const handleScroll = () => {
		const sections = document.querySelectorAll('section');
		let currentSection = '';

		sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			if (window.scrollY === 0) {
				currentSection = 'home';
			}
			if (rect.top <= 0 && rect.bottom > 0) {
				currentSection = section.id;
			}
		});

		setActiveSection(currentSection);
	};

	useEffect(() => {
		handleScroll(); // Ejecutar al cargar la página

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`${
				activeSection === 'home'
					? 'w-full z-20 h-0 bg-dark transition-all duration-300 ease-in'
					: 'fixed w-full z-20 top-0 bg-dark transition-all h-24 duration-300 ease-in'
			}`}
		>
			<div className='max-w-7xl m-auto flex justify-between items-center px-10 md:px-0 py-6'>
				<div className='flex gap-3 justify-center items-center'>
					<a href='#home'>
						<img
							src='logo.svg'
							alt='Logotipo'
							className='w-12'
						/>
					</a>
					<p className='hidden md:block text-white text-sm font-bold uppercase'>rventura</p>
				</div>

				<div
					className='md:hidden text-3xl text-white cursor-pointer'
					onClick={handleMenu}
				>
					<GiHamburgerMenu />
				</div>
				{/* Mobile */}
				<div
					className={
						showMenu
							? 'fixed flex flex-col justify-between right-0 top-0 w-full md:w-[90%] h-screen bg-dark p-10 ease-in duration-300 z-30'
							: 'fixed flex flex-col justify-between -right-[100%] w-full top-0 h-screen p-10 ease-in duration-300 z-30 bg-dark'
					}
				>
					<div className='flex flex-col justify-stretch'>
						<div className='flex justify-between items-center mb-20'>
							<a href='#home'>
								<img
									src='logo.svg'
									alt='Logotipo'
									className='w-12'
									onClick={handleMenuLogo}
								/>
							</a>
							<div
								className='md:hidden text-3xl text-white cursor-pointer'
								onClick={handleMenu}
							>
								<IoMdClose />
							</div>
						</div>
						<ul className=' flex flex-col gap-5 justify-end items-center'>
							<li
								className={`uppercase font-bold transition-all duration-300 hover:text-primary ${
									activeSection === 'home' ? 'text-primary' : 'text-white'
								}`}
							>
								<a
									href='#home'
									onClick={handleMenu}
								>
									Inicio
								</a>
							</li>
							<li
								className={`uppercase font-bold transition-all duration-300 hover:text-primary ${
									activeSection === 'about' ? 'text-primary' : 'text-white'
								}`}
							>
								<a
									href='#about'
									onClick={handleMenu}
								>
									Acerca de mí
								</a>
							</li>
							<li
								className={`uppercase font-bold transition-all duration-300 hover:text-primary ${
									activeSection === 'projects' ? 'text-primary' : 'text-white'
								}`}
							>
								<a
									href='#projects'
									onClick={handleMenu}
								>
									Proyectos
								</a>
							</li>
							<li
								className={`uppercase font-bold transition-all duration-300 hover:text-primary ${
									activeSection === 'contact' ? 'text-primary' : 'text-white'
								}`}
							>
								<a
									href='#contact'
									onClick={handleMenu}
								>
									Contacto
								</a>
							</li>
						</ul>
					</div>

					<ContactLinks
						textColor='text-primary'
						bgColor='bg-white'
						shadowColor='shadow-slate-300'
						textSize='text-3xl'
					/>
				</div>
				{/* Desktop */}
				<ul className='hidden md:flex gap-5 justify-end items-center'>
					<li
						className={`uppercase font-bold transition-all duration-300 hover:text-primary ${
							activeSection === 'home' ? 'text-primary' : 'text-white'
						}`}
					>
						<a href='#home'>Inicio</a>
					</li>
					<li
						className={`uppercase font-bold transition-all duration-300 hover:text-primary ${
							activeSection === 'about' ? 'text-primary' : 'text-white'
						}`}
					>
						<a href='#about'>Acerca de mí</a>
					</li>
					<li
						className={`uppercase font-bold transition-all duration-300 hover:text-primary ${
							activeSection === 'projects' ? 'text-primary' : 'text-white'
						}`}
					>
						<a href='#projects'>Proyectos</a>
					</li>
					<li
						className={`uppercase font-bold transition-all duration-300 hover:text-primary ${
							activeSection === 'contact' ? 'text-primary' : 'text-white'
						}`}
					>
						<a href='#contact'>Contacto</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
