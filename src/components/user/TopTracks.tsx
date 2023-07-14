import TopTrackItem from "./TopTrackItem"

function TopTracks() {
  return (
    <div className='tw-w-full tw-mt-7'>
        <div className="tw-flex tw-justify-between">

            <div className="tw-flex tw-flex-col tw-gap-2">
                <label className="hover:tw-cursor-pointer tw-text-2xl tw-font-bold hover:tw-underline">Top tracks this month</label>
                <label className='tw-text-xs tw-font-thin tw-text-slate-200'>Only visible to you</label>
            </div>

            <label className="tw-my-auto tw-cursor-pointer tw-text-slate-200 hover:tw-underline tw-text-sm tw-font-bold">Show all</label>
        
        </div>

        <div className="tw-mt-4">
            <TopTrackItem />
            <TopTrackItem />
            <TopTrackItem />
            <TopTrackItem />
        </div>

    </div>

  )
}

export default TopTracks