import React from "react";
import css from './Paginator.module.scss';

const Paginator = ({currentPage, totalItemsCount, onPageChange, pageSize}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    
    return(
        <ul className={css.pagination}>
            {
                pages.map( p => {
                    return <li key={p} className={currentPage === p ? `${css.page} ${css.page__selected}` : css.page}>
                        <span onClick={() => {onPageChange(p)}}>{p}</span>
                    </li>
                })
            }
            
        </ul>
    );
}

export default Paginator;