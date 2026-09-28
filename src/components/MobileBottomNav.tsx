"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  
  const navItems = [
    { name: "হোম", href: "/", icon: Home },
    { name: "ক্যাটাগরি", href: "/category", icon: Grid },
    { name: "কার্ট", href: "/cart", icon: ShoppingBag, badge: cartCount },
    { name: "অ্যাকাউন্ট", href: "/profile", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-6 py-2 pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center h-14">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          // Exact match for home
          const isReallyActive = item.href === "/" ? pathname === "/" : isActive;
          const Icon = item.icon;
          
          return (
            <Link key={item.href} href={item.href} className={`flex flex-col items-center justify-center w-full gap-1 transition-colors ${isReallyActive ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}>
              <div className="relative">
                <Icon size={24} strokeWidth={isReallyActive ? 2.5 : 2} />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] ${isReallyActive ? 'font-semibold' : 'font-medium'}`}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
