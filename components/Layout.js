import Nav from './Nav'

export default function Layout({children}) {
	return (
		<div className=''>
			<Nav />
			<main>{children}</main>
		</div>
	)
}
