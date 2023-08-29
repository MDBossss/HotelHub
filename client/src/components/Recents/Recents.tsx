import { useState } from "react";
import { RecentModel } from "../../types/model";
import Recent from "../Recent/Recent";
import { useQuery } from "@tanstack/react-query";
import { fetchRecents } from "../../utils/fetchRecents";
import Spinner from "../Loaders/Spinner/Spinner";

const Recents = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["recents"],
        queryFn: fetchRecents,
        refetchOnWindowFocus: false
    });

    return (
        <div className="recents-items">
            {isLoading ? (
                <Spinner/>
            ) : (
                data?.map((recent) => (
                    <Recent key={recent.id} recent={recent} />
                ))
            )}

            {}
        </div>
    );
};

export default Recents;
