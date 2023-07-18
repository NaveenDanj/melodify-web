import AutorenewIcon from '@mui/icons-material/Autorenew';

function ComponentLoading() {
  return (
    <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-0">
      <div className="tw-text-white tw-text-4xl">
        <AutorenewIcon className="tw-animate-spin" />
      </div>
    </div>
  )
}

export default ComponentLoading