import { ProductItem } from './ProductItem';

type SearchResultsProps = {
	results: Array<{
		id: number;
		price: number;
		name: string;
	}>;
};

export const SearchResults = ({ results }: SearchResultsProps) => {
	return (
		<div>
			{results.map(result => {
				return <ProductItem product={result} />;
			})}
		</div>
	);
};
