import { Link, Outlet, useLocation } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Scaler Tool', path: '/scaler' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Cooking Tips', path: '/tips' },
    { name: 'Masters Recipes', path: '/recipes' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
                <ChefHat className="h-8 w-8" />
                <span className="font-bold text-xl tracking-tight">Recipe Scaler</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                    location.pathname === link.path ? 'text-orange-600' : 'text-stone-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/scaler"
                className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors shadow-sm"
              >
                Scale Now
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-500 hover:text-stone-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 text-white mb-4">
                <ChefHat className="h-6 w-6 text-orange-500" />
                <span className="font-bold text-lg tracking-tight">Recipe Scaler</span>
              </Link>
              <p className="text-sm text-stone-400 max-w-md">
                The professional, free tool to scale your recipe ingredients up or down. 
                Perfect for home cooks, bakers, and professional chefs adjusting serving sizes.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/scaler" className="hover:text-orange-400 transition-colors">Scaler Tool</Link></li>
                <li><Link to="/how-it-works" className="hover:text-orange-400 transition-colors">How It Works</Link></li>
                <li><Link to="/tips" className="hover:text-orange-400 transition-colors">Cooking Tips</Link></li>
                <li><Link to="/recipes" className="hover:text-orange-400 transition-colors">Masters Recipes</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone-800 text-sm text-center text-stone-500">
            &copy; {new Date().getFullYear()} Recipe Ingredient Scaler. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
