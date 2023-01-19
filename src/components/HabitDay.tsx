import * as Popover from "@radix-ui/react-popover"
import {ProgressBar} from "./ProgressBar"

interface IHabitDay {
	isActive?: boolean
}

export const HabitDay = ({isActive}: IHabitDay) => {
	return (
		<Popover.Root>

			<Popover.Trigger className={`w-10 border-2 h-10 bg-zinc-900 border-zinc-800 rounded-lg ${isActive === false ? 'opacity-40 cursor-not-allowed' : ''}`} />
			<Popover.Portal>
				<Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
					<span className="font-semibold text-zinc-400">Terça-feira</span>
					<span className="mt-1 font-extrabold leading-tight text-3xl">17/01</span>

					<ProgressBar progress={50} />
					<Popover.Arrow height={8} width={16} className="fill-zinc-900" />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>

	)
}
