import {
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Fancybox from "@/components/ui/fancybox/Fancybox";
import { GalleryQuery } from "@/graphql/gallery/__generated__/GalleryQuery";

type Props = {
	gallery: NonNullable<
		NonNullable<NonNullable<GalleryQuery["galleries"]>["edges"]>[0]
	>["node"];
};

const GalleryCard: FC<Props> = ({ gallery }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<div onClick={onOpen}>
				<Image
					src={gallery.featuredImage?.node.sourceUrl || "/img/default.jpg"}
					alt={gallery.title || ""}
					width={300}
					height={300}
				/>
				<div>{gallery.title}</div>
			</div>
			<Modal isOpen={isOpen} onClose={onClose} size="6xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{gallery.title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Fancybox
							options={{
								Carousel: {
									infinite: true,
								},
							}}
						>
							{gallery.gallery?.list?.map((item) => (
								<Link
									key={item?.image?.sourceUrl}
									href={item?.image?.sourceUrl || ""}
									data-fancybox="gallery"
								>
									<Image
										src={item?.image?.sourceUrl || ""}
										alt=""
										width={500}
										height={500}
									/>
								</Link>
							))}
						</Fancybox>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default GalleryCard;
