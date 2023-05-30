import { useState } from "react";
import { RecentModel } from "../../types/model";
import Recent from "../Recent/Recent";
import { useQuery } from "@tanstack/react-query";
import { fetchRecents } from "../../utils/fetchRecents";
import GenericLoader from "../Loaders/GenericLoader/GenericLoader";

const Recents = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["recents"],
        queryFn: fetchRecents,
    });

    return (
        <div className="recents-items">
            {isLoading ? (
                <GenericLoader />
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
