import { useState } from "react"

export default function CurrentCard (props) {

    return( 
        <>
        <div className="flex justify-center h-2/5">
            <div className="flex w-11/12 mr-2 text-center bg-white rounded-lg h-4/5 mb-14">
                <section className="flex items-start w-5/12 pt-6 pl-6">
                    <img src={props.searchedCollection.nftImage} className="rounded-md w-3/3"/>
                </section>
                <section>

                </section>
            </div>
        </div>
        </>

    )
}