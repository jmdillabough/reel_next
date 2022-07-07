import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

//Next-auth
import {useSession, signIn, signOut} from 'next-auth/react'

export default function login() {
	const {data: session} = useSession()

	const router = useRouter()
	const [errorMsg, setErrorMsg] = useState('')
	const [loading, isLoading] = useState(false)
	useEffect(() => {
		// redirect to home if user is authenticated
		if (user) router.replace('/')
	}, [user])

	async function onSubmit(e) {
		isLoading(true)
		e.preventDefault()
		const res = await fetch('/api/user/register', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'}
		})
		if (res.status === 200) {
			const userObj = await res.json()
			res.send(userObj)
		} else {
			isLoading(false)
			setErrorMsg('Incorrect username or password. Try again!')
		}
	}
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		)
	}
	return (
		<section className='h-full w-screen text-center gradient-form bg-red-400 md:h-screen flex items-center justify-center h-screen"'>
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
										<form onSubmit={onSubmit}>
											<p className='mb-10 text-center prose'>
												Please login to your account
											</p>
											<div className='mb-4'>
												<input
													type='text'
													className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
													id='exampleFormControlInput1'
													placeholder='Username'
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
