import dayjs from "dayjs"
import {useSummary} from "../hooks/useSummary"
import {generateDatesFromYearBeginning} from "../utils/generate-dates-from-year-begginning"
import {HabitDay} from "./HabitDay"
import {UnnactiveHabitDay} from "./UnnactiveHabitDay"
import {WeekDay} from "./WeekDay"

export const SummaryTable = () => {

	const {summary} = useSummary()

	const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

	const summaryDates = generateDatesFromYearBeginning()

	const minimumSummaryDatesSize = 18 * 7 //18 weeks
	const ammountOfDaysToFill = minimumSummaryDatesSize - summary.length

	return (
		<div className="w-full flex" >
			<div className="grid grid-rows-7 grid-flow-row gap-3">
				{weekDays.map((weekDay, i) => <WeekDay key={`${weekDay}-${i}`} text={weekDay} />)}
			</div>
			<div className="grid grid-rows-7 grid-flow-col gap-3">
				{summary.length > 0 ? summaryDates.map(date => {
					const dayInSummary = summary.find(day => {
						return dayjs(date).isSame(day.date, 'day')
					})

					console.log(dayInSummary?.completed)

					return <HabitDay key={date.toString()} date={date} amount={dayInSummary?.amount} defaultCompleted={dayInSummary?.completed} />
				}
				) : null}
				{ammountOfDaysToFill > 0 && Array.from({length: ammountOfDaysToFill}).map((_, i) => <UnnactiveHabitDay key={i} />)}
			</div>

		</div >
	)
}
