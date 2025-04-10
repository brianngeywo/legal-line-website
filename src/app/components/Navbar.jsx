// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo - You can replace this with your actual logo */}
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl font-bold text-blue-800">
//               LegalLine
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</Link>
//             <Link href="/our-firm" className="text-gray-800 hover:text-blue-600 font-medium">Our Firm</Link>
//             <Link href="/practice-areas" className="text-gray-800 hover:text-blue-600 font-medium">Practice Areas</Link>
//             <Link href="/attorneys" className="text-gray-800 hover:text-blue-600 font-medium">Attorneys</Link>
//             <Link href="/blog" className="text-gray-800 hover:text-blue-600 font-medium">Blog</Link>
//             <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</Link>
            
//             {/* Contact Info and CTA */}
//             <div className="flex items-center space-x-6 ml-8">
//               <div className="hidden lg:flex items-center space-x-2">
//                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span className="text-sm font-medium">9AM - 10PM</span>
//               </div>
              
//               <div className="hidden lg:flex items-center space-x-2">
//                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span className="text-sm font-medium">+211 921 648 642</span>
//               </div>
              
//               <Link 
//                 href="/consultation" 
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors"
//               >
//                 Get Consultation
//               </Link>
//             </div>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden focus:outline-none" 
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 px-4">
//             <nav className="flex flex-col space-y-4">
//               <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Home</Link>
//               <Link href="/our-firm" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Our Firm</Link>
//               <Link href="/practice-areas" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Practice Areas</Link>
//               <Link href="/attorneys" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Attorneys</Link>
//               <Link href="/blog" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Blog</Link>
//               <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-medium" onClick={toggleMenu}>Contact</Link>
              
//               <div className="pt-4 border-t border-gray-200">
//                 <div className="flex items-center space-x-2 mb-3">
//                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <span className="text-sm font-medium">9AM - 10PM</span>
//                 </div>
                
//                 <div className="flex items-center space-x-2 mb-4">
//                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   <span className="text-sm font-medium">+211 921 648 642</span>
//                 </div>
                
//                 <Link 
//                   href="/consultation" 
//                   className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-sm text-center transition-colors"
//                   onClick={toggleMenu}
//                 >
//                   Get Consultation
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }