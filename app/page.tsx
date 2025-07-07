'use client'

import dynamic from 'next/dynamic'

const HomeClient = dynamic(() => import('./root'), {
	ssr: false
})

export default function App() {
	return <HomeClient />
}
