'use client'
import { Link } from 'react-router-dom'
import { Calendar, Calculator } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function Home() {
	return (
		<div>
			<div className="text-center space-y-6 max-w-2xl mx-auto">
				<h1 className="text-4xl font-bold text-gray-900">Tarea S15 JS</h1>
				<p className="text-xl text-gray-600">Estudiante: Melgar Pizarro Luis</p>
			</div>

			<div className="flex flex-wrap w-full justify-center gap-6 max-w-4xl mx-auto mt-10">
				<Link to="/switch">
					<Card className="w-80 hover:shadow-lg transition-shadow cursor-pointer">
						<CardHeader className="text-center">
							<Calendar className="w-10 h-12 mx-auto mb-4" />
							<CardTitle>Días de Semana</CardTitle>
							<CardDescription>Muestra los días de la semana con un renderizado condicional y useReducer</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>• useReducer</li>
								<li>• Props opcionales</li>
							</ul>
						</CardContent>
					</Card>
				</Link>

				<Link to="/babilonico">
					<Card className="w-80 hover:shadow-lg transition-shadow cursor-pointer">
						<CardHeader className="text-center">
							<Calculator className="w-12 h-12 mx-auto mb-4" />
							<CardTitle>Método Babilónico</CardTitle>
							<CardDescription>Cálculo de raíces cuadradas</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>• Se uso useCallback</li>
								<li>• Se uso useMemo</li>
							</ul>
						</CardContent>
					</Card>
				</Link>
			</div>
		</div>
	)
}
