import usePark from '../hooks/usePark';
import styles from './styles/pagination.module.css';

// only showing up to 15 pages of parks content
const PaginationSequence = ({ current, total, onPageChange }) => {
    // when page total is greater than 7
    if (total > 7) {
        switch (true) {
            case current < 5:
                return (
                    <>
                        <button onClick={() => onPageChange(1)} disabled={current == 1}> 1 </button>
                        <button onClick={() => onPageChange(2)} disabled={current == 2}> 2 </button>
                        <button onClick={() => onPageChange(3)} disabled={current == 3}> 3 </button>
                        <button onClick={() => onPageChange(4)} disabled={current == 4}> 4 </button>
                        <button onClick={() => onPageChange(5)} disabled={current == 5}> 5 </button>
                        <span className={styles.ellipsis}> &hellip; </span>
                        <button onClick={() => onPageChange(total)} > {total} </button>
                    </>
                );

            case current > (total - 4):
                return (
                    <>
                        <button onClick={() => onPageChange(1)} > 1 </button>
                        <span className={styles.ellipsis}> &hellip; </span>
                        <button onClick={() => onPageChange(total - 4)} disabled={current == total - 4}> {total - 4} </button>
                        <button onClick={() => onPageChange(total - 3)} disabled={current == total - 3}> {total - 3} </button>
                        <button onClick={() => onPageChange(total - 2)} disabled={current == total - 2}> {total - 2} </button>
                        <button onClick={() => onPageChange(total - 1)} disabled={current == total - 1}> {total - 1} </button>
                        <button onClick={() => onPageChange(total)} disabled={current == total}> {total} </button>
                    </>
                );

            default:
                return (
                    <>
                        <button onClick={() => onPageChange(1)}> 1 </button>
                        <span className={styles.ellipsis}> &hellip; </span>
                        <button onClick={() => onPageChange(current - 1)}> {current - 1} </button>
                        <button onClick={() => onPageChange(current)} disabled> {current} </button>
                        <button onClick={() => onPageChange(current + 1)}> {current + 1} </button>
                        <span className={styles.ellipsis}> &hellip; </span>
                        <button onClick={() => onPageChange(total)}> {total} </button>
                    </>
                );
        }
    } else {
        // when page total is less than 7
        let pageArr = [];
        for (let i = 1; i < total + 1; i++) { pageArr.push(i); }

        return (
            <>
                {pageArr.map(i => <button onClick={() => onPageChange(i)} disabled={current == i} key={i}>{i}</button>)}
            </>
        );

    }
};

const Pagination = ({ current, total, onPageChange, onPageLeft, onPageRight }) => {


    return (
        <div className={styles.wrapper}>
            <button onClick={() => onPageLeft()} disabled={current == 1} className={styles.arrow}>
                <span className='material-icons-round'>chevron_left</span>
            </button>
            <PaginationSequence current={current} total={total} onPageChange={onPageChange} />
            <button onClick={() => onPageRight()} disabled={current == total} className={styles.arrow}>
                <span className='material-icons-round'>chevron_right</span>
            </button>
        </div>
    );

};;


export default Pagination;