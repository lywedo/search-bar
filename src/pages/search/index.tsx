import React, { useState } from "react";
import { useRouter } from "next/router";
import Profile from "@/component/Profile/Profile";
import icon from "@/assets/images/OIG16.jpg";
import SearchBar from "@/component/SearchBar/SearchBar";
import InfiniteScroll from "react-infinite-scroll-component";


const SearchPage: React.FunctionComponent = () => {
    const router = useRouter();
    const { q } = router.query;
    // const [result, setResult] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    // const initialItems = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [items, setItems] = useState([1, 1, 1, 1, 1, 1, 1]);

    const requestList = () => {
        setTimeout(() => {
            setItems(items.concat([1, 1, 1, 1, 1]));
        }, 1000);
    };

    const search = () => {

    }
    return (
        <div className="flex flex-col">
            <div className="fixed left-0 top-0 bg-blue-300 h-36 w-screen z-10">
                <img src="/images/googlelogo_color.png" alt="google" className="w-52 ml-20 top-10 absolute sm:block hidden"></img>
                <SearchBar className={"absolute sm:w-48 w-screen sm:left-52 top-14 sm:ml-28"} func={search} showButtons={false}></SearchBar>
            </div>
            <div className="mt-36 bg-yellow-400 flex-grow flex flex-col sm:ml-20">
                <div className="text-gray-500">About 590000000 result (0.29 seconds)</div>
                <InfiniteScroll
                    style={{ marginTop: 0 }}
                    // height={`h-36`}
                    dataLength={items.length}
                    next={requestList}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    refreshFunction={requestList}
                    pullDownToRefresh
                    pullDownToRefreshThreshold={30}
                    pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>
                        &#8595; Pull down to refresh
                    </h3>}
                    releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>
                        &#8593; Release to refresh
                    </h3>}
                >
                    {items.map((item, index) => (
                        <div className="flex flex-col relative bg-red-300 mb-6 md:w-1/2 sm:w-2/3 w-screen">
                            <Profile src={icon.src} alt={"profile"} className={"absolute left-0 w-10 h-10"}></Profile>
                            <div className="absolute ml-12">Url</div>
                            <div className="absolute ml-12 mt-5">Source</div>
                            <div className="flex flex-col mt-10">
                                <div className="line-clamp-1 break-all">Title</div>
                                <div className="line-clamp-3 break-all">ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent</div>
                            </div>

                        </div>
                    ))}
                </InfiniteScroll>
                {/* {result.map((key, value) => {
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
                })} */}
            </div>
        </div>
    )
}

export default SearchPage;