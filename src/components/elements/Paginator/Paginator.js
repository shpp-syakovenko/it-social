import React,{useState} from 'react';
import s from './Paginator.module.css';

const Paginator = ({pageSize, totalUsersCount, onPageChange, currentPage, porsionSize = 10}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for(let i = 1; i <= pageCount; i++){
    pages.push(i);
  }

  let porsionCount = Math.ceil(pageCount / porsionSize);
  let[porsionNumber, setPorsionNumber] = useState(1);
  let leftPosionNumber = (porsionNumber - 1) * porsionSize +1;
  let rightPosionNumber = porsionNumber * porsionSize;
  return (
    <div className={s.pagination}>
      {porsionNumber > 1 && <button onClick={() => setPorsionNumber(porsionNumber - 1)}>prev</button>}
      {
        pages.filter(p => p >= leftPosionNumber && p <= rightPosionNumber)
          .map(p =>
          <span key={p} onClick={() => onPageChange(p)}
                className={currentPage === p ? s.activePage : null}>
                        {p}
                    </span>
        )
      }
      {porsionCount > porsionNumber && <button onClick={() => setPorsionNumber(porsionNumber + 1)}>next</button>}
    </div>
  )
};

export default Paginator;
