import { useParams } from "react-router";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getPostQueryOption } from "../queryOptions/getPostQueryOptions";
import { Suspense } from "react";

const DetailPage = () => {
    const params = useParams()

    const { data } = useSuspenseQuery(getPostQueryOption(params.id))

    return ( 
    <div>
        <Suspense fallback={<>Loading</>}>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.body}</p>
                </div>
            </div>
        </Suspense>
    </div> );
}
 
export default DetailPage;