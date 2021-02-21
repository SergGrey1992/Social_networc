import React, {useState} from 'react';
import style from "./Paginator.module.css";

type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	portionSize: number
	onPageChanged: (currentPageNumber: number) => void
	setCurrentPage: (pageNumber: number) => void
}
export const Paginator: React.FC<UsersPropsType> = ({currentPage,
																											pageSize,
																											portionSize= 10 ,
																											totalUsersCount,

																										setCurrentPage}) => {
	const pageCount: number = Math.ceil(totalUsersCount / pageSize);
	const pages: Array<number> = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	const portionCount = Math.ceil(pageCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div>

			{ portionNumber > 1 &&
      <button onClick={()=> {setPortionNumber(portionNumber-1)}}>PREV</button>
			}


			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p, index) => {

				return <span key={index}
										 className={currentPage === p ? style.selectedPage : ""}
										 onClick={() => {setCurrentPage(p)}}> {p} </span>
			})}

			{ portionCount > portionNumber &&
      <button onClick={()=> {setPortionNumber(portionNumber+1)}}>NEXT</button>
			}

		</div>
	)
}