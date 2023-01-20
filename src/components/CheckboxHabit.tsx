import * as Checkbox from '@radix-ui/react-checkbox'
import {Check} from "phosphor-react"
import {ICheckbox} from './interfaces/ICheckbox'

export const CheckboxHabit = ({label}: ICheckbox) => {

	return (

		<Checkbox.Root
			onCheckedChange={() => {}}
			className="flex items-center gap-3 group">
			<div className="h-8 w-8 rounded-lg flex border border-zinc-800 bg-zinc-900 items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
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
