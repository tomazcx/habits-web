import {Check} from "phosphor-react"
import {FormEvent, useState} from "react"
import {api} from "../lib/api"
import {CheckboxWeekDay} from "./CheckboxWeekDay"

export const NewHabitForm = () => {

	const [title, setTitle] = useState('')
	const [weekDays, setWeekDays] = useState<number[]>([])

	const availableWeekDays = [
		'Domingo',
		'Segunda-feira',
		'Terça-feira',
		'Quarta-feira',
		'Quinta-feira',
		'Sexta-feira',
		'Sábado'
	]

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		if (!title || weekDays.length === 0) {
			return
		}

		await api.post('habits', {
			title,
			weekDays
		})

		alert('Hábito criado com sucesso')
	}

	return (
		<form onSubmit={handleSubmit} className="w-full flex flex-col mt-6">
			<label htmlFor="title" className="font-semibold leading-tight">
				Qual seu comprometimento
			</label>

			<input type="text" onChange={(e) => setTitle(e.target.value)} id="title" placeholder="ex.: Exercícios, estudar, etc..." className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400" autoFocus />

			<label className="font-semibold leading-tight mt-6">Qual a recorrência</label>

			<div className="flex flex-col gap-2 mt-3">

				{availableWeekDays.map((day, index) => <CheckboxWeekDay key={`${day}-${index}`} label={day} index={index} weekDays={weekDays} setWeekDays={setWeekDays} />)}
			</div>

			<button type="submit" className="mt-6 rounded-lg p-4 flex items-center gap-3 font-semibold bg-green-600 justify-center transition-colors hover:bg-green-500">
				<Check size={20} weight="bold" />
				<span>Confirmar</span>
			</button>

		</form>
	)
}
