import ProductRating from 'src/components/ProductRating'
import { Product as productType } from 'src/types/product.type'
import { formatCurrency, formatNumberToSocialStyle } from 'src/utils/utils'
import { Link } from 'react-router-dom'

interface Props {
  product: productType
}
export default function Product({ product }: Props) {
  return (
    <Link to='/'>
      <div className='rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md'>
        <div className='w-full relative pt-[100%]'>
          <img src={product.image} className='absolute top-0 left-0 bg-white w-full h-full object-cover'></img>
        </div>
        <div className='overflow-hidden p-2'>
          <div className='line-clamp-2 min-h-[2rem] text-xs'>{product.name}</div>
        </div>
        <div className='mt-1 flex items-center'>
          <div className='text-gray-500 line-through truncate'>
            <span className='text-xs'>₫</span>
            <span className='text-sm'>{formatCurrency(product.price_before_discount)}</span>
          </div>
          <div className='text-orange truncate ml-1'>
            <span className='text-xs'>₫</span>
            <span className='text-sm'>{formatCurrency(product.price)}</span>
          </div>
        </div>
        <div className='mt-3 flex items-center justify-end'>
          <ProductRating rating={product.rating} />
          <div className='ml-2 text-sm'>
            <span>{formatNumberToSocialStyle(product.sold)}</span>
            <span className='ml-1'>Đã bán</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
