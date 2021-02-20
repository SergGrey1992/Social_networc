import React from 'react';
import style from "./Paginator.module.css";

type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (currentPageNumber: number) => void
}
export const Paginator = (props: UsersPropsType) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div>
			{pages.map((p, index) => {
				return <span key={index} className={props.currentPage === p ? style.selectedPage : ""}
										 onClick={() => {
											 props.onPageChanged(p)
										 }}
				>{p}</span>
			})}
		</div>
	)
}