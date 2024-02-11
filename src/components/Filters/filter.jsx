import { CheckCircle, CircleOutlined, KeyboardArrowDown } from "@mui/icons-material"
import { Fragment } from "react"

const Filters = () => {
    return (
        <Fragment>
            <div className="bg-[#111739] flex items-center justify-between py-4 px-4">
                <div className="flex justify-start items-center">
                <p className='text-sm text-[#f5f6f7]'>Quick Filters: </p>
                <div className="bg-[#13234c] border border-[#152d5a] px-4 py-2 ml-4 relative">
                    <div className='bg-[#c3d4d7] w-[2px] h-4 left-0 absolute' />
                    <p className="text-[#2b80d5] text-xs">
                        <CheckCircle style={{ fill: '#329dff', fontSize: '20px' }} /> &nbsp;
                        All Payouts
                    </p>
                </div>
                <div className="bg-[#111d42]  px-4 py-2 ml-4 relative">
                    <div className='bg-[#b87702] w-[2px] h-4 left-0 absolute' />
                    <p className="text-[#c3d4d7] text-xs">
                        <CircleOutlined style={{ fill: '#255fa4', fontSize: '20px' }} /> &nbsp;
                        Scheduled for next 2 days
                    </p>
                </div>
                <div className="bg-[#111d42]  px-4 py-2 ml-4 relative">
                    <div className='bg-[#b87702] w-[2px] h-4 left-0 absolute' />
                    <p className="text-[#c3d4d7] text-xs">
                        <CircleOutlined style={{ fill: '#255fa4', fontSize: '20px' }} /> &nbsp;
                        Queued (RazorpayX A/c) 1
                    </p>
                </div>
                </div>
                <p className="text-[#78a7eb] text-sm">View More Filters<KeyboardArrowDown /></p>
            </div>
        </Fragment>
    )
}

export default Filters
