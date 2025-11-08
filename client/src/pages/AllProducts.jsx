// import React, { useState, useEffect } from 'react'
// import { useAppContext } from '../context/AppContext'
// import ProductCard from "../components/ProductCard"

// const AllProducts = () => {
//     const {products, searchQuery} = useAppContext();
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     useEffect(() => {
//       if (searchQuery.length > 0) {
//         setFilteredProducts(products.filter(
//           product => product.name.toLowerCase().includes(searchQuery.
//           toLowerCase())
//       ))} else {
//         setFilteredProducts(products)
//       }
//     }, [products, searchQuery])
//   return (
//     <div className='mt-16 flex flex-col'>
//       <div className='flex flex-col items-end w-max'>
//         <p className='text-2xl font-medium uppercase'>All Products</p>
//         <div className='w-16 h-0.5 bg-primary rounded-full'></div>
//       </div>

//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
//         {filteredProducts.filter((product) => product.inStock).map((product, index) => (
//           <ProductCard key={index} product={product}  />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AllProducts


// import React, { useState, useEffect } from 'react'
// import { useAppContext } from '../context/AppContext'
// import ProductCard from "../components/ProductCard"

// const AllProducts = () => {
//     const {products, searchQuery} = useAppContext();
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 15; // 5 cols x 3 rows

//     useEffect(() => {
//       if (searchQuery.length > 0) {
//         setFilteredProducts(products.filter(
//           product => product.name.toLowerCase().includes(searchQuery.
//           toLowerCase())
//       ))} else {
//         setFilteredProducts(products)
//       }
//       setCurrentPage(1); // Reset to first page when search changes
//     }, [products, searchQuery])

//     // Get current products
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const inStockProducts = filteredProducts.filter((product) => product.inStock);
//     const currentProducts = inStockProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     // Calculate total pages
//     const totalPages = Math.ceil(inStockProducts.length / productsPerPage);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='mt-16 flex flex-col'>
//       <div className='flex flex-col items-end w-max'>
//         <p className='text-2xl font-medium uppercase'>All Products</p>
//         <div className='w-16 h-0.5 bg-primary rounded-full'></div>
//       </div>

//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
//         {currentProducts.map((product, index) => (
//           <ProductCard key={index} product={product}  />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className='flex justify-center items-center gap-2 mt-24'>
//           <button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             className='px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100'
//           >
//             Previous
//           </button>

//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={`px-4 py-2 border rounded ${
//                 currentPage === index + 1
//                   ? 'bg-primary text-white'
//                   : 'hover:bg-gray-100'
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}

//           <button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className='px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100'
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default AllProducts


import React, { useState, useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from "../components/ProductCard"

const AllProducts = () => {
    const {products, searchQuery} = useAppContext();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('default');
    const [filterCategory, setFilterCategory] = useState('all');
    const productsPerPage = 15; // 5 cols x 3 rows

    // Get unique categories from products
    const categories = ['all', ...new Set(products.map(product => product.category))];

    useEffect(() => {
      let result = products;

      // Filter by search query
      if (searchQuery.length > 0) {
        result = result.filter(
          product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }

      // Filter by category
      if (filterCategory !== 'all') {
        result = result.filter(product => product.category === filterCategory);
      }

      // Sort products
      switch(sortBy) {
        case 'price-low':
          result = [...result].sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          result = [...result].sort((a, b) => b.price - a.price);
          break;
        case 'name-az':
          result = [...result].sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-za':
          result = [...result].sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }

      setFilteredProducts(result);
      setCurrentPage(1); // Reset to first page when filters change
    }, [products, searchQuery, sortBy, filterCategory])

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const inStockProducts = filteredProducts.filter((product) => product.inStock);
    const currentProducts = inStockProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total pages
    const totalPages = Math.ceil(inStockProducts.length / productsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='mt-16 flex flex-col'>
      {/* Header with filters */}
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <div className='flex flex-col items-end w-max'>
          <p className='text-2xl font-medium uppercase'>All Products</p>
          <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>

        {/* Sorting and Filtering Controls */}
        <div className='flex flex-wrap gap-4'>
          <div className='flex flex-col'>
            <label className='text-sm font-medium mb-1'>Sort By</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className='px-4 py-2 border rounded flex'
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-az">Name: A to Z</option>
              <option value="name-za">Name: Z to A</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label className='text-sm font-medium mb-1'>Category</label>
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className='px-4 py-2 border rounded'
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className='flex items-end'>
            <button 
              onClick={() => {
                setSortBy('default');
                setFilterCategory('all');
              }}
              className='px-4 py-2 border rounded hover:bg-gray-100'
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {currentProducts.map((product, index) => (
          <ProductCard key={index} product={product}  />
        ))}
      </div>

      {/* Show message if no products found */}
      {currentProducts.length === 0 && (
        <div className='text-center py-12 text-gray-500'>
          No products found
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className='flex justify-center items-center gap-2 mt-8'>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100'
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100'
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default AllProducts