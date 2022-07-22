import Image from 'next/image'
import Link from 'next/link'

export default function Hero({data}) {
	return (
		<section className='relative mx-auto justify-center w-screen'>
			<div
				className='absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none'
				aria-hidden='true'
			>
				<svg
					width='1360'
					height='578'
					viewBox='0 0 1360 578'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g fill='url(#illustration-01)' fillRule='evenodd'>
						<circle cx='1232' cy='128' r='128' />
						<circle cx='155' cy='443' r='64' />
					</g>
				</svg>
			</div>

			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='pt-32 pb-12 md:pt-40 md:pb-20'>
					<div className='text-center pb-12 md:pb-16'>
						<h1
							className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
							data-aos='zoom-y-out'
						>
							Reel{' '}
							<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
								Ratings
							</span>
						</h1>
						<div className='max-w-3xl mx-auto'>
							<p
								className='text-xl text-stone-300 mb-8 prose'
								data-aos='zoom-y-out'
								data-aos-delay='150'
							>
								Millions of movies, millions of choices. Let us help you find
								the perfect film.
							</p>
							<div
								className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'
								data-aos='zoom-y-out'
								data-aos-delay='300'
							>
								<div>
									<Link href='/login'>
										<p
											className='btn text-white bg-red-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4'
											href='#0'
										>
											Sign In
										</p>
									</Link>
								</div>
								<div>
									<p
										className='btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4'
										href='#0'
									>
										Create an Account!
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Hero image */}
					<div>
						<div
							className='relative flex justify-center mb-8'
							data-aos='zoom-y-out'
							data-aos-delay='450'
						>
							<div className='flex flex-col justify-center'>
								<Image
									className='mx-auto'
									src='/cchaplin1.jpeg'
									width='700'
									height='400'
									alt='Hero'
								/>
								<svg
									className='absolute inset-0 max-w-full mx-auto md:max-w-none h-auto'
									width='768'
									height='432'
									viewBox='0 0 768 432'
									xmlns='http://www.w3.org/2000/svg'
									xmlnsXlink='http://www.w3.org/1999/xlink'
								>
									<defs>
										<linearGradient
											x1='50%'
											y1='0%'
											x2='50%'
											y2='100%'
											id='hero-ill-a'
										>
											<stop stopColor='#FFF' offset='0%' />
											<stop stopColor='#EAEAEA' offset='77.402%' />
											<stop stopColor='#DFDFDF' offset='100%' />
										</linearGradient>
										<linearGradient
											x1='50%'
											y1='0%'
											x2='50%'
											y2='99.24%'
											id='hero-ill-b'
										>
											<stop stopColor='#FFF' offset='0%' />
											<stop stopColor='#EAEAEA' offset='48.57%' />
											<stop stopColor='#DFDFDF' stopOpacity='0' offset='100%' />
										</linearGradient>
										<radialGradient
											cx='21.152%'
											cy='86.063%'
											fx='21.152%'
											fy='86.063%'
											r='79.941%'
											id='hero-ill-e'
										>
											<stop stopColor='#4FD1C5' offset='0%' />
											<stop stopColor='#81E6D9' offset='25.871%' />
											<stop stopColor='#338CF5' offset='100%' />
										</radialGradient>
										<circle id='hero-ill-d' cx='384' cy='216' r='64' />
									</defs>
									<g fill='none' fillRule='evenodd'>
										<circle
											fillOpacity='.04'
											fill='url(#hero-ill-a)'
											cx='384'
											cy='216'
											r='128'
										/>
										<circle
											fillOpacity='.16'
											fill='url(#hero-ill-b)'
											cx='384'
											cy='216'
											r='96'
										/>
									</g>
								</svg>
							</div>
							<button
								className='absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg'
								aria-controls='modal'
							>
								<label htmlFor='my-modal-6' className='btn modal-button'>
									open modal
								</label>
							</button>
						</div>
					</div>
				</div>
			</div>
			<input type='checkbox' id='my-modal-6' className='modal-toggle' />
			<div className='modal modal-bottom sm:modal-middle'>
				<div className='modal-box'>
					<video src={data} type='video'></video>
					<div className='modal-action'>
						<label htmlFor='my-modal-6' className='btn'>
							Close
						</label>
					</div>
				</div>
			</div>
		</section>
	)
}
