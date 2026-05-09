import EmptyState from "../common/EmptyState";
import ProductCard from "./ProductCard";


export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return <EmptyState />;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
