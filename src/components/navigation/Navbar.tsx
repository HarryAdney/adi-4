import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu, Phone } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  menuItems?: NavItem[];
  contactNumber?: string;
}

const Navbar = ({
  logo = "/vite.svg",
  menuItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Instructors", href: "#instructors" },
    { label: "Vehicles", href: "#vehicles" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  contactNumber = "(555) 123-4567",
}: NavbarProps) => {
  return (
    <nav className="w-full h-20 bg-white border-b fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Driving School Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Number - Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          <Phone className="h-5 w-5 text-red-600" />
          <span className="text-gray-700">{contactNumber}</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-600 hover:text-red-600 transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700">{contactNumber}</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
