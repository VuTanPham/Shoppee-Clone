import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { QueryConfig } from '../ProductList'
import { Category } from 'src/types/category.type'
import classNames from 'classnames'
import { NoUndefinedField } from 'src/types/utils.type'
import { Schema, schema } from 'src/utils/rules'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputNumber from 'src/components/InputNumber'
import Button from 'src/components/Button'
import RatingStars from '../RatingStars'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
}

type FormData = NoUndefinedField<Pick<Schema, 'price_max' | 'price_min'>>

/**
 * Rule Validate Price
 * Nếu có price_min và price_max thì price_max >= price_min
 * Còn không thì có price_min thì ko có price_max và ngược lại
 */

const priceSchema = schema.pick(['price_min', 'price_max'])

export default function AsideFilter({ queryConfig, categories }: Props) {
  const { category } = queryConfig
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    },
    resolver: yupResolver(priceSchema),
    shouldFocusError: false
  })

  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        price_max: data.price_max,
        price_min: data.price_min
      }).toString()
    })
  })

  return (
    <div>
      <Link
        to={path.home}
        className={classNames('flex items-center font-bold', {
          'text-orange': !category
        })}
      >        <svg viewBox='0 0 12 10' className='mr-3 h-4 w-3 fill-orange'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </Link>
      <div className='my-4 h-[1px] bg-gray-300'></div>
      <ul>
        {categories.map((categoryItem) => {
          const isActive = category === categoryItem._id
          return (
            <li className='py-2 pl-2' key={categoryItem._id}>
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    category: categoryItem._id
                  }).toString()
                }}
                className={classNames('relative px-2 ', { 'text-orange font-semibold': isActive })}
              >
                {isActive && (
                  <svg viewBox='0 0 4 7' className='absolute left-[-10px] top-1 h-2 w-2 fill-orange'>
                    <polygon points='4 3.5 0 0 0 7' />
                  </svg>
                )}

                {categoryItem.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <Link to='/' className='mt-4 font-bold uppercase flex'>
        <svg
          enableBackground='new 0 0 15 15'
          viewBox='0 0 15 15'
          x={0}
          y={0}
          className='mr-3 h-4 w-3 fill-current stroke-current'
        >
          <g>
            <polyline
              fill='none'
              points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        Bộ lọc tìm kiếm
      </Link>
      <div className='my-4 h-[1px] bg-gray-300'></div>
      <div className='my-5'>
        <div className='py-2 pl-2'>Khoảng giá</div>
        <form onSubmit={onSubmit}>
          <div className='flex .items-center'>
            <Controller control={control}
              name='price_min'
              render={({ field }) => {
                return (
                  <InputNumber
                    type='text'
                    className='grow'
                    classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    classNameError='hidden'
                    placeholder='đ Từ'
                    {...field}
                    onChange={(event) => {
                      field.onChange(event)
                      trigger('price_max')
                    }}
                  />

                )
              }} />
            <div className='mx-2 mt-2'>-</div>
            <Controller control={control}
              name='price_max'
              render={({ field }) => {
                return (
                  <InputNumber
                    type='text'
                    className='grow'
                    classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    classNameError='hidden'
                    placeholder='đ Đến'
                    {...field}
                    onChange={(event) => {
                      field.onChange(event)
                      trigger('price_min')
                    }}
                  />
                )
              }} />
          </div>
          <div className='mt-1 text-red-600 min-h-[1rem] text-sm text-center'>{errors.price_min?.message}</div>
          <div className='mt-5'>
            <Button className='bg-orange text-white text-sm uppercase hover:fill-white w-full py-2'>Áp Dụng</Button>
          </div>
        </form>
      </div>
      <div className='my-4 h-[1px] bg-gray-300'></div>
      <div className='py-2 pl-2'>Đánh giá</div>
      <RatingStars queryConfig={queryConfig} />
      {/* <ul className='my-3'>
        <li className='py-1 pl-2'>
          <div className='flex cursor-pointer items-center text-sm'>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </li>
        <li className='py-1 pl-2'>
          <div className='flex cursor-pointer items-center text-sm'>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <span>Trở lên</span>
          </div>
        </li>
        <li className='py-1 pl-2'>
          <div className='flex cursor-pointer items-center text-sm'>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <span>Trở lên</span>
          </div>
        </li>
        <li className='py-1 pl-2'>
          <div className='flex cursor-pointer items-center text-sm'>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <span>Trở lên</span>
          </div>
        </li>
        <li className='py-1 pl-2'>
          <div className='flex cursor-pointer items-center text-sm'>
            <svg viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <svg viewBox='0 0 30 30' className='mr-1 h-4 w-4'>
              <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                  <stop offset='0%' stopColor='#FFD211' />
                  <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
              </defs>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
              />
            </svg>
            <span>Trở lên</span>
          </div>
        </li>
      </ul> */}
      <div className='my-4 h-[1px] bg-gray-300'></div>
      <div className='mt-5'>
        <button className='bg-orange text-white text-sm uppercase hover:fill-white w-full py-2'>Xóa Tất Cả</button>
      </div>
    </div>
  )
}
