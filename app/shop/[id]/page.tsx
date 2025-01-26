import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ProductCard from '@/app/components/ProductCard';
import ProductImages from '@/app/components/ImageSelector';
import Link from 'next/link';
import AddToCart from '@/app/components/AddToCart';
import { getFeaturedProduct, getProductById } from '@/sanity/queries/fetchProduct';
import SizeSelector from '@/app/components/SizeSelector';
import { CardData } from '@/app/utils/types';

const ProductDetail = async ({params}: {params: {id: string}}) => {
    const {id} = params
    const productInfo = await getProductById(id)
    const FeaturedProducts:CardData[] = await getFeaturedProduct()
      
    const images = [
        productInfo?.imageUrl,
        productInfo?.imageUrl,
        productInfo?.imageUrl,
        productInfo?.imageUrl,
    ];

    const renderRating = () => {
        return (
            <div className='text-[#FFAD33] text-2xl mr-4'>
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`${index < (productInfo?.rating || 0) ? "text-[#FFAD33]" : "text-black opacity-25"}`}>
                        ★
                    </span>
                ))}
            </div>
        )
    }

    return (
    <div className="max-w-[1440px] mx-auto font-Poppins">
        {/* Top Section */}
        <div className="max-w-[1240px] mx-auto py-[38px] sm:flex items-center px-2 xl:px-0 hidden">
            <Link href={"/"}><p className="text-[#9F9F9F] hover:underline">Home</p></Link>
            <ChevronRight className='mx-2 sm:ml-[14px] sm:mr-[24px]' />
            <Link href={"/shop"}><p className="text-[#9F9F9F] hover:underline">Shop</p></Link>
            <ChevronRight className='mx-2 sm:ml-[21px] sm:mr-[25px]' />
            <div className='w-[1px] h-[1px] bg-[#9F9F9F]'></div>
            <p className='border-l border-[#9F9F9F] pl-5 sm:pl-[34px]'>{productInfo?.name}</p>
        </div>

        {/* Images & Name Section */}
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row gap-[31px] items-start p-2 xl:p-0 mt-8 sm:mt-0'>

            {/* Image Section */}
            <div className='w-full md:w-[55%] xl:w-1/2 flex flex-col-reverse lg:flex-row gap-[31px]'>
                <ProductImages images={images}/>
            </div>

            {/* Product Details */}
            <div className='flex flex-col w-full md:w-[45%] xl:w-1/2 items-center md:items-start'>
                <div className='flex flex-col'>

                    {/* Product Name */}
                    <h3 className={`text-[32px] sm:text-[42px] tracking-wide text-center md:text-start`}>{productInfo?.name}</h3>

                    {/* Price */}
                    <p className={`text-2xl font-medium text-center md:text-start`}>${productInfo?.price}</p>

                    {/* Rating & Reviews */}
                    <div className='flex justify-center md:justify-start items-center mt-[15px]'>
                        {renderRating()}
                        <p className='opacity-50 text-[14px] text-[#9F9F9F] font-normal mr-4 border-l-[#9F9F9F] border-l pl-4'>
                            {productInfo?.rating || 0} Customer Rating
                        </p>
                    </div>
                </div>

                {/* Product Description */}
                <p className='text-[13px] mt-[18px] text-center md:text-start'>{productInfo?.description}</p>

                {/* Tags */}
                <div className='flex flex-col gap-3 mt-[18px] items-center md:items-start'>
                    <p className='text-[14px] text-[#9F9F9F] tracking-wide'>Tags</p>
                    <div className='flex items-center gap-4'>
                        <p className='text-black text-[13px] capitalize flex flex-wrap gap-2'>
                            {productInfo?.tags.map((tag:any, i:number)=>(
                                <span key={i}>#{tag}</span>
                            ))}
                        </p>
                    </div>
                </div>

                {/* Size */}
                {productInfo?.sizes && productInfo.sizes.length > 0 && (
                <div className='flex flex-col items-center md:items-start gap-[12px] mt-[22px]'>
                    <p className='text-[14px] text-[#9F9F9F] tracking-wide'>Size</p>
                    <div className='flex items-center gap-4 flex-wrap'>
                        {productInfo.sizes.map((size: string, index: number) => (
                            <SizeSelector key={index} size={size} />
                        ))}
                    </div>
                </div>
            )}

                {/* Colors */}
                {/* <div className='flex flex-col gap-3 mt-[18px] items-center md:items-start'>
                    <p className='text-[14px] text-[#9F9F9F] tracking-wide'>Color</p>
                    <div className='flex items-center gap-4'>
                        <div className='bg-[#816DFA] w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black'></div>
                        <div className='bg-black w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black'></div>
                        <div className='bg-[#CDBA7B] w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black'></div>
                    </div>
                </div> */}

                {/* add to cart */}
                <AddToCart product={productInfo} />

                {/* Line */}
                <div className='h-[1px] w-full bg-[#D9D9D9] mt-[60px]'></div>

                {/* SKU */}
                <div className='mt-[41px] text-[#9F9F9F] space-y-3'>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>SKU</p>
                        <span className='mr-[12px]'>:</span>
                        <p>SS001</p>
                    </div>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>Category</p>
                        <span className='mr-[12px]'>:</span>
                        <p>{productInfo?.category}</p>
                    </div>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>Tags</p>
                        <span className='mr-[12px]'>:</span>
                        <p className='flex gap-2'>
                            {productInfo?.tags.map((tag: any, i:number) => (
                                <span key={i}>{tag}</span>
                            ))}
                        </p>
                    </div>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>Share</p>
                        <span className='mr-[12px]'>:</span>
                        <p className='flex gap-[25px]'>
                            <img src="/assets/product-detail/fb.svg" alt="fb" />
                            <img src="/assets/product-detail/link.svg" alt="linkedin" />
                            <img src="/assets/product-detail/twitter.svg" alt="twitter" />
                        </p>
                    </div>
                
                </div>
                
            </div>
        </div>

        {/* Description */}
        <div className='mt-[54px] border-t border-[#D9D9D9] pt-12'>
            <div className='flex flex-wrap gap-3 md:gap-[53px] justify-center'>
                <p className='text-black text-2xl'>Description</p>
                <p className='text-[#9F9F9F] text-2xl'>Additional Information</p>
                <p className='text-[#9F9F9F] text-2xl'>Reviews [5]</p>
            </div>

            <div className='max-w-[1026px] mx-auto text-[#9F9F9F] space-y-[30px] py-[37px] p-4 sm:p-0 border-b border-[#D9D9D9]'>
                <p className='mt-[37px]'>{productInfo?.description}</p>
                <p className='pb-[36px]'>{productInfo?.description}</p>
            </div>

            <div className='max-w-[1240px] mx-auto px-2 mt-[36px] flex flex-col lg:flex-row items-center gap-[29px]'>
                <div className='bg-[#f3e4b5] rounded-[10px] max-w-[605px] w-full h-[250px] sm:h-[348px]'>
                    {productInfo && 
                        <Image src={productInfo.imageUrl} alt={productInfo.name} width={400} height={400} className='object-center w-full h-full rounded-[10px]'></Image>
                    }
                </div>
                <div className='bg-[#f3e4b5] rounded-[10px] max-w-[605px] w-full h-[250px] sm:h-[348px]'>
                {productInfo && 
                        <Image src={productInfo.imageUrl} alt={productInfo.name} width={400} height={400} className='object-center w-full h-full rounded-[10px]'></Image>
                    }
                </div>
            </div>

            {/* Line */}
            <div className='w-full h-[1px] bg-[#D9D9D9] my-[60px]'></div>
        </div>



        {/* Related Products */}
        <div>
            <p className='text-4xl font-medium mt-[26px] text-center'>Related Products</p>
            <div className='flex flex-wrap justify-center gap-[30px]'>
            {FeaturedProducts.length > 0 ? (FeaturedProducts.map((product: any) => (
                <ProductCard
                    key={product._id}
                    name={product.name}
                    price={product.price}
                    imagePath={product.imageUrl}
                    link={product._id}
                    stockCount={product.stockLevel}
                />))) : <h1 className="text-center text-3xl">{`No Product Found`}</h1>
            }
            </div>

            {/* View More Button*/}
            <div className="flex justify-center mt-[93px] mb-[103px]">
                <Link href={"/shop"}><button className="w-[84px] hover:border-b border-black">View More</button></Link>
            </div>
        </div>
    </div>
)}

export default ProductDetail