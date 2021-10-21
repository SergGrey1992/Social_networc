type OptionalType<T> ={
	[Property in keyof T]?: T[Property]
}
export const updateObjInArray = <T>(items: Array<T>,
																 itemId: T[keyof T],
																 objProp: keyof T,
																 newObjProps: OptionalType<T>) => {
	return items.map(item => {
		return item[objProp] === itemId ? {...item, ...newObjProps} : item
	})
}