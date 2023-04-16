


const useDate = () => {


    return {
        monthYear(date) {
            const time = new Date(date);
            const year = time.getFullYear();
            const month = time.toLocaleString('default', { month: 'long' });

            return `${month}, ${year}`;
        }
    };

};


export default useDate;