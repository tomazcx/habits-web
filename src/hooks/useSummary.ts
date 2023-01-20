import {useEffect, useState} from "react"
import {api} from "../lib/api"

interface IDay {
	id: string
	date: string
	amount: number
	completed: number
}

export const useSummary = () => {
	const [summary, setSummary] = useState<IDay[]>([])

	useEffect(() => {
		api.get('days/summary').then((response) => setSummary(response.data))
	}, [])

	return {summary}
}
