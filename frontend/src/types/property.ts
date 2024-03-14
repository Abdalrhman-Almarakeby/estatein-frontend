export type Property = {
  _id: string;
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  features: string[];
  price: {
    fees: {
      transferTax: number;
      legalFees: number;
      homeInspection: number;
      insurance: number;
      mortgage: number;
    };
    costs: {
      taxes: number;
      homeownersAssociationFee: number;
      insurance: number;
    };
    initialCosts: {
      listingPrice: number;
      additionalFees: number;
      downPayment: number;
      mortgage: number;
    };
    listingPrice: number;
  };
  createdAt: Date;
  updatedAt: Date;
};
