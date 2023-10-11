interface ISocials {
	title: string;
	url: string;
	image: string;
	image2: string;
}

export const socials: ISocials[] = [
	{
		title: "Telegram",
		url: "https://t.me/SmirnovSchoolWelcome_bot/",
		image: "/img/socials/tg.svg",
		image2: "/img/socials/white-telegram.svg",
	},
	{
		title: "WhatsApp",
		url: "https://api.whatsapp.com/send/?phone=79011812060&text&app_absent=0",
		image: "/img/socials/wh.svg",
		image2: "/img/socials/white-whatsapp.svg",
	},
	{
		title: "ВК",
		url: "https://vk.com/smirnovschool/",
		image: "/img/socials/vk.svg",
		image2: "/img/socials/white-vk.svg",
	},

	{
		title: "Youtube",
		url: "https://www.youtube.com/c/SmirnovSchoolLive",
		image: "/img/socials/yt.svg",
		image2: "/img/socials/youtube-w.svg",
	},
	{
		title: "Artstation",
		url: "https://www.artstation.com/smirnovschool",
		image: "/img/socials/artstation.svg",
		image2: "/img/socials/artstation-white.svg",
	},
];
