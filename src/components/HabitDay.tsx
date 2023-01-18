interface IHabitDay {
	isActive?: boolean
}

export const HabitDay = ({isActive}: IHabitDay) => {
	return (
		<div className={`w-10 border-2 h-10 bg-zinc-900 border-zinc-800 rounded-lg ${isActive === false ? 'opacity-40 cursor-not-allowed' : ''}`}>
		</div>

	)
}
