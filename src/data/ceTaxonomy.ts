export type TaxonomyLink = {
	label: string;
	slug: string;
};

export type TaxonomyGroup = {
	label: string;
	slug: string;
	items: TaxonomyLink[];
};

export const fortalezaZones: TaxonomyGroup[] = [
	{
		label: 'Centro',
		slug: 'fortaleza-centro',
		items: [
			{ label: 'Centro', slug: 'centro-fortaleza' },
		],
	},
	{
		label: 'Zona Leste (Litoral & Aldeota)',
		slug: 'fortaleza-leste',
		items: [
			{ label: 'Aldeota', slug: 'aldeota' },
			{ label: 'Meireles', slug: 'meireles' },
			{ label: 'Mucuripe', slug: 'mucuripe' },
			{ label: 'Cocó', slug: 'coco' },
			{ label: 'Praia de Iracema', slug: 'praia-de-iracema' },
		],
	},
	{
		label: 'Zona Oeste',
		slug: 'fortaleza-oeste',
		items: [
			{ label: 'Barra do Ceará', slug: 'barra-do-ceara' },
			{ label: 'Jacarecanga', slug: 'jacarecanga' },
			{ label: 'Carlito Pamplona', slug: 'carlito-pamplona' },
		],
	},
	{
		label: 'Zona Sul',
		slug: 'fortaleza-sul',
		items: [
			{ label: 'Parangaba', slug: 'parangaba' },
			{ label: 'Maraponga', slug: 'maraponga' },
			{ label: 'Mondubim', slug: 'mondubim' },
		],
	},
	{
		label: 'Zona Sudeste',
		slug: 'fortaleza-sudeste',
		items: [
			{ label: 'Messejana', slug: 'messejana' },
			{ label: 'José Walter', slug: 'jose-walter' },
			{ label: 'Jangurussu', slug: 'jangurussu' },
		],
	},
];

// Alias for compatibility
export const rioZones = fortalezaZones;

export const ceRegions: TaxonomyGroup[] = [
	{
		label: 'Região Metropolitana',
		slug: 'regiao-metropolitana-de-fortaleza',
		items: [
			{ label: 'Fortaleza', slug: 'fortaleza' },
			{ label: 'Caucaia', slug: 'caucaia' },
			{ label: 'Maracanaú', slug: 'maracanau' },
			{ label: 'Eusébio', slug: 'eusebio' },
			{ label: 'Aquiraz', slug: 'aquiraz' },
			{ label: 'Maranguape', slug: 'maranguape' },
			{ label: 'Pacatuba', slug: 'pacatuba' },
			{ label: 'Horizonte', slug: 'horizonte' },
			{ label: 'Cascavel', slug: 'cascavel' },
		],
	},
	{
		label: 'Cariri',
		slug: 'cariri',
		items: [
			{ label: 'Juazeiro do Norte', slug: 'juazeiro-do-norte' },
			{ label: 'Crato', slug: 'crato' },
			{ label: 'Barbalha', slug: 'barbalha' },
			{ label: 'Brejo Santo', slug: 'brejo-santo' },
			{ label: 'Missão Velha', slug: 'missao-velha' },
			{ label: 'Milagres', slug: 'milagres' },
			{ label: 'Mauriti', slug: 'mauriti' },
			{ label: 'Jardim', slug: 'jardim' },
		],
	},
	{
		label: 'Sertão de Sobral',
		slug: 'sertao-de-sobral',
		items: [
			{ label: 'Sobral', slug: 'sobral' },
			{ label: 'Tianguá', slug: 'tiangua' },
			{ label: 'Camocim', slug: 'camocim' },
			{ label: 'Acaraú', slug: 'acarau' },
			{ label: 'Itapipoca', slug: 'itapipoca' },
			{ label: 'Granja', slug: 'granja' },
			{ label: 'Viçosa do Ceará', slug: 'vicosa-do-ceara' },
			{ label: 'Ubajara', slug: 'ubajara' },
		],
	},
	{
		label: 'Sertão Central',
		slug: 'sertao-central',
		items: [
			{ label: 'Quixadá', slug: 'quixada' },
			{ label: 'Quixeramobim', slug: 'quixeramobim' },
			{ label: 'Canindé', slug: 'caninde' },
			{ label: 'Crateús', slug: 'crateus' },
			{ label: 'Tauá', slug: 'taua' },
			{ label: 'Senador Pompeu', slug: 'senador-pompeu' },
		],
	},
	{
		label: 'Litoral Leste e Jaguaribe',
		slug: 'litoral-leste-jaguaribe',
		items: [
			{ label: 'Aracati', slug: 'aracati' },
			{ label: 'Russas', slug: 'russas' },
			{ label: 'Limoeiro do Norte', slug: 'limoeiro-do-norte' },
			{ label: 'Morada Nova', slug: 'morada-nova' },
			{ label: 'Jaguaribe', slug: 'jaguaribe' },
			{ label: 'Beberibe', slug: 'beberibe' },
		],
	},
];

export const topicTags: TaxonomyLink[] = [
	{ label: 'Política', slug: 'politica-ce' },
	{ label: 'Segurança Pública', slug: 'seguranca-publica' },
	{ label: 'Transporte e Mobilidade', slug: 'transporte-mobilidade' },
	{ label: 'Saúde', slug: 'saude' },
	{ label: 'Educação', slug: 'educacao' },
	{ label: 'Cultura e Tradição', slug: 'cultura-tradicao' },
	{ label: 'Eleições 2026', slug: 'eleicoes-2026' },
];

export const allRjTagSlugs = [
	...fortalezaZones.flatMap((group) => [group.slug, ...group.items.map((item) => item.slug)]),
	...ceRegions.flatMap((group) => [group.slug, ...group.items.map((item) => item.slug)]),
	...topicTags.map((item) => item.slug),
];
