import DiscographyItem from "./DiscographyItem"
import { Chip } from '@mui/material';

function Discography() {
  return (
    <div className="tw-full tw-mt-5 ">

        <div className='tw-flex tw-gap-2'>
            <Chip className='hover:tw-bg-[#2A2A2A] tw-cursor-pointer' label="Popular releases"  />
            <Chip className='hover:tw-bg-[#2A2A2A] tw-cursor-pointer' label="Albums"  />
            <Chip className='hover:tw-bg-[#2A2A2A] tw-cursor-pointer' label="Singles and Eps"  />                        
            <Chip className='hover:tw-bg-[#2A2A2A] tw-cursor-pointer' label="Compilations"  />                        
        </div>


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

export default Discography