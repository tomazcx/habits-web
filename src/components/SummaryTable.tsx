import {generateDatesFromYearBeginning} from "../utils/generate-dates-from-year-begginning"
import {HabitDay} from "./HabitDay"
import {WeekDay} from "./WeekDay"

export const SummaryTable = () => {

	const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

	const summaryDates = generateDatesFromYearBeginning()

	const minimumSummaryDatesSize = 18 * 7 //18 weeks
	const ammountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

	return (
		<div className="w-full flex" >
			<div className="grid grid-rows-7 grid-flow-row gap-3">
				{weekDays.map((weekDay, i) => <WeekDay key={`${weekDay}-${i}`} text={weekDay} />)}
			</div>
			<div className="grid grid-rows-7 grid-flow-col gap-3">
				{summaryDates.map(date => <HabitDay key={date.toString()} />
				)}
				{ammountOfDaysToFill > 0 && Array.from({length: ammountOfDaysToFill}).map((_, i) => <HabitDay isActive={false} />)}
			</div>

		</div >
	)
}
