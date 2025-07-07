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
		<div className="p-8 max-w-md mx-auto bg-blue-50 rounded-xl shadow-lg border border-blue-200">
			<h2 className="text-2xl font-bold mb-6 text-blue-800">Selecciona un día</h2>
			<div className="flex flex-wrap gap-3 mb-6">
				{days.map((d) => (
					<button
						key={d}
						className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 border-2
							${
								state.day === d
									? 'bg-blue-700 text-white border-blue-700 shadow'
									: 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200 hover:border-blue-500'
							}`}
						onClick={() => dispatch({ type: 'SET_DAY', payload: d })}
					>
						{d}
					</button>
				))}
			</div>
			<p className="text-lg font-semibold text-blue-800">
				Día seleccionado: <span className="text-blue-600">{state.day}</span>
			</p>
			<p className="text-base text-blue-500 mt-3">{renderMessage(state.day)}</p>
		</div>
	)
}
