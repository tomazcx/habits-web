import dayjs from "dayjs"
import {useHabbits} from "../hooks/useHabbits"
import {CheckboxHabit} from "./CheckboxHabit"

interface IHabitsList {
	date: Date
	onCompletedChanged(completed: number): void
}

export const HabitsList = ({date, onCompletedChanged}: IHabitsList) => {


	const {habits, setHabits} = useHabbits({date})

	const isDateInPast = dayjs(date).endOf('day').isBefore(new Date())

	return (
		<div>
			<div className="mt-6 flex flex-col gap-3">
				{habits.possibleHabits?.map(habit => <CheckboxHabit onCompletedChanged={onCompletedChanged} key={habit.id} setHabits={setHabits} id={habit.id} habits={habits} disabled={isDateInPast} checked={habits.completedHabits?.includes(habit.id)} label={habit.title} />)}
			</div>

		</div>
	)
}
