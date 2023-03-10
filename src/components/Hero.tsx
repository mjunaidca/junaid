
interface Props {
    call: string,
    head: string,
    details: string
}

const HeroDetails = ({ call, head, details }: Props) => {


    return (
        <div>
            <div key='el' className="flex flex-col w-full pt-14 sm:pt-16 md:pt-20 lg:pt-28 xl:pt-36 2xl:pt-48 ">
                <div className=" text-[12px] sm:text-base md:text-[18px] lg:[text-22px] font-semibold px-2 sm:px-0">
                    <div className={`animate-pulse duration-10000'`}>
                        {call}
                    </div>
                </div>
                <div className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] px-4 sm:px-0 font-bold">
                    {head}
                </div>
                <div className="pt-1 text-base sm:text-base md:text-[18px] lg:[text-22px] px-4 sm:px-0 relative">
                    {details}
                </div>
            </div>
        </div>
    )
}

export default HeroDetails;