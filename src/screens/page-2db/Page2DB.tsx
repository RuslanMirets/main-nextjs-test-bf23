import { FC } from "react";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import { usePage2DBQuery } from "@/graphql/page/__generated__/Page2DBQuery";
import styles from "./Page2DB.module.scss";
import Background from "./background/Background";
import Buy from "./buy/Buy";
import Faq from "./faq/Faq";
import Feedback from "./feedback/Feedback";
import Info from "./info/Info";
import Intro from "./intro/Intro";
import Learning from "./learning/Learning";
import Levels from "./levels/Levels";
import Payment from "./payment/Payment";
import Program from "./program/Program";
import Result from "./result/Result";
import Reviews from "./reviews/Reviews";
import Road from "./road/Road";
import Teachers from "./teachers/Teachers";
import Training from "./training/Training";
import Works from "./works/Works";

const Page2DB: FC = () => {
	const { data } = usePage2DBQuery();
	const page2db = data?.page?.page2db;

	if (!data) return null;

	return (
		<MainLayout
			className={styles.layout}
			title={data.page?.seo?.title || ""}
			description={data.page?.seo?.description || ""}
		>
			<Intro intro={page2db?.intro} />
			<Info info={page2db?.info} />
			<Levels levels={page2db?.levels} />
			<Background
				title={page2db?.background?.title1}
				image={page2db?.background?.image1?.sourceUrl}
			/>
			<Learning learning={page2db?.learning} />
			<Training training={page2db?.training} />
			<Road road={page2db?.road} />
			<Result result={page2db?.result} />
			<Works works={page2db?.worksStudents} />
			<Background
				title={page2db?.background?.title2}
				image={page2db?.background?.image2?.sourceUrl}
			/>
			<Program program={page2db?.program} />
			<Teachers teachers={page2db?.teachers} />
			<Works works={page2db?.worksTeachers} />
			<Reviews reviews={page2db?.reviews} />
			<Buy buy={page2db?.buy} />
			<Payment payment={page2db?.payment} />
			<Feedback feedback={page2db?.feedback} />
			<Faq faq={page2db?.faq} />
		</MainLayout>
	);
};

export default Page2DB;
