import Link from 'next/link'
import { ChevronLeftIcon, ChevronDoubleLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { Paginator as OldPaginator } from '@/core/diary/pagination'

import { CollectionItem, Collection, Paginator } from '@/core/model/base'

const Pagination = <T extends CollectionItem, C extends Collection<T, C>>(props: { paginator: Paginator<T, C> | OldPaginator, page: number }) => {
  const { paginator, page } = props
  const n = paginator instanceof Paginator ? paginator.length : paginator.n
  const perPage = paginator.perPage
  const numPages = paginator.numPages()
  const minIndex = paginator.minIndex(page)
  const maxIndex = paginator.maxIndex(page)

  return (
    <div>
      <p className="py-1">
        {minIndex + 1} - {maxIndex} / {n}件
      </p>
      <p className="py-1">
        {page > 1
          ? <span className="mr-2 border-[1px] border-gray-300 px-1 py-1 rounded-full">
              <Link href={`/diary/list/1`} className="text-blue-500"><ChevronDoubleLeftIcon className="w-4 h-4 inline-block pb-0.5" /></Link>
            </span>
          : <span className="mr-2 border-[1px] border-gray-200 px-1 py-1 rounded-full text-gray-300">
              <ChevronDoubleLeftIcon className="w-4 h-4 inline-block pb-0.5" />
            </span>}
        {page > 1
          ? <span className="mr-2 border-[1px] border-gray-300 px-1 py-1 rounded-full">
              <Link href={`/diary/list/${page - 1}`} className="text-blue-500"><ChevronLeftIcon className="w-4 h-4 inline-block pb-0.5" /></Link>
            </span>
          : <span className="mr-2 border-[1px] border-gray-200 px-1 py-1 rounded-full text-gray-300">
              <ChevronLeftIcon className="w-4 h-4 inline-block pb-0.5" />
            </span>}
        {` ${page} / ${numPages} `}
        {page < numPages
          ? <span className="ml-2 border-[1px] border-gray-300 px-1 py-1 rounded-full">
              <Link href={`/diary/list/${page + 1}`} className="text-blue-500"><ChevronRightIcon className="w-4 h-4 inline-block pb-0.5" /></Link>
            </span>
          : <span className="ml-2 border-[1px] border-gray-200 px-1 py-1 rounded-full text-gray-300">
              <ChevronRightIcon className="w-4 h-4 inline-block pb-0.5" />
            </span>}
        {page < numPages
          ? <span className="ml-2 border-[1px] border-gray-300 px-1 py-1 rounded-full">
              <Link href={`/diary/list/${numPages}`} className="text-blue-500"><ChevronDoubleRightIcon className="w-4 h-4 inline-block pb-0.5" /></Link>
            </span>
          : <span className="ml-2 border-[1px] border-gray-200 px-1 py-1 rounded-full text-gray-300">
              <ChevronDoubleRightIcon className="w-4 h-4 inline-block pb-0.5" />
            </span>}
      </p>
    </div>
  )
}

export default Pagination
