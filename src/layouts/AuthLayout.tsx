import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className="tw-w-full tw-my-auto tw-items-center tw-flex tw-justify-center tw-min-h-[100vh] tw-bg-gradient-to-b tw-from-[#1A1A1A] tw-to-[#040404]">
        <Outlet />
    </div>
  )
}

export default AuthLayout