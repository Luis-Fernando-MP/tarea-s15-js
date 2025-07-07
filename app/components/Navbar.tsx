'use client'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
	const location = useLocation()

	const linkStyle = (path: string) =>
		`px-4 py-2 rounded transition-colors duration-200 ${
			location.pathname === path ? 'bg-blue-700 text-white' : 'text-blue-700 hover:bg-blue-100 hover:text-blue-900'
		}`

	return (
		<nav className="bg-blue-50 border-b border-blue-200 mt-6">
			<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
				<h1 className="text-xl font-bold text-blue-900">Tarea S15</h1>
				<div className="space-x-2">
					<Link to="/" className={linkStyle('/')}>
						Inicio
					</Link>
					<Link to="/switch" className={linkStyle('/switch')}>
						Switch Días
					</Link>
					<Link to="/babilonico" className={linkStyle('/babilonico')}>
						Método Babilónico
					</Link>
				</div>
			</div>
		</nav>
	)
}
