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
		<div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow space-y-4">
			<h2 className="text-2xl font-bold text-center">Método Babilónico</h2>
			<input
				type="number"
				min="0"
				step="any"
				value={numero}
				onChange={(e) => setNumero(e.target.value === '' ? '' : parseFloat(e.target.value))}
				className="w-full px-4 py-2 border rounded"
				placeholder="Ingresa un número"
			/>
			<button onClick={calcularRaiz} className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition">
				Calcular raíz
			</button>

			{estimacionInicial && <p className="text-sm text-gray-500">Estimación inicial: {estimacionInicial.toFixed(2)}</p>}

			{pasos.length > 0 && (
				<div className="bg-gray-50 p-3 rounded text-sm text-gray-800 max-h-60 overflow-y-auto border">
					<ul className="list-disc list-inside space-y-1">
						{pasos.map((p, idx) => (
							<li key={idx}>{p}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
