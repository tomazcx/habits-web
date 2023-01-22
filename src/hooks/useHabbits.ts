import {useEffect, useState} from "react"
import {api} from "../lib/api"

interface IDay {
	date: Date
}

interface IHabits {
	possibleHabits: {
		id: string
		title: string
		created_at: string
	}[],
	completedHabits: string[]
}

interface IReturn {
	habits: IHabits,
	setHabits(data: IHabits): void

}

export const useHabbits = ({date}: IDay): IReturn => {
	const [habits, setHabits] = useState<IHabits>({} as IHabits)


	useEffect(() => {
		api.get('days', {
			params: {
				date: date.toISOString()
			}

		}).then(result => setHabits(result.data))

	}, [])


	return {habits, setHabits}
}
