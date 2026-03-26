import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, ChefHat, Scale, Utensils } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO 
        title="Free Recipe Ingredient Scaler & Converter" 
        description="Easily scale recipe ingredients up or down. A free, professional tool for home cooks and chefs to adjust serving sizes instantly."
        keywords="recipe scaler, ingredient converter, scale recipes, serving size calculator, cooking math"
      />
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 px-4 sm:px-6 lg:px-8">
            <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-stone-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Scale any recipe</span>{' '}
                  <span className="block text-orange-600 xl:inline">instantly & accurately</span>
                </h1>
                <p className="mt-3 text-base text-stone-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Stop doing complex math in the kitchen. Our free, professional recipe scaler adjusts your ingredient quantities for any serving size in seconds.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/scaler"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Start Scaling
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/how-it-works"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      How it works
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-stone-100 flex items-center justify-center p-12">
           <div className="grid grid-cols-2 gap-4 w-full max-w-md">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center justify-center aspect-square transform -rotate-3 hover:rotate-0 transition-transform">
               <Scale className="h-12 w-12 text-orange-500 mb-3" />
               <span className="font-semibold text-stone-800">Perfect Ratios</span>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center justify-center aspect-square transform translate-y-8 rotate-3 hover:rotate-0 transition-transform">
               <Calculator className="h-12 w-12 text-orange-500 mb-3" />
               <span className="font-semibold text-stone-800">Auto Math</span>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center justify-center aspect-square transform -translate-y-4 -rotate-2 hover:rotate-0 transition-transform">
               <Utensils className="h-12 w-12 text-orange-500 mb-3" />
               <span className="font-semibold text-stone-800">Any Recipe</span>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center justify-center aspect-square transform translate-y-4 rotate-2 hover:rotate-0 transition-transform">
               <ChefHat className="h-12 w-12 text-orange-500 mb-3" />
               <span className="font-semibold text-stone-800">Pro Results</span>
             </div>
           </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              A better way to cook
            </p>
            <p className="mt-4 max-w-2xl text-xl text-stone-500 mx-auto">
              Everything you need to scale recipes flawlessly, completely free.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-4">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">Smart Parsing</h3>
                <p className="text-stone-500">
                  Just paste your ingredient list. Our tool automatically recognizes quantities, units, and ingredient names.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-4">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">Fraction Support</h3>
                <p className="text-stone-500">
                  Handles complex fractions like 1 1/2 cups or 3/4 tsp perfectly, returning clean, readable measurements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-4">
                  <Utensils className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">Ad-Free Experience</h3>
                <p className="text-stone-500">
                  A clean, professional interface without annoying popups or intrusive ads. Just scale and go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
