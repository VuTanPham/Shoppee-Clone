export default function SortProductList() {
    return (
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
    )
}
