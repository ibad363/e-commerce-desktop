"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { client } from "@/sanity/lib/client"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useRouter } from "next/navigation"

interface Product {
  _id: string
  name: string
  price: number
  imageUrl: string
  category?: string
}

export function SearchCommand() {
  const [open, setOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("") // Search term state
  const router = useRouter()

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchTerm) {
        setSearchResults([]) // Clear results if no search term
        return
      }
      setLoading(true)
      try {
        const query = `*[_type == "product" && name match "*${searchTerm}*"] {
          _id,
          name,
          price,
          "imageUrl": image.asset->url,
          category
        }`
        const results = await client.fetch(query)
        setSearchResults(results)
      } catch (error) {
        console.error("Search error:", error)
        setSearchResults([])
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [searchTerm]) // Fetch results whenever searchTerm changes

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-white hover:bg-[#f0d786] p-[6px] rounded"
      >
        <Search size={28} className="text-black" />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b border-gray-200 px-3 bg-white">
          <CommandInput
            placeholder="Search products..."
            value={searchTerm}
            onValueChange={setSearchTerm} // Update searchTerm on input change
            className="flex h-11 w-full rounded-md bg-white py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 border-0"
          />
        </div>
        <CommandList className="bg-white">
          {loading ? (
            <div className="py-6 text-center text-sm text-black bg-white">
              Loading...
            </div>
          ) : (
            <>
              <CommandEmpty className="text-gray-500 bg-white">
                No products found.
              </CommandEmpty>
              <CommandGroup heading="Featured Products" className="text-black bg-white">
                {searchResults.map((product) => (
                  <CommandItem
                    key={product._id}
                    onSelect={() => {
                      router.push(`/shop/${product._id}`)
                      setOpen(false)
                    }}
                    className="flex items-center gap-2 p-2 cursor-pointer bg-white hover:bg-[#fbebb5]"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-12 h-12 rounded bg-[#fbebb5] flex items-center justify-center">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-black">
                          {product.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
