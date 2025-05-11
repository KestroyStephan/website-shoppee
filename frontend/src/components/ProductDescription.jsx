import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta adipisci nihil deserunt delectus? Dignissimos, numquam eum, voluptates reiciendis ipsa maxime enim quasi praesentium est totam neque dolores quam placeat commodi corporis repudiandae repellat assumenda amet doloremque modi! Non magnam id animi eveniet aperiam minus itaque voluptate voluptas! At aliquid fugit, hic consectetur itaque similique?</p>
            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum optio iusto alias maiores obcaecati tempora, error beatae, aperiam, nisi recusandae illum. Eveniet, magnam ab dolorem possimus tenetur vel!</p>
        </div>
    </div>
  )
}

export default ProductDescription