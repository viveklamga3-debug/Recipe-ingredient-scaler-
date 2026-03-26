import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function MastersRecipes() {
  const recipes = [
    {
      id: 1,
      name: "Classic French Vinaigrette",
      author: "Chef Masterson",
      description: "A perfectly balanced dressing for any green salad.",
      servings: 4,
      ingredients: "1/4 cup white wine vinegar\n1 tbsp Dijon mustard\n1/2 tsp kosher salt\n1/4 tsp black pepper\n3/4 cup extra-virgin olive oil\n1 small shallot, minced"
    },
    {
      id: 2,
      name: "Perfect Chocolate Chip Cookies",
      author: "Baker's Guild",
      description: "Crispy edges, chewy centers. The ultimate cookie.",
      servings: 24,
      ingredients: "2 1/4 cups all-purpose flour\n1 tsp baking soda\n1 tsp salt\n1 cup unsalted butter, softened\n3/4 cup granulated sugar\n3/4 cup packed brown sugar\n1 tsp vanilla extract\n2 large eggs\n2 cups semi-sweet chocolate chips"
    },
    {
      id: 3,
      name: "Sunday Roast Chicken",
      author: "Home Cooking Masters",
      description: "Juicy, flavorful, and foolproof.",
      servings: 6,
      ingredients: "1 whole chicken (4 lbs)\n2 tbsp olive oil\n1 tbsp kosher salt\n1 tsp black pepper\n1 lemon, halved\n1 head garlic, halved crosswise\n4 sprigs fresh rosemary\n4 sprigs fresh thyme"
    },
    {
      id: 4,
      name: "Simple Tomato Basil Sauce",
      author: "Nonna's Kitchen",
      description: "A versatile sauce for pasta, pizza, or dipping.",
      servings: 4,
      ingredients: "2 tbsp olive oil\n3 cloves garlic, minced\n1/4 tsp red pepper flakes\n1 can (28 oz) crushed tomatoes\n1 tsp kosher salt\n1/2 tsp sugar\n1/4 cup fresh basil leaves, torn"
    }
  ];

  return (
    <>
      <SEO 
        title="Masters Recipes | Recipe Scaler" 
        description="Try scaling these classic, master-level recipes. Perfect templates to test our ingredient scaler."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Masters Recipes
          </h1>
          <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
            Classic, reliable recipes ready to be scaled for your next gathering. Copy the ingredients and try them in the scaler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-stone-100 bg-stone-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-stone-900">{recipe.name}</h2>
                    <p className="text-sm text-stone-500 mt-1">by {recipe.author}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Makes {recipe.servings} servings
                  </span>
                </div>
                <p className="mt-3 text-stone-600">{recipe.description}</p>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">Ingredients</h3>
                <pre className="font-mono text-sm text-stone-700 whitespace-pre-wrap bg-stone-50 p-4 rounded-lg border border-stone-100">
                  {recipe.ingredients}
                </pre>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Link 
                  to="/scaler" 
                  state={{ ingredients: recipe.ingredients, servings: recipe.servings }}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 transition-colors"
                >
                  Scale this recipe <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
