import { MouseEventHandler } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';

type ContactLinksProps = {
	textColor: string;
	bgColor: string;
	shadowColor: string;
	textSize: string;
};

export const ContactLinks = ({ textColor, bgColor, shadowColor, textSize }: ContactLinksProps) => {
	const [notification, setNotification] = useState(false);
	const textToCopy = 'ronyventura13@gmail.com';

	// Función para controlar la notificación de copiar el texto
	const copyNotification: MouseEventHandler<HTMLButtonElement> = () => {
		setNotification(true);
		setTimeout(() => {
			setNotification(false);
		}, 3000);
	};

	return (
		<div className='flex flex-col gap-2 justify-center items-center'>
			<div className='flex gap-5 flex-col justify-center items-center'>
				<div className='w-[90%] md:w-full flex gap-3 justify-center items-center md:items-start'>
					<div className={`p-4 ${bgColor} rounded-full ${textColor} ${textSize} shadow-lg ${shadowColor} transition duration-300 ease-out hover:scale-110 `}>
						<a
							href='https://www.linkedin.com/in/rony-ventura-0034b5211/'
							target='_blank'
							rel='noreferrer noopener'
							title='LinkedIn'
						>
							<FaLinkedin />
						</a>
					</div>
					<div className={`p-4 ${bgColor} rounded-full ${textColor} ${textSize} shadow-lg ${shadowColor} transition duration-300 ease-out hover:scale-110 `}>
						<a
							href='https://github.com/RVentura13'
							target='_blank'
							rel='noreferrer noopener'
							title='GitHub'
						>
							<FaGithub />
						</a>
					</div>

					<div className={`p-4 ${bgColor} rounded-full ${textColor} ${textSize} shadow-lg ${shadowColor} transition duration-300 ease-out hover:scale-110 `}>
						<a
							href='/CV.pdf'
							title='Curriculum Vitae'
							target='_blank'
							rel='noreferrer noopener'
						>
							<BsFillPersonLinesFill />
						</a>
					</div>
					<div className={`p-4 ${bgColor} rounded-full ${textColor} ${textSize} shadow-lg ${shadowColor} transition duration-300 ease-out hover:scale-110 `}>
						<a
							href='mailto:ronyventura13@gmail.com'
							target='_blank'
							rel='noreferrer noopener'
							title='Enviar Correo'
						>
							<AiOutlineMail />
						</a>
					</div>
				</div>
				<div className='flex justify-center items-center rounded-lg shadow-md bg-white'>
					<p className='text-center w-48 bg-transparent text-md mx-2 font-bold text-dark'>{textToCopy}</p>
					<CopyToClipboard text={textToCopy}>
						<button
							className={`w-20 bg-primary m-1 font-bold mx-2 text-white rounded-lg hover:bg-primary/90`}
							onClick={copyNotification}
						>
							{notification ? '!Copiado!' : 'Copiar'}
						</button>
					</CopyToClipboard>
				</div>
			</div>
			<img
				src='/decoration-images/fun-underline.svg'
				alt='Underline'
				className='w-24 animate-pulse'
			/>
		</div>
	);
};
