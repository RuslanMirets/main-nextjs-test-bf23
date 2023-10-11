import { FC } from "react";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import Container from "@/components/ui/container/Container";
import Heading from "@/components/ui/heading/Heading";
import GalleryContent from "./gallery-content/GalleryContent";

const Gallery: FC = () => {
	return (
		<MainLayout title="Галерея">
			<section style={{ marginBottom: "60px" }}>
				<Container>
					<Heading>Галерея</Heading>
					<GalleryContent />
				</Container>
			</section>
		</MainLayout>
	);
};

export default Gallery;
