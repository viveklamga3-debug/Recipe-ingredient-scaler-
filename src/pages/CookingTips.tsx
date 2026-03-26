import { SEO } from '../components/SEO';

export function CookingTips() {
  return (
    <>
      <SEO 
        title="Cooking Tips & Conversions | Recipe Scaler" 
        description="Helpful cooking tips, measurement conversions, and advice for scaling recipes successfully."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Cooking Tips & Conversions
          </h1>
          <p className="mt-4 text-xl text-stone-600">
            Master the math of the kitchen with these handy guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Common Conversions</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-stone-100">
                  <th className="pb-3 font-semibold text-stone-600">Volume</th>
                  <th className="pb-3 font-semibold text-stone-600">Equivalent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="py-3 text-stone-800">1 Tablespoon (tbsp)</td><td className="py-3 text-stone-600">3 Teaspoons (tsp)</td></tr>
                <tr><td className="py-3 text-stone-800">1/4 Cup</td><td className="py-3 text-stone-600">4 Tablespoons</td></tr>
                <tr><td className="py-3 text-stone-800">1/3 Cup</td><td className="py-3 text-stone-600">5 tbsp + 1 tsp</td></tr>
                <tr><td className="py-3 text-stone-800">1/2 Cup</td><td className="py-3 text-stone-600">8 Tablespoons</td></tr>
                <tr><td className="py-3 text-stone-800">1 Cup</td><td className="py-3 text-stone-600">16 Tablespoons</td></tr>
                <tr><td className="py-3 text-stone-800">1 Pint</td><td className="py-3 text-stone-600">2 Cups</td></tr>
                <tr><td className="py-3 text-stone-800">1 Quart</td><td className="py-3 text-stone-600">2 Pints (4 Cups)</td></tr>
                <tr><td className="py-3 text-stone-800">1 Gallon</td><td className="py-3 text-stone-600">4 Quarts (16 Cups)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Metric vs Imperial</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-stone-100">
                  <th className="pb-3 font-semibold text-stone-600">Imperial</th>
                  <th className="pb-3 font-semibold text-stone-600">Metric (Approx)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="py-3 text-stone-800">1 Teaspoon</td><td className="py-3 text-stone-600">5 ml</td></tr>
                <tr><td className="py-3 text-stone-800">1 Tablespoon</td><td className="py-3 text-stone-600">15 ml</td></tr>
                <tr><td className="py-3 text-stone-800">1 Fluid Ounce</td><td className="py-3 text-stone-600">30 ml</td></tr>
                <tr><td className="py-3 text-stone-800">1 Cup</td><td className="py-3 text-stone-600">240 ml</td></tr>
                <tr><td className="py-3 text-stone-800">1 Ounce (weight)</td><td className="py-3 text-stone-600">28 grams</td></tr>
                <tr><td className="py-3 text-stone-800">1 Pound</td><td className="py-3 text-stone-600">454 grams</td></tr>
                <tr><td className="py-3 text-stone-800">2.2 Pounds</td><td className="py-3 text-stone-600">1 Kilogram</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-stone max-w-none bg-stone-50 p-8 rounded-2xl border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Things that don't scale linearly</h2>
          <p>While our tool perfectly scales the math, cooking is an art. Keep these tips in mind when drastically changing a recipe's size:</p>
          
          <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">Spices and Seasonings</h3>
          <p className="text-stone-600">If you are tripling a recipe, you might not want to triple the salt or spicy elements (like cayenne pepper). Scale them by 1.5x or 2x first, then taste and adjust.</p>
          
          <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">Cooking Times and Temperatures</h3>
          <p className="text-stone-600">A double batch of cookies baked on two sheets might take slightly longer than a single batch. A larger pot of soup will take longer to come to a boil. Use visual cues rather than strict timers.</p>
          
          <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">Pan Sizes</h3>
          <p className="text-stone-600">If you double a cake recipe, you can't just put it in the same pan. You'll need two pans, or a pan with double the volume (and surface area) to ensure it bakes correctly.</p>
          
          <h3 className="text-lg font-bold text-stone-800 mt-6 mb-2">Yeast in Baking</h3>
          <p className="text-stone-600">When scaling bread recipes up significantly, yeast doesn't always scale perfectly linearly. You might need slightly less yeast proportionally for very large batches to prevent over-proofing.</p>
        </div>
      </div>
    </>
  );
}
