import { useState } from "react"

export default function CurrentCard (props) {

    return( 
        <>
        <div className="flex justify-center">
            <div className="flex w-11/12 h-64 rounded-lg bg-gradient-to-tr from-gray-200 to-indigo-200">
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