import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, Syringe } from 'lucide-react';



const SideBar2 = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "A+", path: "/apositive", icon: <Syringe className="w-4 h-4" /> },
    { name: "A-", path: "/anegative", icon: <Syringe className="w-4 h-4" /> },
    { name: "B+", path: "/bpositive", icon: <Syringe className="w-4 h-4" /> },
    { name: "B-", path: "/bnegative", icon: <Syringe className="w-4 h-4" /> },
    { name: "AB+", path: "/abpositive", icon: <Syringe className="w-4 h-4" />},
    { name: "AB-", path: "/abnegative", icon: <Syringe className="w-4 h-4" />},
    { name: "O+", path: "/opositive", icon: <Syringe className="w-4 h-4" />},
    { name: "O-", path: "/onegative", icon: <Syringe className="w-4 h-4" />}
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
    <div className='max-h-[502px]'>
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
    <Card className="hidden md:block w-96 rounded-none overflow-hidden shadow-lg h-[500px]">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-800 py-[10px] px-4">
        <h2 className="text-xl font-bold text-white text-center">Search Navigation</h2>
      </CardHeader>
      <CardContent className="p-0 items-left">
        <ScrollArea>
          <NavigationContent />
        </ScrollArea>
      </CardContent>
    </Card>
  </div>
  )
}

export default SideBar2
