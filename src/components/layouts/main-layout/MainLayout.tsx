import classNames from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Manrope, Inter } from "next/font/google";
import localFont from "next/font/local";
import { FC, PropsWithChildren } from "react";
import FastCart from "@/components/general/fast-cart/FastCart";
import Footer from "@/components/general/footer/Footer";
import Header from "@/components/general/header/Header";
import Loader from "@/components/general/loader/Loader";
import Meta from "@/components/general/meta/Meta";
import { IMeta } from "@/types/meta.interface";
import styles from "./MainLayout.module.scss";

export const manrope = Manrope({ subsets: ["latin", "cyrillic"] });
export const inter = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--inter-font",
});

export const bebas_neue = localFont({
	src: [
		{
			path: "../../../../public/fonts/BebasNeue/BebasNeue-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../../../public/fonts/BebasNeue/BebasNeue-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../../../public/fonts/BebasNeue/BebasNeue-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--bebas-neue-font",
});

const MainLayout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title = "",
	description,
	withHeader = true,
	withFooter = true,
	className,
}) => {
	dayjs.extend(customParseFormat);
	dayjs.locale("ru");

	return (
		<>
			<Meta title={title} description={description} />
			<div className={classNames(styles.wrapper, manrope.className, className)}>
				{withHeader && <Header />}
				<main className={styles.main}>{children}</main>
				{withFooter && <Footer />}
				<Loader />
				<FastCart />
			</div>
		</>
	);
};

export default MainLayout;
