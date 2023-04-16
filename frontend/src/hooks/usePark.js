import { useState } from 'react';
import { BACKEND_URL } from '../lib/variables';


/**
 * this manages the state for PlatformPark component
 * and handles api calls to backend
 * 
 */




const PAGE_LIMIT = 15; // parks per page


// these are global because they're shared among several components
// others don't need to be in a state, can just be returned
const initialState = {
    parks: [],
    pageTotal: null,
    currentPage: null,
    selected: null,
};




const usePark = () => {
    const [state, setState] = useState(initialState);

    return {
        parks: state.parks,
        pageTotal: state.pageTotal,
        currentPage: state.currentPage,
        selected: state.selected,

        async search(query, page) {
            const { term, area, filter, sort } = query || null;

            const termParam = term ? `term=${term}` : null;
            const areaParam = area ? `area=${area}` : null;
            const filterParam = filter ? `filter=${filter}` : null;
            const sortParam = sort ? `sort=${sort}` : null;

            // page - page number - the number of the page currently displayed
            const offset = (page - 1) * PAGE_LIMIT;

            // set query params in url to call backend
            const url = `${BACKEND_URL}/parks/limit${PAGE_LIMIT}/offset${offset}?${termParam}&${areaParam}&${filterParam}&${sortParam}`;

            // do not need to know token status or sending token in request header
            const data = await fetch(url).then(res => res.json());
            // const data = await res.json();

            setState({
                parks: data.currentParks,
                pageTotal: data.pageTotal > 15 ? 15 : data.pageTotal,
                currentPage: page
            });

            return {
                pageTotal: data.pageTotal > 15 ? 15 : data.pageTotal,
            };
        },

        async searchPrev(query) {
            if (state.currentPage > 1) {
                await this.search(query, state.currentPage - 1);
            }
        },

        async searchNext(query) {
            if (state.currentPage < state.pageTotal) {
                await this.search(query, state.currentPage + 1);
            }
        },





        /** select */
        select(park) {
            setState({ ...state, selected: park });
        },
    };

};


export default usePark;




// when hooks contain state and methods or generic name
// const actPark = usePark()