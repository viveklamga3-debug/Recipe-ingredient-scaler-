import { SEO } from '../components/SEO';
import { CheckCircle2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      title: "Copy your recipe",
      description: "Find a recipe you love online, in a document, or from an email. Highlight the ingredients list and copy it to your clipboard."
    },
    {
      title: "Paste into the Scaler",
      description: "Navigate to our Scaler Tool and paste the ingredients into the left-hand text box. Make sure each ingredient is on a new line."
    },
    {
      title: "Enter the serving sizes",
      description: "Look at the original recipe to see how many servings it makes. Enter that number in the 'Original Servings' field. Then, enter how many servings you want to make in the 'Desired Servings' field."
    },
    {
      title: "Get instant results",
      description: "The tool instantly calculates the new measurements, handling complex fractions and decimals automatically. Your scaled recipe appears on the right."
    },
    {
      title: "Copy and cook",
      description: "Click the 'Copy List' button to copy your newly scaled ingredients. You can paste them into your notes app, an email, or print them out."
    }
  ];

  return (
    <>
      <SEO 
        title="How It Works | Recipe Scaler" 
        description="Learn how to use our free recipe ingredient scaler to perfectly adjust your recipes for any serving size."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            How It Works
          </h1>
          <p className="mt-4 text-xl text-stone-600">
            Scaling recipes is as easy as copy, paste, and cook.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-xl">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 rounded-2xl p-8 border border-orange-100">
          <h3 className="text-lg font-bold text-orange-900 mb-4">Pro Tips for Best Results</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span className="text-orange-800">Keep ingredients on separate lines for accurate parsing.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span className="text-orange-800">Use standard fraction formats like "1/2" or "1 1/2".</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span className="text-orange-800">For baking, remember that scaling by volume can sometimes be tricky. If a recipe provides weights (grams/ounces), scaling those will yield the most precise results.</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
