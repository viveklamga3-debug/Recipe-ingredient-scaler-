export interface Ingredient {
  original: string;
  quantity: number | null;
  unit: string;
  name: string;
  prefix: string;
}

// Helper to convert fraction string to number
export function parseQuantity(qtyStr: string): number | null {
  if (!qtyStr) return null;
  
  // Handle mixed fractions like "1 1/2"
  const mixedMatch = qtyStr.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (mixedMatch) {
    return parseInt(mixedMatch[1]) + (parseInt(mixedMatch[2]) / parseInt(mixedMatch[3]));
  }
  
  // Handle simple fractions like "1/2"
  const fracMatch = qtyStr.match(/^(\d+)\/(\d+)$/);
  if (fracMatch) {
    return parseInt(fracMatch[1]) / parseInt(fracMatch[2]);
  }
  
  // Handle decimals or integers
  const num = parseFloat(qtyStr);
  return isNaN(num) ? null : num;
}

// Helper to convert number to fraction string (approximate)
export function formatQuantity(num: number | null): string {
  if (num === null) return '';
  
  // Keep it simple for very small or very large numbers, or if it's an integer
  if (num === 0) return '0';
  if (Number.isInteger(num)) return num.toString();
  
  // Round to 2 decimal places for internal math
  const rounded = Math.round(num * 100) / 100;
  
  const whole = Math.floor(rounded);
  const fraction = rounded - whole;
  
  // Common fractions mapping
  const fractions = [
    { value: 1/8, label: '1/8' },
    { value: 1/4, label: '1/4' },
    { value: 1/3, label: '1/3' },
    { value: 3/8, label: '3/8' },
    { value: 1/2, label: '1/2' },
    { value: 5/8, label: '5/8' },
    { value: 2/3, label: '2/3' },
    { value: 3/4, label: '3/4' },
    { value: 7/8, label: '7/8' }
  ];
  
  // Find closest fraction
  let closest = fractions[0];
  let minDiff = Math.abs(fraction - fractions[0].value);
  
  for (let i = 1; i < fractions.length; i++) {
    const diff = Math.abs(fraction - fractions[i].value);
    if (diff < minDiff) {
      minDiff = diff;
      closest = fractions[i];
    }
  }
  
  // If the difference is too large, just return decimal
  if (minDiff > 0.05) {
    return rounded.toString();
  }
  
  if (whole === 0) {
    return closest.label;
  }
  
  return `${whole} ${closest.label}`;
}

export function parseIngredientLine(line: string): Ingredient {
  const original = line.trim();
  if (!original) return { original, quantity: null, unit: '', name: '', prefix: '' };

  // Very basic regex to try and extract quantity, unit, and name
  // Matches: optional non-word prefix, quantity (number, decimal, or fraction), optional unit, name
  const regex = /^([^\d\w]*)?(\d+(?:\s+\d+\/\d+|\/\d+|\.\d+)?)\s*([a-zA-Z]+)?\s+(.*)$/;
  const match = original.match(regex);

  if (match) {
    const prefix = match[1] || '';
    const quantityStr = match[2];
    const unit = match[3] || '';
    const name = match[4] || '';
    
    // Check if the "unit" is actually part of the name (e.g., "1 apple")
    const commonUnits = ['cup', 'cups', 'tbsp', 'tsp', 'oz', 'g', 'kg', 'lb', 'lbs', 'ml', 'l', 'tablespoon', 'tablespoons', 'teaspoon', 'teaspoons', 'pinch', 'dash', 'quart', 'quarts', 'pint', 'pints', 'gallon', 'gallons', 'fluid', 'fl'];
    
    let finalUnit = unit;
    let finalName = name;
    
    if (unit && !commonUnits.includes(unit.toLowerCase())) {
      finalUnit = '';
      finalName = `${unit} ${name}`;
    }

    return {
      original,
      prefix,
      quantity: parseQuantity(quantityStr),
      unit: finalUnit,
      name: finalName
    };
  }

  // Fallback if parsing fails
  return { original, quantity: null, unit: '', name: original, prefix: '' };
}

export function scaleIngredient(ingredient: Ingredient, multiplier: number): string {
  if (ingredient.quantity === null) return ingredient.original;
  
  const scaledQty = ingredient.quantity * multiplier;
  const formattedQty = formatQuantity(scaledQty);
  
  const parts = [];
  if (ingredient.prefix) parts.push(ingredient.prefix.trim());
  parts.push(formattedQty);
  if (ingredient.unit) parts.push(ingredient.unit);
  if (ingredient.name) parts.push(ingredient.name);
  
  return parts.join(' ');
}
