export const Footer = () => {
	const fechaActual = new Date();
	const añoActual = fechaActual.getFullYear();
	return (
		<footer className='w-full h-auto m-auto py-5 flex justify-center items-center bg-dark'>
			<div>
				<p className='w-full text-base text-white text-center font-medium'>© {añoActual} Rony Ventura</p>
			</div>
		</footer>
	);
};
