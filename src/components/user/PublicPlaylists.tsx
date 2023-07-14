import DiscographyItem from "../artist/DiscographyItem"

function PublicPlaylists() {
  return (
    <div className="tw-full tw-mt-5 ">

      <div className="tw-grid tw-mt-5 tw-grid-container tw-grid-cols-[repeat(auto-fill,minmax(180px,1fr))] tw-gap-4">
        <DiscographyItem />
        <DiscographyItem />
        <DiscographyItem />
        <DiscographyItem />
        <DiscographyItem />
        <DiscographyItem />
        <DiscographyItem />
      </div>
      
    </div>
  )
}

export default PublicPlaylists