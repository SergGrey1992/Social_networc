export const required = (value: string) => {
	if (value) return undefined
	return "Field is required"
}

// export const maxLength30 = (value: string) => {
// 	if (value.length > 30) return "Max value length is 30 symbols"
// 	return undefined
// }
export const maxLengthCreator = (maxLength: number) => (value: string) => {
	if (value.length > maxLength) return `Max value length is ${maxLength} symbols`
	return undefined
}


