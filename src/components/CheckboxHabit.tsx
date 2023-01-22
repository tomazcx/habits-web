import * as Checkbox from '@radix-ui/react-checkbox'
import {Check} from "phosphor-react"
import {api} from '../lib/api'

interface IHabits {
	possibleHabits: {
		id: string
		title: string
		created_at: string
	}[],
	completedHabits: string[]
}

interface ICheckbox {
	id: string
	label: string
	checked?: boolean
	disabled: boolean
	habits: IHabits
	setHabits({}): void
	onCompletedChanged(completed: number): void
}

export const CheckboxHabit = ({id, label, setHabits, habits, disabled, onCompletedChanged, checked}: ICheckbox) => {

	const handleToggleHabit = async (habitId: string) => {
		await api.patch(`/habits/${habitId}/toggle`,)

		const isHabitCompleted = habits.completedHabits.includes(habitId)
		let completedHabits: string[] = []

		if (isHabitCompleted) {
			completedHabits = habits.completedHabits.filter((id: string) => id !== habitId)
		} else {
			completedHabits = [...habits.completedHabits, habitId]
		}

		setHabits({
			possibleHabits: habits.possibleHabits,
			completedHabits
		})

		return onCompletedChanged(completedHabits.length)
	}

	return (

		<Checkbox.Root
			onCheckedChange={() => handleToggleHabit(id)}
			checked={checked}
			disabled={disabled}
			className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed">
			<div className="h-8 w-8 rounded-lg flex border group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background  border-zinc-800 bg-zinc-900 items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
				<Checkbox.Indicator>
					<Check size={20} className='text-white' />
				</Checkbox.Indicator>
			</div>
			<span className="font-semibold  text-white leading-tight text-xl group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
				{label}
			</span>
		</Checkbox.Root>

	)
}
