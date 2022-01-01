export default function toTitleCase(str: string): string {
	const [first, ...chars] = str.split('')
	return first.toUpperCase() + chars.join('')
}
