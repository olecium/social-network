import React, { useState } from "react";
import css from './Paginator.module.scss';

const Paginator = ({currentPage, totalItemsCount, onPageChange, pageSize, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionCounter, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionCounter - 1) * portionSize + 1;
    let rightPortionPageNumber = portionCounter * portionSize;

    return(
        <ul className={css.pagination}>
            {
                portionCounter > 1 &&
                <li><button onClick={() => { setPortionNumber(portionCounter - 1) }}>&lt;</button></li>
            }
            {
                pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map( p => {
                    return <li key={p} className={currentPage === p ? `${css.page} ${css.page__selected}` : css.page}>
                        <span onClick={() => {onPageChange(p)}}>{p}</span>
                    </li>
                })
            }
            {   
                portionCounter < portionCount &&
                <li><button onClick={() => { setPortionNumber(portionCounter + 1) }}>&gt;</button></li>
            }
            
        </ul>
    );
}

export default Paginator;