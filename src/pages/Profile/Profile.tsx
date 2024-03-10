export default function Profile() {
  return (
    <div className='bg-neutral-100 py-16 text-sm text-gray-600'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
          <div className='md:grid-cols-3 lg:grid-cols-2'>
            <div className='flex items-center border-b border-b-gray-200 py-4'>
              <img src='/assets/user-bd6b3c66.svg' className='h-full w-full object-cover' />
              <img className='h-full w-full object-cover' />
              <div className='flex-grow pl-4'>
                <div className='mb-1 truncate font-semibold text-gray-600'></div>
                <path
                  d='M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48'
                  fill='#9B9B9B'
                  fillRule='evenodd'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
