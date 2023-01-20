import {ICheckbox} from "./ICheckbox";

export interface ICheckboxWeekDay extends ICheckbox {
	index: number
	weekDays: number[]
	setWeekDays(weekDays: number[]): void
}
