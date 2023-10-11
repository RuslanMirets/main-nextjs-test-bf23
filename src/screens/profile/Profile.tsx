import { FC } from "react";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import Container from "@/components/ui/container/Container";
import Heading from "@/components/ui/heading/Heading";
import { useViewerQuery } from "@/graphql/user/__generated__/ViewerQuery";

const Profile: FC = () => {
	const { data } = useViewerQuery();

	return (
		<MainLayout title="Профиль">
			<Container>
				<Heading>Профиль</Heading>
				<div>{data?.viewer?.databaseId}</div>
				<div>{data?.viewer?.name}</div>
				<div>{data?.viewer?.email}</div>
				<div>{data?.viewer?.username}</div>
			</Container>
		</MainLayout>
	);
};

export default Profile;
