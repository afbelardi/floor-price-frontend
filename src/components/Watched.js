

export default function Watched(props) {

    const emptyWatched = (
        <>
            <h1 className="mt-16 text-4xl text-center text-white break-words font-gilroy">Nothing to see here....yet</h1>
            <span className="mt-5 text-7xl">👀</span>
        </>
    )

    return (
        <>
            <div className="flex flex-col items-center w-full mt-10 h-1/2">
                <h1 className="p-6 mt-10 text-6xl text-white font-gilroy">Watched</h1>
                {
                    props.watchedNFTs.length === 0 ?
                    emptyWatched
                    : ''
    
                }
            </div>
        </>
    )
}