import { Button } from "@chakra-ui/react";
import { FC } from "react";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import Container from "@/components/ui/container/Container";
import Heading from "@/components/ui/heading/Heading";
import { useAddToCart } from "@/hooks/cart/useAddToCart";

const Home: FC = () => {
	const { handleAddToCart, loading } = useAddToCart();

	return (
		<MainLayout title="Школа цифровых художников">
			<Container>
				<Heading>Главная (Main)</Heading>
				<Button onClick={() => handleAddToCart(112)} isLoading={loading}>
					Add to cart CGB
				</Button>
				<Button onClick={() => handleAddToCart(102930)} isLoading={loading}>
					Add to cart 2DB
				</Button>
				<Button onClick={() => handleAddToCart(101496)} isLoading={loading}>
					Add to cart Экспеншен-сет: Фотобаш персонажей
				</Button>
			</Container>
		</MainLayout>
	);
};

export default Home;
