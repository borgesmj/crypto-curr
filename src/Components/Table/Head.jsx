import React from 'react'

const Head = () => {
  return (
    <thead className='border-b-solid border-b-[1px] border-b-[#ffffff50] sticky top-0  z-[1] bg-[#1A1A1A] md:text-xl'>
      <tr className='py-4 table-row'>
        <th className='table-cell'>Assets</th>
        <th className='table-cell'></th>
        <th className='table-cell'>Price($)</th>
        <th className='table-cell'>24H</th>
        <th></th>
      </tr>
    </thead>
  )
}

export default Head
