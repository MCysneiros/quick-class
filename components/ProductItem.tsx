interface ProductItemProps {
	product: {
		id: number;
		price: number;
		name: string;
	};
}

export const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<div>
			{product.name} - <strong>{product.price}</strong>
		</div>
	);
};
