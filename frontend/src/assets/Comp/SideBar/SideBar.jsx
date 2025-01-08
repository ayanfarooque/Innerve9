import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FireExtinguisher, PackageOpen,BriefcaseMedical,BookHeart, Bed, Menu, Syringe } from 'lucide-react';



const SideBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Beds", path: "/beds", icon: <Bed className="w-4 h-4" /> },
    { name: "Oxygen Cylinders", path: "/oxygen-cylinder", icon: <FireExtinguisher className="w-4 h-4" /> },
    { name: "Resources", path: "/resources", icon: <PackageOpen className="w-4 h-4" /> },
    { name: "Doctors", path: "/doctors", icon: <BriefcaseMedical className="w-4 h-4" /> },
    { name: "Organs", path: "/organs", icon: <BookHeart className="w-4 h-4" />},
    { name: "Blood", path: "/bloodtable", icon: <Syringe className="w-4 h-4" />},
  ];

  const NavigationContent = () => (
    <nav>
      {navigationItems.map((item, index) => (
        <NavLink 
          to={item.path}
          key={index} 
          className={({ isActive }) => 
            `flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 transition-colors ${
              isActive ? 'bg-blue-100 font-semibold' : ''
            }`
          }
          onClick={() => setIsOpen(false)}
        >
          {({ isActive }) => (
            <Button
              variant="ghost"
              className={`w-full justify-start rounded-none text-left text-sm font-normal ${
                isActive ? 'text-blue-700' : 'text-gray-700'
              }`}
            >
              {item.icon}
              <span className="truncate ml-2">{item.name}</span>
            </Button>
          )}
        </NavLink>
      ))}
    </nav>);
  
  return (
    <div className='max-h-[502px] bg-[#f3efff]'>
    {/* Mobile Navigation */}
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-50">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[350px] p-0">
        <Card className="h-full rounded-none border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-4">
            <h2 className="text-xl font-bold text-white text-center">Search Navigation</h2>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-60px)]">
              <NavigationContent />
            </ScrollArea>
          </CardContent>
        </Card>
      </SheetContent>
    </Sheet>

    {/* Desktop Navigation */}
    <Card background="custom" className="hidden md:block w-96 rounded-none overflow-hidden shadow-lg h-[500px]">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-800 py-[10px] px-4">
        <h2 className="text-xl font-bold text-white text-center">Search Navigation</h2>
      </CardHeader>
      <CardContent className="p-0 items-left bg-[#f3efff]">
        <ScrollArea>
          <NavigationContent />
        </ScrollArea>
      </CardContent>
    </Card>
  </div>
  )
}

export default SideBar
