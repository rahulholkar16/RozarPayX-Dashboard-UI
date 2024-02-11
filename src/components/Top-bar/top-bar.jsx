import { Breadcrumbs} from "@mui/material"
import { HomeOutlined, KeyboardArrowDown, Search,PersonOutline, CampaignOutlined } from "@mui/icons-material" ;

const TopBar = ({ activePath }) => {
    return (
        <div className=" flex items-center justify-between bg-[#080d29] py-4 px-4 relative">
            <div className=" flex items-center justify-start">
                <Breadcrumbs aria-label="breadcrumb" style={{ color: '#f5f6f7' }}>
                    {
                        activePath === null
                            ?
                            <div
                                className='flex items-center py-2 cursor-pointer'>
                                <div className='mr-2 text-[#f5f6f7]'><HomeOutlined style={{ fontSize: '20px' }} /> </div>
                                <p className='text-sm text-[#f5f6f7]'>Home</p>
                            </div>
                            :
                            <div
                                className='flex items-center  py-2 cursor-pointer' >
                                <div className='mr-2 text-[#f5f6f7]'   >{activePath.icon}</div>
                                <p className='text-sm text-[#f5f6f7]'   >{activePath.title}</p>
                            </div>
                    }

                    <p className="bg-[#0c1a3e] text-[#72aee8] px-2 py-1 text-xs">Single</p>
                </Breadcrumbs>
                <div className="flex items-center justify-start ml-4 cursor-pointer">
                    <div className="flex items-center justify-start">
                        <p className=" text-[#f5f6f7] text-xs cursor-pointer">Bulk</p>
                        <p className="bg-[#05865c] text-[#f5f6f7] rounded-xl px-2 py-1 text-xs ml-2">NEW</p>

                    </div>
                    <p className=" text-[#f5f6f7] text-xs ml-4 cursor-pointer">Tally</p>
                    <p className=" text-[#f5f6f7] text-xs ml-4 cursor-pointer">Payout Links</p>
                </div>
            </div>
            <div className="flex items-center justify-start">

            <div className="flex items-center justify-start border border-[#5599eb] rounded-sm ">
                <button className=" px-4 py-2 text-[#5599eb] uppercase text-xs">
                    &#x2b; payout
                </button>
                <button className="px-2">
                    <KeyboardArrowDown style={{fontSize: '16px', fill:'#5599eb'}} />
                </button>
            </div>
            <Search  className="mx-4" style={{fontSize: '20px',fill:'#5599eb'}} />
            <CampaignOutlined  style={{fontSize: '20px', fill:'#b87702'}} />

            <PersonOutline  className="mx-2" style={{fontSize: '20px',fill:'#5599eb'}} />
            </div>
<div className="bg-[#d5ab0f] absolute top-0 left-[50%] text-[#554642] text-xs uppercase px-4 py-1 rounded-b-lg">go back to onboarding</div>

        </div>
    )
}

export default TopBar
