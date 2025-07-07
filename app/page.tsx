'use client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SwitchDias from './components/SwitchDias'
import MetodoBabilonico from './components/metodo-babilonico'
import Home from './components/home'
import Navbar from './components/Navbar'

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/switch" element={<SwitchDias />} />
				<Route path="/babilonico" element={<MetodoBabilonico />} />
			</Routes>
		</BrowserRouter>
	)
}
