import * as Checkbox from '@radix-ui/react-checkbox'
import {Check} from "phosphor-react"
import {ICheckboxWeekDay} from './interfaces/ICheckboxWeekDay'


export const CheckboxWeekDay = ({label, weekDays, setWeekDays, index}: ICheckboxWeekDay) => {

	const handleToggleWeekDay = (weekDay: number) => {
		if (weekDays.includes(weekDay)) {
			const weekDayWithRemovedOne = weekDays.filter(day => day !== weekDay)

			return setWeekDays(weekDayWithRemovedOne)
		}

		const weekDaysWithAddedOne = [...weekDays, weekDay]
		return setWeekDays(weekDaysWithAddedOne)

	}

	return (

		<Checkbox.Root
			onCheckedChange={() => handleToggleWeekDay(index)}
			className="flex items-center gap-3 group">
			<div className="h-8 w-8 rounded-lg flex border border-zinc-800 bg-zinc-900 items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
				<Checkbox.Indicator>
					<Check size={20} className='text-white' />
				</Checkbox.Indicator>
			</div>
			<span className="font-semibold  text-white leading-tight" >
				{label}
			</span>
		</Checkbox.Root>

	)
}
