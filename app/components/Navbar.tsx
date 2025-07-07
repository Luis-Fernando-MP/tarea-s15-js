'use client'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
	const location = useLocation()

	const linkStyle = (path: string) =>
		`px-4 py-2 rounded ${location.pathname === path ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`

	return (
		<nav className="bg-white border-b mb-6">
			<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
				<h1 className="text-xl font-bold text-gray-900">Tarea S15</h1>
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
