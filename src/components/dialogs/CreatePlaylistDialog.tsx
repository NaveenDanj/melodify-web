import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import PlaylistService from 'src/services/PlaylistService';
import { RootState } from 'src/store/store';
import { useSelector } from 'react-redux';
import { SearchResults, UserData } from 'src/types/dto';
import { PlayList } from 'src/types/types';
import { useNavigate } from 'react-router-dom';



interface CreatePlaylistDTO {
    songs:SearchResults[]
}

export default function CreatePlaylistDialog({ songs }:CreatePlaylistDTO) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const navigate = useNavigate();

  const user:UserData | null = useSelector((state: RootState) => state.user.userData)
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e:unknown) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    e.preventDefault()
    const song:PlayList | null = await PlaylistService.createPlaylist(user , name , description , songs)
    console.log(song)
    handleClose()
    navigate('/')
  }

  return (
    <div>

        <div onClick={handleClickOpen} className='tw-flex tw-p-5'>
            <img className=' tw-shadow-lg' style={{ width : 200 , height : 200 , borderRadius : 100 }} src='https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc' />

            <div className='tw-w-[100%] tw-h-[100px] tw-flex tw-flex-col tw-ml-5 tw-my-auto'>
                <div className='tw-flex'>
                    <h1 className="tw-my-auto hover:tw-cursor-pointer tw-text-sm tw-font-semibold">Public playlist</h1>
                </div>

                <label className='tw-font-bold tw-text-5xl tw-mt-2'>My Playlist #32</label>
                <label className='tw-font-bold tw-text-sm tw-mt-10 tw-justify-end'>NaveenDan</label>
            </div>
        
        </div>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="xs"
        >

            <form onSubmit={(e) => handleSubmit(e)}>
                <DialogTitle className='tw-flex tw-justify-between' id="alert-dialog-title">
                    <label className='tw-my-auto tw-text-lg tw-font-bold'>Edit details</label>

                    <div onClick={handleClose} className='tw-flex tw-justify-center tw-items-center tw-my-auto tw-p-1 tw-cursor-pointer tw-rounded-lg hover:tw-bg-[#3E3E3E]'>
                        <CloseIcon sx={{ fontSize: 20, color: '#EDEDED' }} />
                    </div>

                </DialogTitle>

                <DialogContent className='tw-flex tw-gap-4 tw-flex-row'>

                    <div className='tw-mt-2 tw-w-50'>
                        <img style={{ width : 150 }} className='tw-rounded-xl tw-shadow-md' src='https://e-cdns-images.dzcdn.net/images/cover/88dfe86a64c1f108080069e8dee91b38/1000x1000-000000-80-0-0.jpg' />
                    </div>

                    <div className='tw-mt-2'>
                        <div className='tw-p-[5px] tw-rounded-md tw-bg-[#121212] tw-flex tw-my-auto'>
                            <input onChange={(e) => setName(e.target.value)} required style={{ borderColor : 'None' }} className='tw-bg-[#121212] ' placeholder='Add a name' type='text' />
                        </div>

                        <div className='tw-px-[2px] tw-mt-4 tw-rounded-md tw-bg-[#121212] tw-flex tw-my-auto'>
                            <textarea onChange={(e) => setDescription(e.target.value)} rows={4} style={{ borderColor : 'None' }} className='tw-rounded-md tw-bg-[#121212] tw-w-full' placeholder='Add an optional description' >
                            </textarea>
                        </div> 

                    </div>
                    

                </DialogContent>

                <DialogActions className='tw-mr-10 tw-mb-5'>
                    <button type='submit' className='tw-bg-white tw-text-black tw-my-auto tw-px-5 tw-rounded-3xl'>Save</button>
                </DialogActions>
            </form>


        </Dialog>

    </div>
  );
}