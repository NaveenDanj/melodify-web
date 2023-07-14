
function ArtistCard() {
  return (
    <div className="tw-grid-item tw-w-full tw-max-w-[200px] tw-px-2 tw-flex tw-flex-col tw-cursor-pointer tw-bg-[rgba(67,67,67,0.2)] hover:tw-bg-[rgb(67,67,67)] tw-py-2 tw-rounded-md">
        <div className="tw-ml-2 tw-cursor-pointer">
            <img style={{ width : 150 , height : 150 , borderRadius : 75 }} className="tw-rounded-md  tw-cursor-pointer" src="https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc" />
        </div>

        <div className="tw-mt-5 tw-flex tw-flex-col tw-my-auto tw-ml-3">
            <label className='tw-text-md tw-font-bold tw-cursor-pointer'>Eminem</label>
        </div>

        <div className="tw-mb-3 tw-mt-1 tw-flex tw-flex-col tw-my-auto tw-ml-3">
            <label className='tw-text-slate-200 tw-font-medium tw-text-sm tw-cursor-pointer'>Artist</label>
        </div>

    </div>
  )
}

export default ArtistCard