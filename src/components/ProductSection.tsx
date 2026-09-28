"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import { ArrowRight } from "lucide-react";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  icon?: string;
  products: Product[];
  categoryLink?: string;
  showDiscount?: boolean;
}

export default function ProductSection({
  title,
  subtitle,
  icon,
  products,
  categoryLink,
  showDiscount,
}: ProductSectionProps) {
  if (products.length === 0) return null;

  return (
    <section>
      {/* Header */}
      <div className="flex items-end justify-between mb-5">
        <div>
          {subtitle && (
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              {subtitle}
            </span>
          )}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2 mt-0.5">
            {icon && <span className="text-2xl">{icon}</span>}
            {title}
          </h2>
        </div>
        {categoryLink && (
          <Link
            href={categoryLink}
            className="hidden sm:flex items-center gap-1 text-sm text-primary font-semibold hover:underline shrink-0"
          >
            সব দেখুন <ArrowRight size={16} />
          </Link>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showDiscount={showDiscount}
          />
        ))}
      </div>

      {/* Mobile "See All" */}
      {categoryLink && (
        <Link
          href={categoryLink}
          className="sm:hidden flex items-center justify-center gap-2 mt-4 py-3 bg-gray-50 rounded-xl text-primary font-semibold text-sm border border-gray-100 hover:bg-gray-100 transition"
        >
          সব দেখুন <ArrowRight size={16} />
        </Link>
      )}
    </section>
  );
}
