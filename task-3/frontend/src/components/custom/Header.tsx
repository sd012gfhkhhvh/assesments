import { FC } from 'react'

export const Header: FC<{header_text: string}> = ({header_text}): JSX.Element => {
  return (
    <div className='border-b border-[#EAECF0] w-full py-4 px-3 flex justify-between'>
        {/* header */}
        <div className='text-md text-[#282828] font-semibold'>{header_text}</div>

        {/* menu */}
        <div><img src='../../assets/vertical-dot.png' alt=':'/></div>
    </div>
  )
}
