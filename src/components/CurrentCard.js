import { useState } from "react"

export default function CurrentCard (props) {

    return( 
        <>
        <div className="flex justify-center">
            <div className="flex w-11/12 h-64 rounded-lg bg-gradient-to-tr from-gray-200 to-indigo-200  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg  shadow-slate-800/60 text-sm px-5 py-2.5 text-center mr-2 mb-14">
                <section className="flex items-center w-5/12 pl-6">
                    <img src={props.searchedCollection.nftImage} className="flex justify-center w-40 h-40 rounded-md"/>
                </section>
                <section>

                </section>
            </div>
        </div>
        </>

    )
}