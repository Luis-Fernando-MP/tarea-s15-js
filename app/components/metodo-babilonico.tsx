'use client'

import { useState, useCallback, useMemo } from 'react'

export default function MetodoBabilonico() {
	const [numero, setNumero] = useState<number | ''>('')
	const [pasos, setPasos] = useState<string[]>([])

	const estimacionInicial = useMemo(() => {
		if (typeof numero !== 'number' || numero <= 0) return null
		return numero / 2
	}, [numero])

	const calcularRaiz = useCallback(() => {
		if (typeof numero !== 'number' || numero <= 0) return setPasos(['⚠️ Ingresa un número válido mayor que cero.'])

		const iteraciones: string[] = []
		let x = numero / 2
		let i = 0

		do {
			x = 0.5 * (x + numero / x)
			iteraciones.push(`Iteración ${i + 1}: x = ${x.toFixed(6)}`)
			i++
		} while (Math.abs(x * x - numero) > 0.00001 && i < 100)

		setPasos(iteraciones)
	}, [numero])

	return (
		<div className="p-8 max-w-lg mx-auto bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-2xl shadow-xl space-y-6 border border-blue-300">
			<h2 className="text-3xl font-bold text-center drop-shadow-sm tracking-tight text-blue-800">Método Babilónico</h2>
			<div className="space-y-2">
				<label className="block text-blue-700 font-medium mb-1" htmlFor="numero">
					Número a calcular
				</label>
				<input
					id="numero"
					type="number"
					min="0"
					step="any"
					value={numero}
					onChange={(e) => setNumero(e.target.value === '' ? '' : parseFloat(e.target.value))}
					className="w-full px-4 py-2 border-2 border-blue-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 rounded-lg transition outline-none bg-blue-50 text-lg text-blue-900 placeholder-blue-400"
					placeholder="Ingresa un número"
				/>
			</div>
			<button
				onClick={calcularRaiz}
				className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full py-3 rounded-lg font-semibold text-lg shadow hover:from-blue-700 hover:to-blue-900 transition"
			>
				Calcular raíz
			</button>

			{estimacionInicial && (
				<p className="text-base text-blue-900 bg-blue-100 px-3 py-2 rounded-lg border border-blue-300 text-center">
					Estimación inicial: <span className="font-bold">{estimacionInicial.toFixed(2)}</span>
				</p>
			)}

			{pasos.length > 0 && (
				<div className="bg-blue-50 p-4 rounded-xl text-base text-blue-900 max-h-64 overflow-y-auto border border-blue-200 shadow-inner">
					<ul className="list-decimal list-inside space-y-1 pl-2">
						{pasos.map((p, idx) => (
							<li key={idx} className="pl-1">
								{p}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
