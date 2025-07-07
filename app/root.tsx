import type { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SwitchDias from './components/SwitchDias'
import MetodoBabilonico from './components/metodo-babilonico'
import Home from './components/home'
import Navbar from './components/Navbar'
const App: FC = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="min-h-screen py-12">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/switch" element={<SwitchDias />} />
					<Route path="/babilonico" element={<MetodoBabilonico />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
