'use client'
import { useReducer } from 'react'

type Props = {
	defaultDay?: string
}

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

type State = {
	day: string
}

type Action = {
	type: 'SET_DAY'
	payload: string
}

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_DAY':
			return { ...state, day: action.payload }
		default:
			return state
	}
}

export default function SwitchDias({ defaultDay = 'Lunes' }: Props) {
	const [state, dispatch] = useReducer(reducer, { day: defaultDay })

	const renderMessage = (day: string) => {
		switch (day) {
			case 'Lunes':
				return 'Inicio de semana'
			case 'Jueves':
				return 'Clases de JS'
			case 'Viernes':
				return 'último día de clases de JS'
			case 'Domingo':
				return 'Día de descanso'
			default:
				return 'Día normal'
		}
	}

	return (
		<div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow">
			<h2 className="text-2xl font-bold mb-4">Selecciona un día</h2>
			<div className="flex flex-wrap gap-2 mb-4">
				{days.map((d) => (
					<button
						key={d}
						className={`px-3 py-1 rounded ${state.day === d ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
						onClick={() => dispatch({ type: 'SET_DAY', payload: d })}
					>
						{d}
					</button>
				))}
			</div>
			<p className="text-lg font-medium text-gray-700">
				Día seleccionado: <span className="text-blue-600">{state.day}</span>
			</p>
			<p className="text-sm text-gray-500 mt-2">{renderMessage(state.day)}</p>
		</div>
	)
}
