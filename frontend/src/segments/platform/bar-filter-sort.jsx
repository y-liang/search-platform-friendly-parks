import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWindowSize, useWindowClickAway } from '../../hooks/utility/useWindow';

import styles from './styles/bar-filter-sort.module.css';


const BarFilterSort = ({ actMap, areaFilterVisible, sortVisible }) => {

    // 1 - parks in this area, get map area, and user location input
    const [searchParams, setSearchParams] = useSearchParams();

    let existedTerm = searchParams.get('term'); // could be null
    let existedArea = searchParams.get('area');
    let existedFilter = searchParams.get('filter');
    let existedSort = searchParams.get('sort') || 'any';


    // 2 - area
    const reduceArea = () => {
        if (existedArea) {
            let array = existedArea.split(','); // %2C in url is comma
            return array;
        } else {
            return [];
        }
    };
    const [area, setArea] = useState(reduceArea());
    const handleAreaSearch = async () => {
        const { _southWest: sw, _northEast: ne } = actMap.getViewBounds();
        const { lat: swLat, lng: swLng } = sw;
        const { lat: neLat, lng: neLng } = ne;
        setArea([swLat, swLng, neLat, neLng]);
    };


    // 3 - filter
    const reduceFilter = () => {
        if (existedFilter) {
            let array = existedFilter.split('+');

            let obj = {};
            array.forEach(item => obj[item] = true);
            return obj;

        } else {
            return {};
        }
    };
    const [filter, setFilter] = useState(reduceFilter());
    const toggleFilter = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.checked });
    };


    // 4 - sort
    const [sort, setSort] = useState({ value: existedSort });
    const handleSortChange = (event) => {

        switch (event.target.className.split(' ')[0]) {
            case 'any':
                setSort({ value: 'any' });
                break;
            case 'friendliness':
                setSort({ value: 'friendliness' });
                break;
            case 'popularity':
                setSort({ value: 'popularity' });
                break;

            default:
                break;
        }

    };



    // set search params
    useEffect(() => {
        let termParam = existedTerm ? existedTerm : '';
        let areaParam = area ? area.join(',') : '';
        let filterParam = Object.keys(filter).filter(key => filter[key] == true).join('+');
        let sortParam = sort.value;
        setSearchParams({ term: termParam, area: areaParam, filter: filterParam, sort: sortParam });
    }, [area, filter, sort]);



    // 6 - click button expand show menu
    const clickedAway = useWindowClickAway('sort'); // className as argument
    const [expanded, setExpanded] = useState(false);
    const handleSortExpanded = () => {
        setExpanded(!expanded);
    };
    useEffect(() => {
        if (clickedAway) {
            setExpanded(false);
        }
    }, [clickedAway]);


    // scroll left and right
    const scrollableElem = useRef(null);
    const handleScroll = (direction) => {
        switch (direction) {
            case 'left':
                // scrollableElem.current.scrollLeft -= 60;
                document.getElementById('scrollable').scrollLeft -= 60;

                break;
            case 'right':
                scrollableElem.current.scrollLeft += 60;
                break;
            default:
                break;
        }
    };




    // 7 - check window size, mobile or desktop; and if click away
    let windowSize = useWindowSize();
    const [arrow, setArrow] = useState(false);

    useEffect(() => {
        if (windowSize.width <= 434) {
            setArrow(true);
        } else {
            setArrow(false);
        }

    }, [windowSize.width]);



    return (

        <div className={styles.wrapper}>


            <div className={styles.segment}>
                <button onClick={() => handleScroll('left')} className={`${styles.arrow} ${arrow ? styles.visible : null}`}>
                    <span className='material-icons-round'>keyboard_arrow_left</span>
                </button>
                <div
                    // className={styles.scrollable}
                    // ref={scrollableElem}
                    id='scrollable'>
                    <div className={styles.filter}>
                        <span>pet allowed</span>
                        <ul>
                            <li className={styles.button}>
                                <label>
                                    <input name='allowed' type='checkbox' defaultValue={filter.allowed} onChange={toggleFilter} />
                                    <span>in park</span>
                                </label>
                            </li>

                            <li className={styles.button}>
                                <label>
                                    <input name='road' type='checkbox' defaultValue={filter.road} onChange={toggleFilter} />
                                    <span>on road</span>
                                </label>
                            </li>
                            <li className={styles.button}>
                                <label>
                                    <input name='trail' type='checkbox' defaultValue={filter.trail} onChange={toggleFilter} />
                                    <span>on trail</span>
                                </label>
                            </li>
                            <li className={styles.button}>
                                <label>
                                    <input name='beach' type='checkbox' defaultValue={filter.beach} onChange={toggleFilter} />
                                    <span>on beach</span>
                                </label>
                            </li>
                            <li className={styles.button}>
                                <label>
                                    <input name='campground' type='checkbox' defaultValue={filter.campground} onChange={toggleFilter} />
                                    <span>in campground</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <button onClick={() => handleScroll('right')} className={`${styles.arrow} ${arrow ? styles.visible : null}`}>
                    <span className='material-icons-round'>keyboard_arrow_right</span>
                </button>
            </div>

            {/* below sort can't be in scrollable because it's expandable */}
            <div className={styles.segment}>
                {areaFilterVisible ? <div className={styles.area}>
                    <button onClick={handleAreaSearch} className={styles.button}>
                        <span className='material-icons-round'>map</span>
                        <span>search this area</span>
                    </button>
                </div> : <></>}


                {sortVisible ? <div className={styles.sort}>
                    <span>sort by</span>
                    <button className={`sort ${styles.button}`} onClick={handleSortExpanded}>
                        <span className='material-icons-round'>filter_list</span>
                        <span className='sort'> {sort.value} </span>
                    </button>
                    <ul className={`sort ${expanded ? styles.visible : null} ${styles.expandable}`}>
                        <li onClick={handleSortChange} className={`any ${sort.value == 'any' ? styles.selected : null}`}>any</li>
                        <li onClick={handleSortChange} className={`friendliness ${sort.value == 'friendliness' ? styles.selected : null}`}>friendliness</li>
                        <li onClick={handleSortChange} className={`popularity ${sort.value == 'popularity' ? styles.selected : null}`}>popularity</li>
                    </ul>
                </div> : <></>}
            </div>


        </div>

    );

};




export default BarFilterSort;


