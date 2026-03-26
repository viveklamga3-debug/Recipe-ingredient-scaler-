import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Copy, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { parseIngredientLine, scaleIngredient } from '../utils/scaler';

export function ScalerTool() {
  const location = useLocation();
  const state = location.state as { ingredients?: string; servings?: number } | null;

  const [ingredientsText, setIngredientsText] = useState(
    state?.ingredients || "1 1/2 cups all-purpose flour\n1 tsp baking soda\n1/2 tsp salt\n1/2 cup butter, softened\n3/4 cup sugar\n1 large egg\n1 tsp vanilla extract\n1 cup chocolate chips"
  );
  const [originalServings, setOriginalServings] = useState<number | string>(state?.servings || 4);
  const [desiredServings, setDesiredServings] = useState<number | string>(6);
  const [scaledText, setScaledText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const orig = Number(originalServings);
    const des = Number(desiredServings);
    
    if (orig > 0 && des > 0 && ingredientsText.trim()) {
      const multiplier = des / orig;
      const lines = ingredientsText.split('\n');
      
      const scaledLines = lines.map(line => {
        if (!line.trim()) return '';
        const parsed = parseIngredientLine(line);
        return scaleIngredient(parsed, multiplier);
      });
      
      setScaledText(scaledLines.join('\n'));
    } else {
      setScaledText(ingredientsText);
    }
  }, [ingredientsText, originalServings, desiredServings]);

  const handleCopy = () => {
    navigator.clipboard.writeText(scaledText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <SEO 
        title="Recipe Scaler Tool" 
        description="Paste your recipe ingredients and instantly scale them to any serving size. Free, fast, and accurate."
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Recipe Scaler Tool
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            Paste your ingredients list below, set your servings, and get perfectly scaled measurements instantly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          {/* Controls */}
          <div className="bg-stone-50 border-b border-stone-200 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <label htmlFor="original" className="text-sm font-medium text-stone-700 mb-2">
                  Original Servings
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="original"
                    min="0.1"
                    step="any"
                    value={originalServings}
                    onChange={(e) => setOriginalServings(e.target.value)}
                    className="block w-32 rounded-md border-stone-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-lg text-center py-3 border"
                  />
                </div>
              </div>

              <div className="hidden sm:flex items-center justify-center pt-6 text-stone-400">
                <ArrowRight className="h-6 w-6" />
              </div>

              <div className="flex flex-col items-center">
                <label htmlFor="desired" className="text-sm font-medium text-stone-700 mb-2">
                  Desired Servings
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="desired"
                    min="0.1"
                    step="any"
                    value={desiredServings}
                    onChange={(e) => setDesiredServings(e.target.value)}
                    className="block w-32 rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-lg text-center py-3 border bg-orange-50 text-orange-900 font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-stone-900">Original Ingredients</h2>
                <button 
                  onClick={() => setIngredientsText('')}
                  className="text-sm text-stone-500 hover:text-orange-600 flex items-center gap-1"
                >
                  <RefreshCw className="h-4 w-4" /> Clear
                </button>
              </div>
              <textarea
                value={ingredientsText}
                onChange={(e) => setIngredientsText(e.target.value)}
                placeholder="Paste your ingredients here, one per line...&#10;e.g.,&#10;2 cups flour&#10;1/2 tsp salt"
                className="w-full h-96 p-4 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none font-mono text-sm leading-relaxed"
              />
            </div>

            <div className="p-6 bg-stone-50/50">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-stone-900">Scaled Ingredients</h2>
                <button
                  onClick={handleCopy}
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 bg-orange-100 px-3 py-1.5 rounded-md transition-colors"
                >
                  {isCopied ? (
                    <><CheckCircle2 className="h-4 w-4" /> Copied!</>
                  ) : (
                    <><Copy className="h-4 w-4" /> Copy List</>
                  )}
                </button>
              </div>
              <textarea
                readOnly
                value={scaledText}
                className="w-full h-96 p-4 border border-stone-200 rounded-lg bg-white resize-none font-mono text-sm leading-relaxed text-stone-800"
              />
            </div>
          </div>
        </div>
        
        {/* SEO Content below tool */}
        <div className="mt-16 prose prose-stone max-w-none">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">How to use the Recipe Scaler</h2>
          <p>
            Scaling a recipe shouldn't require a calculator. Whether you're halving a cookie recipe or tripling a soup for a crowd, our tool handles the math for you.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mt-4">
            <li><strong>Paste your ingredients:</strong> Copy the ingredient list from any recipe website or document and paste it into the "Original Ingredients" box.</li>
            <li><strong>Set original servings:</strong> Enter the number of servings the original recipe makes.</li>
            <li><strong>Set desired servings:</strong> Enter how many servings you actually want to make.</li>
            <li><strong>Copy and cook:</strong> The scaled ingredients will automatically appear on the right. Click "Copy List" to save them to your clipboard.</li>
          </ol>
        </div>
      </div>
    </>
  );
}
