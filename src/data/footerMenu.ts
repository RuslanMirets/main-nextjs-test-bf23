interface IFooterMenu {
	title: string;
	url: string;
}

interface IFooterList {
	title: string;
	menu: IFooterMenu[];
}

export const footerMenu: IFooterList[] = [
	{
		title: "О нас",
		menu: [
			{
				title: "Акции и Новости",
				url: "https://smirnov.school/news/",
			},
			{
				title: "О школе",
				url: "https://smirnov.school/about/",
			},
			{
				title: "Об основателе",
				url: "https://smirnov.school/ivansmirnov/",
			},
			{
				title: "Преподаватели",
				url: "https://smirnov.school/authorandmentor/",
			},
			{
				title: "Корпоративным клиентам",
				url: "https://smirnov.school/b2b/",
			},
			{
				title: "Контакты",
				url: "https://smirnov.school/cont/",
			},
			{
				title: "Отзывы",
				url: "https://smirnov.school/reviews/",
			},
		],
	},
	{
		title: "Курсы",
		menu: [
			{
				title: "Мини-курсы",
				url: "https://smirnov.school/#course",
			},
			{
				title: "Базовые курсы",
				url: "https://smirnov.school/#course",
			},
			{
				title: "Курсы по персонажам",
				url: "https://smirnov.school/#course",
			},
			{
				title: "Курсы по окружению",
				url: "https://smirnov.school/#course",
			},
			{
				title: "Курсы по 3D-графике",
				url: "https://smirnov.school/#course",
			},
			{
				title: "Курсы по Unreal Engine",
				url: "https://smirnov.school/#course",
			},
			{
				title: "Курсы для игрового художника",
				url: "https://smirnov.school/#course",
			},
			{
				title: "Учебные программы",
				url: "https://smirnov.school/#course",
			},
		],
	},
	{
		title: "Документы",
		menu: [
			{
				title: "Оферта",
				url: "https://smirnov.school/offer/",
			},
			{
				title: "Пользовательское соглашение",
				url: "https://smirnov.school/agreement-1/",
			},
			{
				title: "Политика обработки персональных данных",
				url: "https://smirnov.school/privacy-1/",
			},
			{
				title: "Согласие на обработку персональных данных",
				url: "https://smirnov.school/agreement-2/",
			},
		],
	},
	{
		title: "Полезные материалы",
		menu: [
			{
				title: "О профессиях",
				url: "https://smirnov.school/#blog",
			},
			{
				title: "Карта курсов",
				url: "https://drive.google.com/file/d/1WoyVQv1IUfFZroWinmfj2uAWxyHhiqMh/view",
			},
			{
				title: "Подарочный сертификат",
				url: "https://vk.com/market-143107500?w=product-143107500_6220702%2Fquery",
			},
			{
				title: "FAQ",
				url: "https://smirnov.school/faq/",
			},
			{
				title: "Вакансии для художников",
				url: "https://smirnov.school/vacancy/",
			},
			{
				title: "Программа лояльности",
				url: "https://smirnov.school/loyalty/",
			},
			{
				title: "Карта развития",
				url: "https://smirnov.school/map/",
			},
			{
				title: "Беспроцентная рассрочка",
				url: "https://smirnov.school/payments/",
			},
		],
	},
	{
		title: "Работа в Smirnov School",
		menu: [
			{
				title: "Авторам и менторам",
				url: "https://smirnov.school/vac-2/",
			},
			{
				title: "Другим специалистам",
				url: "https://smirnov.school/smskvacancy/",
			},
		],
	},
];
