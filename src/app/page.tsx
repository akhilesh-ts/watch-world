import Hero from "@/component/Hero";
import ProductList from "@/component/ProductList";

export default function Home() {
  return (
   <>
   <div className="bg-[#F8F9FA]">
   <Hero/>
   <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-6">All Product</h2>
   <ProductList/>
   </div>

   </>
  );
}
