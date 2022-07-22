import Link from 'next/link'
import {useForm} from 'react-hook-form'

export default function login({data}) {
	const {
		handleSubmit,
		register,
		formState: {errors}
	} = useForm()

	const submitHandler = ({email, password}) => {
		console.log(register)
	}

	return (
		<section className='h-full w-screen text-center gradient-form bg-red-400 md:h-screen flex items-center justify-center h-screen"'>
			<video
				className='w-screen h-screen'
				src={
					'https://www.themoviedb.org/movie/788396-chasing-chaplin?language=en-US#play=0ApMSyQkk1c'
				}
				autoPlay
			></video>
			<div className='container py-12 px-6 h-full w-screen justify-center'>
				<div className='flex justify-center items-center flex-wrap h-full w-full g-6 text-gray-800 mx-auto'>
					<div className='mx-auto'>
						<div className='block bg-white shadow-lg rounded-lg'>
							<div className='lg:flex lg:flex-wrap g-0'>
								<div className='lg:w-full px-4 md:px-0'>
									<div className='md:p-12 md:mx-6'>
										<div className='text-center'>
											<div className='navbar-center'>
												<div className='btn btn-ghost normal-case text-xl'>
													Reel{' '}
													<span className='text-red-600 text-3xl'>rating</span>
												</div>
											</div>
										</div>
										<form onSubmit={handleSubmit(submitHandler)}>
											<p className='mb-10 text-center prose'>
												Please login to your account
											</p>
											<div className='mb-4'>
												<input
													type='text'
													className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
													id='exampleFormControlInput1'
													{...register('email')}
													placeholder='email'
												/>
											</div>
											<div className='mb-4'>
												<input
													type='password'
													className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
													id='exampleFormControlInput1'
													placeholder='Password'
												/>
											</div>
											<div className='text-center pt-1 mb-12 pb-1'>
												<button
													className='inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 bg-red-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
													type='button'
													data-mdb-ripple='true'
													data-mdb-ripple-color='light'
												>
													Log in
												</button>
												<a className='text-gray-500' href='#!'>
													Forgot password?
												</a>
											</div>
											<div className='flex items-center justify-between pb-6'>
												<p className='mb-0 mr-2'>Don't have an account?</p>
												<Link href='/register'>
													<div
														className='inline-block px-6 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-green-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
														data-mdb-ripple='true'
														data-mdb-ripple-color='light'
													>
														<p>Register</p>
													</div>
												</Link>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
