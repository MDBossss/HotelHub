import Filter from "../components/Filter/Filter";

export default function getFilterByValue(filters:Filter[],value:string){
    const foundFilter = filters.find((filter) => filter.value === value);

    if (foundFilter) {
        return foundFilter;
    }

    return { label: "Any", value: null };

}