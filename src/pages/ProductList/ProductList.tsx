import useQueryParams from "src/hook/useQueryParams";
import AsideFilter from "./AsideFilter";
import Product from "./Product";
import SortProductList from "./SortProductList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import productApi from "src/apis/product.api";
import Pagination from "src/components/Pagination";
import { ProductListConfig } from "src/types/product.type";
import { isUndefined, omitBy } from "lodash";

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

export default function ProductList() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit,
      sort_by: queryParams.exclude,
      exclude: queryParams.sort_by,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter
    },
    isUndefined
  )
  // const [page, setPage] = useState(1)
  const { data } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    placeholderData: keepPreviousData
  })

  return (
    <div className="py-6 bg-gray-200">
      <div className="container">
        {data && (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <AsideFilter />
            </div>
            <div className="col-span-9">
              <SortProductList />
              <div className="mt-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-[2%] gap-3">
                {data &&
                  data.data.data.products.map((product) => (
                    <div className="col-span-1" key={product._id}>
                      <Product product={product} />
                    </div>
                  ))}
              </div>
              <Pagination queryConfig={queryConfig} pageSize={20} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
