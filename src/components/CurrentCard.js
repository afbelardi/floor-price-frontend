import { useState } from "react"

export default function CurrentCard (props) {

    return( 
        <>
        <div className="flex justify-center h-2/5">
            <div className="flex w-11/12 mr-2 text-center bg-white rounded-lg h-4/5 mb-14">
                <section className="flex items-start w-5/12 pt-6 pl-6">
                    <img src={props.searchedCollection.nftImage} className="rounded-md w-3/3"/>
                </section>
                    <ul className="flex flex-col w-3/5 pt-6">
                        <li className="flex flex-col mb-4 h-22"> 
                            <h2 className="mb-2 text-xl font-gilroy text-slate-500">Collection Name</h2>
                            <p className="text-2xl leading-tight text-black font-gilroy">{props.searchedCollection.collectionName}</p>
                        </li>
                        <li className="flex flex-col h-16"> 
                            <h2 className="mb-2 text-xl font-gilroy text-slate-500">Floor Price</h2>
                            <p className="text-2xl text-black font-gilroy">{props.searchedCollection.floorPrice}</p>
                        </li>
                    </ul>
            </div>
        </div>
        </>

    )
}