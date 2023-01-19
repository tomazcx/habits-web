import * as Progress from '@radix-ui/react-progress'

interface IProgressBar {
	progress: number
}

export const ProgressBar = ({progress}: IProgressBar) => {
	return (
		<Progress.Root className='bg-zinc-700 rounded-full w-full h-4 mt-4  overflow-x-hidden '>
			<Progress.Indicator className='bg-violet-600 w-full h-full rounded-full' style={{transform: `translateX(-${100 - progress}%)`}} />
		</Progress.Root>

	)
}
