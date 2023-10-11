/* eslint-disable no-console */
import FormData from "form-data";
import Mailgun from "mailgun.js";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const mailgun = new Mailgun(FormData);
	const client = mailgun.client({
		username: "api",
		key: API_KEY || "",
		url: "https://api.eu.mailgun.net",
	});

	const { name, phone, telegram } = req.body;
	const emails = req.body.emails.map((item: { email: string }) => item.email);

	const messageData = {
		from: "Smirnov.School <sender@smirnov.school>",
		to: emails,
		subject: "2D-художник JUNIOR",
		html: `<h1>Заявка для бесплатной консультации</h1>
		
		<ul>
			<li>Имя: <b>${name}</b></li>
			<li>Телефон: <b>${phone}</b></li>
			<li>Телеграм: <b>${telegram}</b></li>
		</ul>
		`,
	};

	try {
		const emailRes = await client.messages.create(DOMAIN || "", messageData);
		console.log(emailRes);
	} catch (error) {
		console.log(error);
	}

	res.status(200).json({ submitted: true });
}
