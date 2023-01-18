interface IWeekDay {
	text: string
}

export const WeekDay = ({text}: IWeekDay) => {
	return (
		<div className="font-bold text-zinc-400 text-xl h-10 w-10 flex items-center justify-center " >
			{text}
		</div >

	)
}
