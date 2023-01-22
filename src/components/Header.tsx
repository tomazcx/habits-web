import logoImage from "../assets/logoHabits.svg"
import {Plus, X} from 'phosphor-react'
import {useState} from "react"
import * as Dialog from '@radix-ui/react-dialog';
import {NewHabitForm} from "./NewHabitForm";

export const Header = () => {

	return (
		<div className="w-full max-w-3xl mx-auto flex items-center justify-between">
			<img src={logoImage} alt="Habits" />

			<Dialog.Root>
				<Dialog.Trigger className="border transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background border-violet-500 font-semibold rounded-lg px-6 flex py-4 items-center gap-3 hover:border-violet-300">
					<Plus size={20} className="text-violet-500" />
					<span>Novo hábito</span>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0 " />
					<Dialog.Content className="absolute p-18 bg-zinc-900 rounded-2xl w-full p-8 max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
							<X size={24} />
						</Dialog.Close>

						<Dialog.Title className="text-3xl leading-tight font-extrabold">
							Criar hábito
						</Dialog.Title>
						<NewHabitForm />

					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>

		</div>
	)
}
