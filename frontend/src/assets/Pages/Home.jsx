import React from 'react'
import Ribbon from '../Comp/Ribbon/Ribbon'
import Header from '../Comp/Header/Header'
import Footer from '../Comp/Footer/Footer'

const Home = () => {
    const cards = [
        {
          title: "Dashboard",
          description: "View hospital dashboard and Doctor profile",
          href: "dashboard",
          icon: <img src="src\assets\Logo\dashboard.png" alt="Dashboard Icon" className="h-14 w-14"/>,  
        },
        {
          title: "Availiablity Search",
          description: "Check Availiablity",
          href: "search",
          icon: <img src="src\assets\Logo\search.png" alt="Dashboard Icon" className="h-14 w-14"/>,  
        },
        {
          title: "Blood",
          description: "Check Availablity and Donate Blood",
          href: "blood",
          icon: <img src="src/assets/Logo/blood-test.png" alt="Blood Test Icon" className="h-14 w-14" />, 
        },
        {
            title: "Admin",
            description: "Update and Upload Dashboard",
            href: "/authpage",
            icon: <img src="src\assets\Logo\admin.png" alt="Admin Icon" className="h-14 w-14"/>,
        }

      ];
      
      const Card = ({ children, className }) => (
        <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
      );
      
      const CardContent = ({ children, className }) => (
        <div className={`flex flex-col items-center justify-center ${className}`}>{children}</div>
      );
  return (
    <div className="bg-[#f3efff]">
      <Ribbon/>
      <Header/>
      <h1 className=" flex justify-center text-5xl font-semibold text-[#4A148C] pt-10">Hospital Resource Portal</h1>
      <div className="container mx-auto px-72 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card) => (
          <a key={card.title} href={card.href} className="w-full">
            <Card className="hover:shadow-xl transition-shadow duration-200 cursor-pointer h-full">
              <CardContent className="p-6 text-center space-y-4">
                <div className="p-3 rounded-full bg-gray-50">
                  {card.icon}
                </div>
                <h2 className="text-2xl font-semibold">{card.title}</h2>
                <p className="text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
