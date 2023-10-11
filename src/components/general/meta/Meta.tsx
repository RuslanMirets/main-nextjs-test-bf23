import Head from "next/head";
import { FC } from "react";
import { IMeta } from "@/types/meta.interface";

const titleMerge = (title: string) => `${title} - Smirnov.School`;

const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<>
			<Head>
				<title>{titleMerge(title)}</title>
				<meta
					name="description"
					content={description ? description : "Школа CG"}
				/>
			</Head>
		</>
	);
};

export default Meta;
