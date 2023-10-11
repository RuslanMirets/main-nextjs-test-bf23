import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FC } from "react";
import { useGalleryCategories } from "@/graphql/gallery/__generated__/GalleryCategories";
import { useGalleryQuery } from "@/graphql/gallery/__generated__/GalleryQuery";
import GalleryCard from "./gallery-card/GalleryCard";

const GalleryContent: FC = () => {
	const { data: dataCategories } = useGalleryCategories();
	const categories = dataCategories?.galleryCategories?.edges.map(
		(category) => category.node,
	);

	const { data: dataGalleries } = useGalleryQuery();
	const galleries = dataGalleries?.galleries?.edges.map(
		(gallery) => gallery.node,
	);

	return (
		<Tabs size="lg" variant="enclosed">
			<TabList>
				{categories?.map((category) => (
					<Tab key={category.databaseId}>{category.name}</Tab>
				))}
			</TabList>
			<TabPanels>
				{categories?.map((category) => {
					const subcategories = category.children?.edges.map(
						(subcategory) => subcategory.node,
					);
					return (
						<TabPanel key={category.databaseId}>
							<Tabs variant="soft-rounded" colorScheme="green">
								<TabList>
									<Tab>Все</Tab>
									{subcategories?.map((subcategory) => (
										<Tab key={subcategory.databaseId}>{subcategory.name}</Tab>
									))}
								</TabList>
								<TabPanels>
									<TabPanel>
										<div
											style={{
												display: "grid",
												gridTemplateColumns: "1fr 1fr 1fr",
											}}
										>
											{galleries?.map((gallery) => {
												const galleryCategories =
													gallery.galleryCategories?.edges.map(
														(galleryCategory) => galleryCategory.node,
													);
												if (
													galleryCategories?.some(
														(galleryCategory) =>
															galleryCategory.databaseId ===
															category.databaseId,
													)
												) {
													return (
														<div key={gallery.databaseId}>
															<GalleryCard gallery={gallery} />
														</div>
													);
												}
											})}
										</div>
									</TabPanel>
									{subcategories?.map((subcategory) => (
										<TabPanel key={subcategory.databaseId}>
											<div
												style={{
													display: "grid",
													gridTemplateColumns: "1fr 1fr 1fr",
												}}
											>
												{galleries?.map((gallery) => {
													const galleryCategories =
														gallery.galleryCategories?.edges.map(
															(galleryCategory) => galleryCategory.node,
														);
													if (
														galleryCategories?.some(
															(galleryCategory) =>
																galleryCategory.databaseId ===
																subcategory.databaseId,
														)
													) {
														return (
															<div key={gallery.databaseId}>
																<GalleryCard gallery={gallery} />
															</div>
														);
													}
												})}
											</div>
										</TabPanel>
									))}
								</TabPanels>
							</Tabs>
						</TabPanel>
					);
				})}
			</TabPanels>
		</Tabs>
	);
};

export default GalleryContent;
