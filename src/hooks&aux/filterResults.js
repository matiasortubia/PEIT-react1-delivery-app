const filterResults = function (array, input) {
    const filteredResults = array.filter(el => {
        return el.name.toLowerCase().includes(input.toLowerCase());
    });
    return filteredResults;
};

export { filterResults };