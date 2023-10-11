interface IMegamenu {
	titleM: string;
	urlM: string;
}
interface ISubmenu {
	titleS: string;
	typeS: "submenu" | "megamenu";
	urlS?: string;
	megamenu?: IMegamenu[];
}
interface IMenu {
	title: string;
	type: "submenu" | "megamenu" | "link";
	url?: string;
	submenu?: ISubmenu[];
}

export const menu: IMenu[] = [
	{
		title: "О нас",
		type: "submenu",
		submenu: [
			{
				titleS: "О школе",
				urlS: "https://smirnov.school/about/",
				typeS: "submenu",
			},
			{
				titleS: "Об основателе",
				urlS: "https://smirnov.school/ivansmirnov/",
				typeS: "submenu",
			},
			{
				titleS: "Преподаватели",
				urlS: "https://smirnov.school/authorandmentor/",
				typeS: "submenu",
			},
			{
				titleS: "Отзывы",
				urlS: "https://smirnov.school/reviews/",
				typeS: "submenu",
			},
			{
				titleS: "FAQ",
				urlS: "https://smirnov.school/faq/",
				typeS: "submenu",
			},
		],
	},
	{
		title: "Наши курсы",
		type: "megamenu",
		submenu: [
			{
				titleS: "Мини-курсы",
				typeS: "megamenu",
				megamenu: [
					{
						titleM: "Твой первый цифровой рисунок",
						urlM: "https://smirnov.school/firstdrawing/",
					},
					{
						titleM: "Рисуем простых персонажей",
						urlM: "https://smirnov.school/simplehero/",
					},
					{
						titleM: "Твоя первая 3D-модель",
						urlM: "https://smirnov.school/3dzbrush/",
					},
					{
						titleM: "Экспеншен-сет. FX-эффекты",
						urlM: "https://smirnov.school/expansion-set-fx1/",
					},
				],
			},
			{
				titleS: "База CG-рисунка",
				typeS: "megamenu",
				megamenu: [
					{
						titleM: "Рисование в Adobe Photoshop",
						urlM: "https://smirnov.school/psb/",
					},
					{
						titleM: "Рисование в Procreate",
						urlM: "https://smirnov.school/pcb/",
					},
					{
						titleM: "Основы CG-рисунка",
						urlM: "https://smirnov.school/cgb/",
					},
					{
						titleM: "Скетчинг и форма",
						urlM: "https://smirnov.school/sk/",
					},
					{
						titleM: "Рисование материалов",
						urlM: "https://smirnov.school/rm/",
					},
					{
						titleM: "Основы фотобаша",
						urlM: "https://smirnov.school/pb/",
					},
					{
						titleM: "Рисование материалов Plus",
						urlM: "https://smirnov.school/rmplus/",
					},
				],
			},
			{
				titleS: "2D-Художник персонажей",
				typeS: "megamenu",
				megamenu: [
					{
						titleM: "Основы создания персонажей",
						urlM: "https://smirnov.school/chb/",
					},
					{
						titleM: "Стилизованная анатомия",
						urlM: "https://smirnov.school/stan/",
					},
					{
						titleM: "Концепт-арт персонажей",
						urlM: "https://smirnov.school/chca/",
					},
					{
						titleM: "Концепт-арт: референсы и драфты",
						urlM: "https://smirnov.school/rd/",
					},
					{
						titleM: "Концепт-арт персонажей. PRO",
						urlM: "https://smirnov.school/chlii/",
					},
					{
						titleM: "Скетчинг персонажей",
						urlM: "https://smirnov.school/chsk/",
					},
				],
			},
			{
				titleS: "2D-художник окружения",
				typeS: "megamenu",
				megamenu: [
					{
						titleM: "Основы создания окружения",
						urlM: "https://smirnov.school/enb/",
					},
					{
						titleM: "3D для 2D-художника",
						urlM: "https://smirnov.school/3d2d/",
					},
					{
						titleM: "Концепт-арт окружения",
						urlM: "https://smirnov.school/eca/",
					},
					{
						titleM: "Основы создания комиксов",
						urlM: "https://smirnov.school/ccb/",
					},
					{
						titleM: "Цвет, свет и атмосферность",
						urlM: "https://smirnov.school/cla/",
					},
					{
						titleM: "Коммерческая иллюстрация",
						urlM: "https://smirnov.school/ill/",
					},
					{
						titleM: "Фотобаш окружения",
						urlM: "https://smirnov.school/photobash/",
					},
				],
			},
			{
				titleS: "3D-художник",
				typeS: "megamenu",
				megamenu: [
					{
						titleM: "Твоя первая 3D-модель",
						urlM: "https://smirnov.school/3dzbrush/",
					},
					{
						titleM: "Основы Blender",
						urlM: "https://smirnov.school/bb/",
					},
					{
						titleM: "3D для игр. Основы",
						urlM: "https://smirnov.school/3d4games/",
					},
					{
						titleM: "3D-персонаж",
						urlM: "https://smirnov.school/3dc/",
					},
					{
						titleM: "Игровая локация в UE",
						urlM: "https://smirnov.school/lue/",
					},
					{
						titleM: "3D для 2D-художника",
						urlM: "https://smirnov.school/3d2d/",
					},
					{
						titleM: "3D-портрет",
						urlM: "https://smirnov.school/3dp/",
					},
					{
						titleM: "Hand-paint текстуры",
						urlM: "https://smirnov.school/htp/",
					},
				],
			},
			{
				titleS: "Художник Unreal Engine",
				typeS: "megamenu",
				megamenu: [
					{
						titleM: "Level art в UE",
						urlM: "https://smirnov.school/ld/",
					},
					{
						titleM: "Освещение локации в UE",
						urlM: "https://smirnov.school/ll/",
					},
					{
						titleM: "Игровая локация в UE",
						urlM: "https://smirnov.school/lue/",
					},
					{
						titleM: "Твоя первая Хоррор-игра",
						urlM: "https://smirnov.school/hg/",
					},
				],
			},
			{
				titleS: "Художник игровой графики",
				typeS: "megamenu",
				megamenu: [
					{
						titleM: "3D для 2D-художника",
						urlM: "https://smirnov.school/3d2d/",
					},
					{
						titleM: "3D для игр. Основы",
						urlM: "https://smirnov.school/3d4games/",
					},
					{
						titleM: "Создание своего проекта",
						urlM: "https://smirnov.school/op/",
					},
					{
						titleM: "Игровая локация в UE",
						urlM: "https://smirnov.school/lue/",
					},
					{
						titleM: "Анимация в Spine",
						urlM: "https://smirnov.school/spine/",
					},
					{
						titleM: "Иконки для игр",
						urlM: "https://smirnov.school/ui_des/",
					},
				],
			},
			{
				titleS: "Программы обучения",
				typeS: "megamenu",
				megamenu: [
					{
						titleM: "База для художника",
						urlM: "https://smirnov.school/ba/",
					},
					{
						titleM: "База в персонажах",
						urlM: "https://smirnov.school/bp/",
					},
					{
						titleM: "База в окружении",
						urlM: "https://smirnov.school/be/",
					},
					{
						titleM: "Профессия игровой художник",
						urlM: "https://smirnov.school/game-artist/",
					},
				],
			},
		],
	},
	{
		title: "Полезные материалы",
		type: "submenu",
		submenu: [
			{
				titleS: "Блог",
				urlS: "https://smirnov.school/blog/",
				typeS: "submenu",
			},
			{
				titleS: "Акции и новости",
				urlS: "https://smirnov.school/news/",
				typeS: "submenu",
			},
			{
				titleS: "Карта развития художника",
				urlS: "https://smirnov.school/map/",
				typeS: "submenu",
			},
			{
				titleS: "Карта курсов",
				urlS: "https://drive.google.com/file/d/1WoyVQv1IUfFZroWinmfj2uAWxyHhiqMh/view",
				typeS: "submenu",
			},
			{
				titleS: "Программа лояльности",
				urlS: "https://smirnov.school/loyalty/",
				typeS: "submenu",
			},
			{
				titleS: "Беспроцентная рассрочка",
				urlS: "https://smirnov.school/payments/",
				typeS: "submenu",
			},
		],
	},
	{
		title: "Вакансии",
		type: "submenu",
		submenu: [
			{
				titleS: "Авторам и менторам",
				urlS: "https://smirnov.school/vac-2/",
				typeS: "submenu",
			},
			{
				titleS: "Художникам",
				urlS: "https://smirnov.school/vacancy/",
				typeS: "submenu",
			},
			{
				titleS: "Другим специалистам",
				urlS: "https://smirnov.school/smskvacancy/",
				typeS: "submenu",
			},
		],
	},
	{
		title: "Компаниям",
		url: "https://smirnov.school/b2b/",
		type: "link",
	},
	{
		title: "Личный кабинет",
		url: "/profile",
		type: "link",
	},
];
