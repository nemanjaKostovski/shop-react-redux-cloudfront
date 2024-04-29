const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);

// My tryout to fix issue with DynamoDB structure
interface OriginalItem {
  description: { S: string };
  price: { N: number };
  productId: { S: string };
  title: { S: string };
}

interface TransformedItem {
  description: string;
  price: number;
  productId: string;
  title: string;
}

export function fixDBData(originalData: OriginalItem[]): TransformedItem[] {
  return originalData.map((item) => ({
    description: item.description.S,
    price: item.price.N,
    productId: item.productId.S,
    title: item.title.S,
  }));
}
