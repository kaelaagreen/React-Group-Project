export interface recipeDetailsInterface {
  recipe: Recipe;
  _links: Links;
}
export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels?: string[] | null;
  healthLabels?: string[] | null;
  cautions?: string[] | null;
  ingredientLines?: string[] | null;
  ingredients?: IngredientsEntity[] | null;
  calories: number;
  totalWeight: number;
  cuisineType?: string[] | null;
  mealType?: string[] | null;
  dishType?: string[] | null;
  totalNutrients: SubOrTotalNutrientsOrTotalDaily;
  totalDaily: SubOrTotalNutrientsOrTotalDaily;
  digest?: DigestEntity[] | null;
}

export interface IngredientsEntity {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodId: string;
}
export interface SubOrTotalNutrientsOrTotalDaily {}
export interface DigestEntity {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub: SubOrTotalNutrientsOrTotalDaily;
}
export interface recipeInterface {
  //taz's code
  label: string;
  image: string;
  source: string;
  url: string;
  calories: number;
  totalTime: number;
  recipeNumber: number;
  uri: string;
}

export default interface recipe {
  from: number;
  to: number;
  count: number;
  _links: {
    self: {
      href: string;
      title: string;
    };
    next: {
      href: string;
      title: string;
    };
  };
  hits: [
    {
      recipe: {
        uri: string;
        label: string;
        image: string;
        source: string;
        url: string;
        shareAs: string;
        yield: number;
        dietLabels: [string];
        healthLabels: [string];
        cautions: [string];
        ingredientLines: [string];
        ingredients: [
          {
            text: string;
            quantity: number;
            measure: string;
            food: string;
            weight: number;
            foodId: string;
          }
        ];
        calories: number;
        totalWeight: number;
        totalTime: number;
        cuisineType: [string];
        mealType: [string];
        dishType: [string];
        totalNutrients: {};
        totalDaily: {};
        digest: [
          {
            label: string;
            tag: string;
            schemaOrgTag: string;
            total: number;
            hasRDI: true;
            daily: number;
            unit: string;
            sub: {};
          }
        ];
      };
      _links: {
        self: {
          href: string;
          title: string;
        };
        next: {
          href: string;
          title: string;
        };
      };
    }
  ];
}

export interface Links {
  self: SelfOrNext;
  next: SelfOrNext;
}
export interface SelfOrNext {
  href: string;
  title: string;
}

export interface HitsEntity {
  recipe: Recipe;
  _links: Links;
}
