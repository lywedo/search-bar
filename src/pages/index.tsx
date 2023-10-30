import React from "react";
import styles from "./index.module.css"
import { useRouter } from "next/router";
import SearchBar from "@/component/SearchBar/SearchBar";



export default function Home() {
    const router = useRouter();

    const goToSearch = () => {
        router.push('/search');
    }
    return (
        <div className="flex flex-col bg-yellow-100 h-screen w-screen">
            <div className="bg-blue-400 h-16 w-screen flex">
                <div className="self-center ml-2 text-lg">About</div>
                <div className="self-center ml-2  text-lg">Store</div>
                <div className="flex-grow"></div>
                <div className="self-center mr-2 text-lg">Gmail</div>
                <div className="self-center mr-2  text-lg">Images</div>
            </div>
            <SearchBar className={"my-auto w-3/5 self-center"} func={goToSearch} showButtons={true}/>
        </div>
    )
}
