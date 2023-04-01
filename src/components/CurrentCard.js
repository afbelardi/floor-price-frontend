import { useState } from "react"

export default function CurrentCard (props) {

    return( 
        <>
        <div className="flex justify-center">
            <div className="w-1/2 h-20 rounded-lg bg-slate-500">
                <h1>{props.searchedCollection.collectionName}</h1>
            </div>
        </div>
        </>

    )
}