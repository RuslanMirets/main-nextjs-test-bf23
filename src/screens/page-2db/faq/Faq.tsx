import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import { FC } from "react";
import { Page2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import styles from "./Faq.module.scss";

type Props = {
	faq: NonNullable<NonNullable<Page2DBQuery["page"]>["page2db"]>["faq"];
};

const Faq: FC<Props> = ({ faq }) => {
	return (
		<section className={styles.root}>
			<Container>
				<Title className={styles.title}>{faq?.title}</Title>
				<Accordion defaultIndex={[0]} allowMultiple>
					{faq?.list?.map((item, index) => (
						<AccordionItem key={index}>
							<AccordionButton className={styles.header}>
								<AccordionIcon />
								<p className={styles.subtitle}>{item?.title}</p>
							</AccordionButton>
							<AccordionPanel>
								<p className={styles.description}>{item?.description}</p>
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</section>
	);
};

export default Faq;
