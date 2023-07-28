import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import PlaylistService from 'src/services/PlaylistService';
// import { RootState } from 'src/store/store';
// import { useSelector } from 'react-redux';
import { FetchPlaylistDTO } from 'src/types/dto';
import { useNavigate } from 'react-router-dom';



interface UpdatePlaylistDTO {
    data: FetchPlaylistDTO | null;
    id: string | null;
    _name: string;
    _description: string;
}

export default function EditPlaylistDialog({ data, id, _name, _description }: UpdatePlaylistDTO) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState<string>(_name);
    const [description, setDescription] = React.useState<string>(_description);
    const navigate = useNavigate();

    // const user: UserData | null = useSelector((state: RootState) => state.user.userData)

    const handleClickOpen = () => {
        setName(_name)
        setDescription(_description)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e: unknown) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        e.preventDefault()
        const res = await PlaylistService.updatePlaylistData(id, name, description)
        console.log(res)
        handleClose()
        navigate('/playlist?id=' + id)
    }

    return (
        <div>

            <div onClick={handleClickOpen} className='tw-flex tw-p-5'>
                <img className=' tw-shadow-lg' style={{ width: 200, height: 200, borderRadius: 100 }} src={data?.playlistCover} />

                <div className='tw-w-[100%] tw-h-[100px] tw-flex tw-flex-col tw-ml-5 tw-my-auto'>
                    <div className='tw-flex'>
                        <h1 className="tw-my-auto hover:tw-cursor-pointer tw-text-sm tw-font-semibold">Public playlist</h1>
                    </div>

                    <label className='tw-font-bold tw-text-5xl tw-mt-2'>{data?.playlistData.name}</label>
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
                            <img style={{ width: 150 }} className='tw-rounded-xl tw-shadow-md' src={data?.playlistCover} />
                        </div>

                        <div className='tw-mt-2'>
                            <div className='tw-p-[5px] tw-rounded-md tw-bg-[#121212] tw-flex tw-my-auto'>
                                <input value={name} onChange={(e) => setName(e.target.value)} required style={{ borderColor: 'None' }} className='tw-bg-[#121212] ' placeholder='Add a name' type='text' />
                            </div>

                            <div className='tw-px-[2px] tw-mt-4 tw-rounded-md tw-bg-[#121212] tw-flex tw-my-auto'>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} style={{ borderColor: 'None' }} className='tw-rounded-md tw-bg-[#121212] tw-w-full' placeholder='Add an optional description' >
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