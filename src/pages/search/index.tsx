import React, { useState } from "react";
import { useRouter } from "next/router";
import Profile from "@/component/Profile/Profile";
import icon from "@/assets/images/OIG16.jpg";


const SearchPage: React.FunctionComponent = () => {
    const router = useRouter();
    const { q } = router.query;
    const [result, setResult] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    return (
        <div className="flex flex-col">
            <div className="fixed left-0 top-0 bg-blue-300 h-36 w-screen z-10"></div>
            <div className="mt-36 bg-yellow-400 flex-grow flex flex-col ml-20">
                <div className="text-gray-500">About 590000000 result (0.29 seconds)</div>
                {result.map(() => {
                    return (
                        <div className="flex flex-col relative bg-red-300 mb-6 w-1/2">
                            <Profile src={icon.src} alt={"profile"} className={"absolute left-0 w-10 h-10"}></Profile>
                            <div className="absolute ml-12">Url</div>
                            <div className="absolute ml-12 mt-5">Source</div>
                            <div className="flex flex-col mt-10">
                                <div className="line-clamp-1 break-all">Title</div>
                                <div className="line-clamp-3 break-all">ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent</div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SearchPage;