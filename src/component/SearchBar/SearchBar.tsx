import React, { KeyboardEvent } from 'react';

const SearchBar = ({ className, func, showButtons }) => {
    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            func();
        }
    }
    return (
        <div className={`relative ${className}`} onKeyUp={handleKeyUp}>
            <div className="flex items-center">
                <svg className="absolute left-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.75-3.53-3.85-6-7.5-6a6.505 6.505 0 00-6.5 6.5c0 3.64 2.96 6.5 6.5 6.5 1.84 0 3.5-.78 4.73-2.03l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 010-9 4.5 4.5 0 010 9z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>

                <input type="text" className="block w-full bg-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline-gray"
                    placeholder="Search Google" />
            </div>
            {showButtons ? <div className="flex justify-center">
                <button className="bg-slate-100 rounded-md p-2 mt-2" onClick={func}>Google Search</button>
                <div className="w-2"></div>
                <button className="bg-slate-100 rounded-md p-2 mt-2">I'm Feeling Lucky</button>
            </div> : null}


        </div>
    );
};

export default SearchBar;
