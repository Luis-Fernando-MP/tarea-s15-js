'use client'
import { Link } from 'react-router-dom'
import { Calendar, Calculator } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function Home() {
	return (
		<div>
			<div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
				<h1 className="text-5xl font-extrabold text-blue-900 drop-shadow-sm">Tarea S15 JS</h1>
				<p className="text-2xl text-blue-700 font-medium">
					Estudiante: <span className="text-blue-800">Melgar Pizarro Luis</span>
				</p>
			</div>

			<div className="flex flex-wrap w-full justify-center gap-10 max-w-5xl mx-auto">
				<Link to="/switch" className="focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-xl">
					<Card className="w-80 bg-white/95 border-2 border-blue-300 hover:border-blue-500 hover:shadow-2xl transition-all duration-200 cursor-pointer rounded-xl">
						<CardHeader className="text-center">
							<Calendar className="w-12 h-12 mx-auto mb-4 text-blue-600" />
							<CardTitle className="text-xl font-semibold text-blue-900">Días de Semana</CardTitle>
							<CardDescription className="text-blue-700">
								Muestra los días de la semana con un renderizado condicional y useReducer
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="text-base text-blue-800 space-y-1 mt-2">
								<li>
									• Se usó <span className="font-semibold text-blue-700">useReducer</span>
								</li>
								<li>• Props opcionales</li>
							</ul>
						</CardContent>
					</Card>
				</Link>

				<Link to="/babilonico" className="focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-xl">
					<Card className="w-80 bg-white/95 border-2 border-blue-300 hover:border-blue-500 hover:shadow-2xl transition-all duration-200 cursor-pointer rounded-xl">
						<CardHeader className="text-center">
							<Calculator className="w-12 h-12 mx-auto mb-4 text-blue-600" />
							<CardTitle className="text-xl font-semibold text-blue-900">Método Babilónico</CardTitle>
							<CardDescription className="text-blue-700">Cálculo de raíces cuadradas</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="text-base text-blue-800 space-y-1 mt-2">
								<li>
									• Se usó <span className="font-semibold text-blue-700">useCallback</span>
								</li>
								<li>
									• Se usó <span className="font-semibold text-blue-700">useMemo</span>
								</li>
							</ul>
						</CardContent>
					</Card>
				</Link>
			</div>
		</div>
	)
}
