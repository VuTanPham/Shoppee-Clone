import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <div className="py-6 bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <Link to='/' className="text-orange flex font-bold">
              <svg viewBox="0 0 12 10" className="mr-3 h-4 w-3 fill-orange">
                <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-373 -208)">
                    <g transform="translate(155 191)">
                      <g transform="translate(218 17)">
                        <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                        <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                        <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                      </g></g></g></g>
              </svg>
              Tất cả danh mục
            </Link>
            <div className="my-4 h-[1px] bg-gray-300"></div>
            <ul>
              <li className="py-2 pl-2">Đồng hồ</li>
              <li className="py-2 pl-2">Áo thun</li>
              <li className="py-2 pl-2">Điện thoại</li>
            </ul>
            <Link to='/' className="mt-4 font-bold uppercase flex">
              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="mr-3 h-4 w-3 fill-current stroke-current">
                <g>
                  <polyline fill="none" points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></g>
              </svg>
              Bộ lọc tìm kiếm
            </Link>
            <div className="my-4 h-[1px] bg-gray-300"></div>
            <div className="my-5">
              <div className="py-2 pl-2">Khoảng giá</div>
              <form>
                <div className="flex .items-center">
                  <div className="left">
                    <input className="w-full rounded-sm border border-gray-300 outline-none py-1" placeholder="₫ TỪ" type="text"></input>
                  </div>
                  <div className="mx-2 mt-2">-</div>
                  <div className="right">
                    <input className="w-full rounded-sm border border-gray-300 outline-none py-1" placeholder="₫ ĐẾN" type="text"></input>
                  </div>
                </div>
              </form>
              <div className="mt-5">
                <button className="bg-orange text-white text-sm uppercase hover:fill-white w-full py-2">Áp Dụng</button>
              </div>
            </div>
            <div className="my-4 h-[1px] bg-gray-300"></div>
            <div className="py-2 pl-2">Đánh giá</div>
            <ul className="my-3">
              <li className="py-1 pl-2">
                <div className="flex cursor-pointer items-center text-sm">
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                </div>
              </li>
              <li className="py-1 pl-2">
                <div className="flex cursor-pointer items-center text-sm">
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <span>Trở lên</span>
                </div>
              </li>
              <li className="py-1 pl-2">
                <div className="flex cursor-pointer items-center text-sm">
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <span>Trở lên</span>
                </div>
              </li>
              <li className="py-1 pl-2">
                <div className="flex cursor-pointer items-center text-sm">
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <span>Trở lên</span>
                </div>
              </li>
              <li className="py-1 pl-2">
                <div className="flex cursor-pointer items-center text-sm">
                  <svg viewBox="0 0 9.5 8" className="mr-1 h-4 w-4"><defs><linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset={0} stopColor="#ffca11" /><stop offset={1} stopColor="#ffad27" /></linearGradient><polygon id="ratingStar" points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903" /></defs><g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}><g transform="translate(-876 -1270)"><g transform="translate(155 992)"><g transform="translate(600 29)"><g transform="translate(10 239)"><g transform="translate(101 10)"><use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" /></g></g></g></g></g></g></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <svg viewBox="0 0 30 30" className="mr-1 h-4 w-4"><defs><linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%"><stop offset="0%" stopColor="#FFD211" /><stop offset="100%" stopColor="#FFAD27" /></linearGradient></defs><path fill="none" fillRule="evenodd" stroke="url(#star__hollow)" strokeWidth={2} d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z" /></svg>
                  <span>Trở lên</span>
                </div>
              </li>
            </ul>
            <div className="my-4 h-[1px] bg-gray-300"></div>
            <div className="mt-5">
              <button className="bg-orange text-white text-sm uppercase hover:fill-white w-full py-2">Xóa Tất Cả</button>
            </div>
          </div>
          <div className="col-span-9">
            <div className="px-3 py-4 bg-gray-300/40">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div>Sắp xếp theo</div>
                  <button className="bg-white h-8 px-4 shadow">Phổ biến</button>
                  <button className="bg-white h-8 px-4 shadow">Mới nhất</button>
                  <button className="bg-white h-8 px-4 shadow">Bán chạy</button>
                  <select className="h-8 px-4 bg-white text-left shadow">
                    <option>Giá</option>
                    <option>Giá Thấp Đến Cao</option>
                    <option>Giá Cao Đến Thấp</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <span>1</span>
                  <span>/</span>
                  <span>3</span>
                  <div className="ml-2 flex items-end">
                    <span className="flex h-8 w-9 cursor-not-allowed items-center justify-center rounded-bl-sm rounded-tl-sm bg-white/60 shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 w-3"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                    </span>
                    <span className="flex h-8 w-9 cursor-not-allowed items-center justify-center rounded-bl-sm rounded-tl-sm bg-white/60 shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 w-3"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-[2%] gap-3">
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-sm bg-white shadow transition-transform hover:translate-y-[-0.04rem] hover:shadow-md">
                  <div className="w-full">
                    <img src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"></img>
                  </div>
                  <div className="overflow-hidden p-2">
                    <div className="line-clamp-2 min-h-[2rem] text-xs">Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng</div>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="text-gray-500 line-through truncate">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.990.000</span>
                    </div>
                    <div className="text-orange truncate ml-1">
                      <span className="text-xs">₫</span>
                      <span className="text-sm">3.190.000</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: '100%' }}><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-yellow-300 text-yellow-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg></div><svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3 fill-current text-gray-300"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                      </div>
                    </div>
                    <div className="ml-2 text-sm">
                      <span>1,2k</span>
                      <span className="ml-1">Đã bán</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
