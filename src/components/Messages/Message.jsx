const Message = () => {
    return (
        <div className="flex bg-[#282d4d] py-4 px-4 mx-10 my-4 rounded ">
                <div className="flex justify-start items-center ">
                    <p className="uppercase bg-[#b87702] px-1 py-1 text-[#20202] rounded-sm text-xs mr-4 ">Test</p>
                    <p className="text-sm mr-4 text-[#c3d4d7] ">These are test payouts and do not effect the actual balance. They are used only for the purpose of integrating events.</p>
                    <button className="text-sm text-[#66a7f3]">Learn More</button>
                </div>
            </div>
    )
}

export default Message
