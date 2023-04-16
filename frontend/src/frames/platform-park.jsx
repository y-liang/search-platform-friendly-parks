import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import SectionMap from '../segments/platform/section-map';
import Pagination from '../parts/pagination';
import usePark from '../hooks/usePark';

import { useWindowSize } from '../hooks/utility/useWindow';
import BarFilterSort from '../segments/platform/bar-filter-sort';
import useMap from '../hooks/utility/useMap';
import Tile from '../parts/tile';

import styles from './styles/platform-park.module.css';

/**
 * parks = tile + map
 * only display 225 out of all the parks
 * showing 15 total pages, 15 parks per page
 */
const PlatformPark = () => {

    // page
    let { page } = useParams();
    page = parseInt(page);

    // router
    const navigate = useNavigate();

    // query params to get content of this component
    const [searchParams, setSearchParams] = useSearchParams();
    let term = searchParams.get('term'); // could be null
    let area = searchParams.get('area');
    let filter = searchParams.get('filter');
    let sort = searchParams.get('sort');

    // provider
    const actPark = usePark();
    const actMap = useMap();

    // update component when refresh page, necessary for map section to reload and show markers
    useEffect(() => {
        actPark.search({ term, area, filter, sort }, page);
    }, []);

    // update component to url if page change
    useEffect(() => {
        actPark.search({ term, area, filter, sort }, page);
    }, [page]);

    // update component when params clicked on and changed
    useEffect(() => {
        navigate(`/parks/p1?${searchParams}`);
        actPark.search({ term, area, filter, sort }, 1);
    }, [searchParams]);

    // only affect the url, not fetching data, and then rerendering takes effect because of page change
    const handlePageChange = (page) => {
        navigate(`/parks/p${page}?${searchParams}`); // update the search param
    };
    const handlePageLeft = () => {
        navigate(`/parks/p${page - 1}?${searchParams}`);
    };

    const handlePageRight = () => {
        navigate(`/parks/p${page + 1}?${searchParams}`);
    };

    // 6 - park select
    const handleParkSelect = (one) => {
        actPark.select(one);
    };


    // 7 - check window size, mobile or desktop, visibilities for components 
    let windowSize = useWindowSize();
    const [display, setDisplay] = useState({
        mapSection: true,
        tileSection: true,
    });

    // search this area in bar filter sort component, visible when map section is visible
    const [areaFilter, setAreaFilter] = useState(true); // visibility same as map
    const [sortVisible, setSortVisible] = useState(true); // visibility same as log section

    useEffect(() => {
        if (windowSize.width <= 750) {
            setDisplay({
                mapSection: false,
                tileSection: true
            });
            setAreaFilter(false);
            setSortVisible(true);
        } else {
            setDisplay({
                mapSection: true,
                tileSection: true
            });
            setAreaFilter(true);
            setSortVisible(true);
        }
    }, [windowSize.width]);


    // button only shows when window size is less than 720
    const toggleDisplayChange = () => {
        if (!display.mapSection) {
            setDisplay({
                mapSection: true,
                tileSection: false
            });
            setAreaFilter(true);
            setSortVisible(false);
        }
        if (!display.tileSection) {
            setDisplay({
                mapSection: false,
                tileSection: true
            });
            setAreaFilter(false);
            setSortVisible(true);
        }
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <BarFilterSort actMap={actMap} areaFilterVisible={areaFilter} sortVisible={sortVisible} />
            </div>
            <div className={styles.middle}>
                {actPark.pageTotal !== null && actPark.pageTotal !== 0 ?
                    <>
                        <div className={`${styles.left} ${display.tileSection ? styles.visible : null}`}>
                            <ul className={styles.tiles}>
                                {actPark.parks.map((park, index) =>
                                    <Tile park={park} key={index} onParkSelect={handleParkSelect} selected={actPark.selected} />
                                )}
                            </ul>
                            <div>
                                <Pagination current={page} total={actPark.pageTotal} onPageChange={handlePageChange} onPageLeft={handlePageLeft} onPageRight={handlePageRight} />
                            </div>
                        </div>
                        <div className={`${styles.right} ${display.mapSection ? styles.visible : null}`}>
                            <SectionMap actMap={actMap} pageParks={actPark.parks} onParkSelect={handleParkSelect} selected={actPark.selected} />
                        </div>
                    </> :
                    <div className={styles.browse}>
                        <span className={styles.label} >No results found</span>
                        <Link to='/parks/p1' className={styles.button}> Browse more parks</Link>
                    </div>
                }

                <button className={styles.toggle} onClick={toggleDisplayChange}>
                    view&nbsp;<span className='material-icons-round'>{display.mapSection ? 'list' : 'map'}</span>
                </button>
            </div>
        </div>
    );


};



export default PlatformPark;


/**
 * update content base on search params in url
 * it calls usePark in useEffect automatically after the url update
 * 
 * no need to use navigate if using setSearchParams
 * but if page change, there is no setParams, so have to use navigate
 */