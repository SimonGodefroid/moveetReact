import React, { Component } from 'react';
import Poster from './Movies/Poster';
const movies = [
	{
		_id: { $oid: '59adc7c0a7c9d1abcf5d3c28' },
		statistics: {
			variationTopMovie: -1,
			rankTopMovie: 10,
			releaseWeekPosition: -3,
			theaterCountOnRelease: 900,
			theaterCount: 1183,
			wantToSeeCount: 3746,
			fanCount: 765,
			commentCount: 15,
			userRatingCount: 1848,
			userReviewCount: 177,
			userRating: 3.5,
			pressReviewCount: 26,
			pressRating: 2.8
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571906&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=226447.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Gad Elmaleh, Audrey Lamy, David Marsais, Arié Elmaleh, Miranda Cosgrove',
			directors: 'Pierre Coffin, Kyle Balda'
		},
		runtime: 5400,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img1.acsta.net/pictures/17/06/26/15/36/527507.jpg',
		media: 'Affiche',
		synopsis:
			'Alors que Gru, totalement déprimé par sa mise à pied, tente de trouver une nouvelle voie, un mystérieux individu se présente pour l’informer du décès de son père. Dans la foulée, il lui annonce l’existence d’un frère jumeau prénommé Dru qui a exprimé le désir d’une rencontre. Ébranlé par la nouvelle, Gru interroge sa mère qui avoue son secret: après avoir donné naissance à des jumeaux, elle a divorcé en faisant la promesse à son ex-mari de disparaître totalement de sa vie en échange d’un des enfants. Tout en précisant, en substance, qu’elle n’a pas eu son mot à dire et que Gru n’est somme toute qu’un second choix. Si Gru, tout d’abord enthousiasmé à l’idée d’avoir un frère, se rend avec Lucy et les filles dans son île natale, Freedonia, pour rencontrer son jumeau, il déchante vite quand il découvre que Dru est nettement supérieur à lui, et ce en tout point. Là où Gru est un misanthrope aussi dépourvu d’emploi que de cheveux, Dru arbore une masse capillaire impressionnante, un charisme naturel et une fortune colossale héritée de son père et de son élevage de cochons. Gru est rapidement miné par un sentiment d’infériorité, quand Dru lui révèle sa faille: leur père n’a jamais vu en lui l’étoffe d’un méchant, et de ce fait ne l’a pas formé dans cette direction qui est pourtant la marque de fabrique de la famille. Avec son aide, ils pourraient à eux deux perpétuer la tradition familiale. Gru se sent alors investi d’un rôle de «grand frère» et lui livre les secrets de l’utilisation des gadgets ultra-sophistiqués de leur père avec l’intention d’en profiter pour mettre hors d’état de nuire l’insaisissable Balthazar Bratt. Mais cette alliance se voit sérieusement menacée par un cas aggravé de rivalité gémellaire qui va vite les dépasser et les handicaper face à un ennemi à l’envergure encore inégalée.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Moi, Moche et Méchant 3',
		code: 226447,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571906' },
		language: [{ _id: { $oid: '59adc7c0a7c9d1abcf5d3c29' } }],
		release: {
			releaseDate: { $date: '2017-07-05T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [1, 3, 4],
		genreList: ['Animation', 'Aventure', 'Comédie'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7c1a7c9d1abcf5d3c2a' },
		statistics: {
			variationTopMovie: 0,
			rankTopMovie: 1,
			releaseWeekPosition: 0,
			theaterCount: 1188,
			wantToSeeCount: 6117,
			fanCount: 865,
			commentCount: 27,
			userRatingCount: 1873,
			userReviewCount: 412,
			userRating: 3.9,
			pressReviewCount: 27,
			pressRating: 3.1
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571898&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=237821.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Dane DeHaan, Cara Delevingne, Clive Owen, Rihanna, Ethan Hawke',
			directors: 'Luc Besson'
		},
		runtime: 8280,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img3.acsta.net/pictures/17/05/24/09/19/550722.jpg',
		media: 'Affiche',
		synopsis:
			"Au 28ème siècle, Valérian et Laureline forment une équipe d'agents spatio-temporels chargés de maintenir l'ordre dans les territoires humains. Mandaté par le Ministre de la Défense, le duo part en mission sur l’extraordinaire cité intergalactique Alpha - une métropole en constante expansion où des espèces venues de l'univers tout entier ont convergé au fil des siècles pour partager leurs connaissances, leur savoir-faire et leur culture. Un mystère se cache au cœur d'Alpha, une force obscure qui menace l'existence paisible de la Cité des Mille Planètes. Valérian et Laureline vont devoir engager une course contre la montre pour identifier la terrible menace et sauvegarder non seulement Alpha, mais l'avenir de l'univers.",
		title: 'Mise à jour sur Google play',
		originalTitle: 'Valérian et la Cité des mille planètes',
		code: 237821,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571898' },
		language: [{ _id: { $oid: '59adc7c1a7c9d1abcf5d3c2b' } }],
		release: {
			releaseDate: { $date: '2017-07-26T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [1, 7],
		genreList: ['Science fiction', 'Aventure', 'Action', 'Fantastique'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7c2a7c9d1abcf5d3c2c' },
		statistics: {
			variationTopMovie: -1,
			rankTopMovie: 5,
			releaseWeekPosition: -2,
			theaterCountOnRelease: 788,
			theaterCount: 998,
			wantToSeeCount: 6674,
			fanCount: 1798,
			commentCount: 3219,
			userRatingCount: 4316,
			userReviewCount: 465,
			userRating: 3.5,
			pressReviewCount: 24,
			pressRating: 3.6
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19569522&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=209778.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Tom Holland, Michael Keaton, Robert Downey Jr., Zendaya, Marisa Tomei',
			directors: 'Jon Watts'
		},
		runtime: 8040,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img4.acsta.net/pictures/17/08/30/15/34/545707.jpg',
		media: 'Affiche',
		synopsis:
			'Après ses spectaculaires débuts dans Captain America : Civil War, le jeune Peter Parker découvre peu à peu sa nouvelle identité, celle de Spider-Man, le super-héros lanceur de toile. Galvanisé par son expérience avec les Avengers, Peter rentre chez lui auprès de sa tante May, sous l’œil attentif de son nouveau mentor, Tony Stark. Il s’efforce de reprendre sa vie d’avant, mais au fond de lui, Peter rêve de se prouver qu’il est plus que le sympathique super héros du quartier. L’apparition d’un nouvel ennemi, le Vautour, va mettre en danger tout ce qui compte pour lui...',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Spider-Man: Homecoming',
		code: 209778,
		trailer: { href: 'http://www.allocine.fr/blogvision/19569522' },
		language: [{ _id: { $oid: '59adc7c2a7c9d1abcf5d3c2d' } }],
		release: {
			releaseDate: { $date: '2017-07-12T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [1],
		genreList: ['Action', 'Aventure'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7c3a7c9d1abcf5d3c2e' },
		statistics: {
			variationTopMovie: 0,
			rankTopMovie: 2,
			releaseWeekPosition: -1,
			theaterCountOnRelease: 751,
			theaterCount: 1080,
			wantToSeeCount: 4267,
			fanCount: 1149,
			userRatingCount: 4470,
			userReviewCount: 637,
			userRating: 4.2,
			pressReviewCount: 22,
			pressRating: 4.1
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571355&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=240850.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Fionn Whitehead, Tom Glynn-Carney, Jack Lowden, Harry Styles, Aneurin Barnard',
			directors: 'Christopher Nolan'
		},
		runtime: 6420,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img3.acsta.net/pictures/17/07/12/15/29/231891.jpg',
		media: 'Affiche',
		synopsis: 'Le récit de la fameuse évacuation des troupes alliées de Dunkerque en mai 1940.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Dunkerque',
		code: 240850,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571355' },
		language: [{ _id: { $oid: '59adc7c3a7c9d1abcf5d3c2f' } }],
		release: {
			releaseDate: { $date: '2017-07-19T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [2, 9],
		genreList: ['Guerre', 'Historique', 'Drame'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7c4a7c9d1abcf5d3c30' },
		statistics: {
			variationTopMovie: -15,
			rankTopMovie: 43,
			releaseWeekPosition: -5,
			theaterCountOnRelease: 304,
			theaterCount: 536,
			wantToSeeCount: 473,
			fanCount: 119,
			userRatingCount: 430,
			userReviewCount: 64,
			userRating: 4.1,
			pressReviewCount: 21,
			pressRating: 4
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19569940&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=249654.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Céline Ronte, Boris Rehlinger, Guillaume Bouchède, Guillaume Darnault, Magali Rosenzweig',
			directors: 'Benjamin Renner, Patrick Imbert'
		},
		runtime: 4800,
		statusList: 'nowshowing',
		productionYear: 2016,
		posterPath: 'http://fr.web.img1.acsta.net/pictures/17/05/15/12/39/312377.jpg',
		media: 'Affiche',
		synopsis:
			'Ceux qui pensent que la campagne est un lieu calme et paisible se trompent, on y trouve des animaux particulièrement agités, un Renard qui se prend pour une poule, un Lapin qui fait la cigogne et un Canard qui veut remplacer le Père Noël. Si vous voulez prendre des vacances, passez votre chemin…',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Le Grand Méchant Renard et autres contes',
		code: 249654,
		trailer: { href: 'http://www.allocine.fr/blogvision/19569940' },
		language: [{ _id: { $oid: '59adc7c4a7c9d1abcf5d3c31' } }],
		release: {
			releaseDate: { $date: '2017-06-21T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [3, 4, 9],
		genreList: ['Animation', 'Famille'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7c5a7c9d1abcf5d3c32' },
		statistics: {
			variationTopMovie: -1,
			rankTopMovie: 13,
			releaseWeekPosition: -1,
			theaterCountOnRelease: 360,
			theaterCount: 581,
			wantToSeeCount: 325,
			fanCount: 58,
			userRatingCount: 237,
			userReviewCount: 38,
			userRating: 2.5,
			pressReviewCount: 7,
			pressRating: 2.6
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571390&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=247038.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Thomas Solivérès, Tanya Lopert, Albert Delpy, Carmen Maura, Michèle Moretti',
			directors: 'Frédéric Quiring'
		},
		runtime: 5280,
		statusList: 'nowshowing',
		productionYear: 2016,
		posterPath: 'http://fr.web.img5.acsta.net/pictures/17/06/02/09/31/260666.jpg',
		media: 'Affiche',
		synopsis:
			'Cet été, Alex se retrouve moniteur d\'une "colo" très particulière. Car ici point d\'enfants ni de têtes blondes... mais des retraités et des cheveux blancs. Ces charmants pensionnaires vont lui en faire voir de toutes les couleurs. Retraités déchaînés en colo, monos au bout du rouleau : il n’y pas d’âge pour être un sale gosse !',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Sales Gosses',
		code: 247038,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571390' },
		language: [{ _id: { $oid: '59adc7c5a7c9d1abcf5d3c33' } }],
		release: {
			releaseDate: { $date: '2017-07-19T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [4],
		genreList: ['Comédie'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7c6a7c9d1abcf5d3c34' },
		statistics: {
			variationTopMovie: -3,
			rankTopMovie: 9,
			releaseWeekPosition: 0,
			theaterCount: 568,
			wantToSeeCount: 188,
			fanCount: 32,
			userRatingCount: 57,
			userReviewCount: 9,
			userRating: 3.8,
			pressReviewCount: 15,
			pressRating: 3.1
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19569430&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=250871.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Philippe Bozo, Laurent Morteau, Pascal Casanova, Céline Monsarrat, Emmanuel Curtil',
			directors: 'David Alaux'
		},
		runtime: 5820,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img2.acsta.net/pictures/17/06/02/15/43/482135.jpg',
		media: 'Affiche',
		synopsis:
			'Maurice a tout d’un pingouin… mais le tigre est en lui !Elevé par une tigresse, ce pingouin loin d’être manchot est devenu un pro du Kung Fu.Avec ses amis, les As de la jungle, Maurice entend dorénavant faire régner l’ordre et la justice dans la jungle, comme sa mère avant lui.Mais Igor, un koala diabolique, entouré de ses babouins mercenaires pas très futés, a pour projet de détruire la jungle…Les As de la jungle, à la rescousse !',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Les As de la Jungle',
		code: 250871,
		trailer: { href: 'http://www.allocine.fr/blogvision/19569430' },
		language: [{ _id: { $oid: '59adc7c6a7c9d1abcf5d3c35' } }],
		release: {
			releaseDate: { $date: '2017-07-26T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [1, 3, 4],
		genreList: ['Animation', 'Comédie', 'Aventure'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7c7a7c9d1abcf5d3c36' },
		statistics: {
			variationTopMovie: -17,
			rankTopMovie: 49,
			releaseWeekPosition: -2,
			theaterCountOnRelease: 241,
			theaterCount: 572,
			wantToSeeCount: 108,
			fanCount: 14,
			userRatingCount: 58,
			userReviewCount: 10,
			userRating: 2.4,
			pressReviewCount: 9,
			pressRating: 2.8
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19570990&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=244968.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Ramzy Bedia, Antoine Duléry, Armelle, Lévanah Solomon, Emmanuel Garijo',
			directors: 'Alberto Rodríguez'
		},
		runtime: 5460,
		statusList: 'nowshowing',
		productionYear: 2016,
		posterPath: 'http://fr.web.img4.acsta.net/pictures/17/04/21/14/27/407428.jpg',
		media: 'Affiche',
		synopsis:
			"Ozzy, un adorable chien, fait le bonheur de ses maîtres. Ceux-ci devant partir quelques mois à l'étranger le confient à un luxueux hôtel pour chiens. Ils ignorent qu'en réalité Blue Creek est une prison. Ozzy ne se laissera pas faire. Avec l'aide de ses copains de cellule, il fera tout pour retrouver la liberté.",
		title: 'Mise à jour sur Google play',
		originalTitle: 'Ozzy, la Grande évasion',
		code: 244968,
		trailer: { href: 'http://www.allocine.fr/blogvision/19570990' },
		language: [{ _id: { $oid: '59adc7c7a7c9d1abcf5d3c37' } }],
		release: {
			releaseDate: { $date: '2017-07-12T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [3, 4, 9],
		genreList: ['Animation', 'Famille'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7c8a7c9d1abcf5d3c38' },
		statistics: {
			variationTopMovie: -9,
			rankTopMovie: 46,
			releaseWeekPosition: -4,
			theaterCountOnRelease: 549,
			theaterCount: 342,
			wantToSeeCount: 4140,
			fanCount: 902,
			commentCount: 104,
			userRatingCount: 2314,
			userReviewCount: 308,
			userRating: 2.7,
			pressReviewCount: 16,
			pressRating: 2.3
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19572247&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=198592.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Mark Wahlberg, Laura Haddock, Anthony Hopkins, Isabela Moner, Stanley Tucci',
			directors: 'Michael Bay'
		},
		runtime: 8940,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img4.acsta.net/pictures/17/06/12/10/07/308660.jpg',
		media: 'Affiche',
		synopsis:
			'The Last Knight fait voler en éclats les mythes essentiels de la franchise Transformers, et redéfinit ce que signifie être un héros. Humains et Transformers sont en guerre. Optimus Prime n’est plus là… La clé de notre salut est enfouie dans les secrets du passé, dans l’histoire cachée des Transformers sur Terre. Sauver notre monde sera la mission d’une alliance inattendue : Cade Yeager, Bumblebee, un Lord anglais et un professeur d’Oxford. Il arrive un moment, dans la vie de chacun, où l’on se doit de faire la différence. Dans Transformers: The Last Knight, les victimes deviendront les héros. Les héros deviendront les méchants. Un seul monde survivra : le leur… ou le nôtre.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Transformers: The Last Knight',
		code: 198592,
		trailer: { href: 'http://www.allocine.fr/blogvision/19572247' },
		language: [{ _id: { $oid: '59adc7c8a7c9d1abcf5d3c39' } }],
		release: {
			releaseDate: { $date: '2017-06-28T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [1, 7],
		genreList: ['Action', 'Science fiction'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7c9a7c9d1abcf5d3c3a' },
		statistics: {
			variationTopMovie: 4,
			rankTopMovie: 4,
			releaseWeekPosition: -1,
			theaterCountOnRelease: 300,
			theaterCount: 392,
			wantToSeeCount: 1750,
			fanCount: 379,
			commentCount: 1,
			userRatingCount: 1516,
			userReviewCount: 159,
			userRating: 4.2,
			pressReviewCount: 20,
			pressRating: 3.7
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19569765&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=230453.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Ansel Elgort, Kevin Spacey, Lily James, Jon Bernthal, Eiza Gonzalez',
			directors: 'Edgar Wright'
		},
		runtime: 6780,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img6.acsta.net/pictures/17/06/15/10/01/589396.jpg',
		media: 'Affiche',
		synopsis:
			'Chauffeur pour des braqueurs de banque, Baby a un truc pour être le meilleur dans sa partie : il roule au rythme de sa propre playlist. Lorsqu’il rencontre la fille de ses rêves, Baby cherche à mettre fin à ses activités criminelles pour revenir dans le droit chemin. Mais il est forcé de travailler pour un grand patron du crime et le braquage tourne mal… Désormais, sa liberté, son avenir avec la fille qu’il aime et sa vie sont en jeu.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Baby Driver',
		code: 230453,
		trailer: { href: 'http://www.allocine.fr/blogvision/19569765' },
		language: [{ _id: { $oid: '59adc7c9a7c9d1abcf5d3c3b' } }],
		release: {
			releaseDate: { $date: '2017-07-19T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [1, 5],
		genreList: ['Action', 'Policier', 'Thriller'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7caa7c9d1abcf5d3c3c' },
		statistics: {
			variationTopMovie: -1,
			rankTopMovie: 19,
			releaseWeekPosition: -1,
			theaterCountOnRelease: 304,
			theaterCount: 359,
			wantToSeeCount: 296,
			fanCount: 54,
			userRatingCount: 192,
			userReviewCount: 29,
			userRating: 3,
			pressReviewCount: 11,
			pressRating: 1.9
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571098&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=251981.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Arthur Mazet, Karidja Touré, Thomas VDB, Alexandre Achdjian, Noémie Chicheportiche',
			directors: 'Alexandre Castagnetti'
		},
		runtime: 5460,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img3.acsta.net/pictures/17/04/26/17/11/362549.jpg',
		media: 'Affiche',
		synopsis:
			'Benjamin hérite injustement de deux heures de colle un samedi. Il réalise une fois sur place que Leila, la fille dont il est secrètement amoureux, fait partie des collés ce jour-là. Et mieux encore : elle vient s’asseoir à côté de lui car il est le seul à avoir son livre de maths ! Alors qu’il va aux toilettes se rafraîchir les idées, lorsqu’il en revient, il se retrouve projeté comme par magie au moment où Leila vient s’asseoir à côté de lui !Benjamin est bloqué dans une boucle temporelle : s’il s’éloigne de Leila plus de trois minutes, il est renvoyé au début de la colle ! Et tout ça parce que le génie de l’application Akinator a exaucé son vœu de la veille : « Je voudrais que Leila et moi on soit ensemble »…Coller aux basques de Leila jusqu’à la sortie, obtenir un baiser de gré ou de force, Benjamin va tout tenter pour sortir de ce piège, en se coltinant un pion tortionnaire, un gardien libidineux, une infirmière un peu spéciale et la pire bande de cancres du lycée….',
		title: 'Mise à jour sur Google play',
		originalTitle: 'La Colle',
		code: 251981,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571098' },
		language: [{ _id: { $oid: '59adc7caa7c9d1abcf5d3c3d' } }],
		release: {
			releaseDate: { $date: '2017-07-19T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [4],
		genreList: ['Comédie'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7cba7c9d1abcf5d3c3e' },
		statistics: {
			variationTopMovie: -3,
			rankTopMovie: 14,
			releaseWeekPosition: -2,
			theaterCountOnRelease: 316,
			theaterCount: 377,
			wantToSeeCount: 2055,
			fanCount: 251,
			userRatingCount: 1070,
			userReviewCount: 161,
			userRating: 2.9,
			pressReviewCount: 16,
			pressRating: 2.6
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19568493&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=234164.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Emma Watson, Tom Hanks, John Boyega, Karen Gillan, Ellar Coltrane',
			directors: 'James Ponsoldt'
		},
		runtime: 6600,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img1.acsta.net/pictures/17/06/02/15/21/575672.jpg',
		media: 'Affiche',
		synopsis:
			"Les Etats-Unis, dans un futur proche. Mae est engagée chez The Circle, le groupe de nouvelles technologies et de médias sociaux le plus puissant au monde. Pour elle, c'est une opportunité en or ! Tandis qu'elle prend de plus en plus de responsabilités, le fondateur de l'entreprise, Eamon Bailey, l'encourage à participer à une expérience révolutionnaire qui bouscule les limites de la vie privée, de l'éthique et des libertés individuelles. Désormais, les choix que fait Mae dans le cadre de cette expérience impactent l'avenir de ses amis, de ses proches et de l'humanité tout entière…",
		title: 'Mise à jour sur Google play',
		originalTitle: 'The Circle',
		code: 234164,
		trailer: { href: 'http://www.allocine.fr/blogvision/19568493' },
		language: [{ _id: { $oid: '59adc7cba7c9d1abcf5d3c3f' } }],
		release: {
			releaseDate: { $date: '2017-07-12T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [2, 5, 7],
		genreList: ['Thriller', 'Drame', 'Science fiction'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7cca7c9d1abcf5d3c40' },
		statistics: {
			variationTopMovie: -12,
			rankTopMovie: 62,
			releaseWeekPosition: -4,
			theaterCountOnRelease: 126,
			theaterCount: 388,
			wantToSeeCount: 526,
			fanCount: 162,
			userRatingCount: 546,
			userReviewCount: 86,
			userRating: 4.2,
			pressReviewCount: 28,
			pressRating: 4.2
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571435&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=245617.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: { directors: 'Agnès Varda, JR' },
		runtime: 5340,
		statusList: 'nowshowing',
		productionYear: 2016,
		posterPath: 'http://fr.web.img5.acsta.net/pictures/17/06/08/11/47/366308.jpg',
		media: 'Affiche',
		synopsis:
			'\r\nAgnès Varda et JR ont des points communs : passion et questionnement sur les images en général et plus précisément sur les lieux et les dispositifs pour les montrer, les partager, les exposer.Agnès a choisi le cinéma.JR a choisi de créer des galeries de photographies en plein air.Quand Agnès et JR se sont rencontrés en 2015, ils ont aussitôt eu envie de travailler ensemble, tourner un film en France, loin des villes, en voyage avec le camion photographique (et magique) de JR. Hasard des rencontres ou projets préparés, ils sont allés vers les autres, les ont écoutés, photographiés et parfois affichés.Le film raconte aussi l’histoire de leur amitié qui a grandi au cours du tournage, entre surprises et taquineries, en se riant des différences.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Visages Villages',
		code: 245617,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571435' },
		language: [{ _id: { $oid: '59adc7cca7c9d1abcf5d3c41' } }],
		release: {
			releaseDate: { $date: '2017-06-28T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [9],
		genreList: ['Documentaire'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7cda7c9d1abcf5d3c42' },
		statistics: {
			variationTopMovie: -15,
			rankTopMovie: 79,
			releaseWeekPosition: -3,
			theaterCountOnRelease: 325,
			theaterCount: 415,
			wantToSeeCount: 479,
			fanCount: 81,
			userRatingCount: 479,
			userReviewCount: 70,
			userRating: 3.9,
			pressReviewCount: 24,
			pressRating: 3.2
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571441&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=249655.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Roschdy Zem, Emilie Dequenne, Michaël Abiteboul, Guillaume Labbé, Grégoire Isvarine',
			directors: 'Pierre Jolivet'
		},
		runtime: 5400,
		statusList: 'nowshowing',
		productionYear: 2016,
		posterPath: 'http://fr.web.img6.acsta.net/pictures/17/05/24/10/39/310176.jpg',
		media: 'Affiche',
		synopsis:
			'Philippe, 45 ans, dirige une caserne dans le Sud de la France. L’été est chaud. Les feux partent de partout, criminels ou pas. Arrive Bénédicte, adjudant-chef, même grade que Xavier, un quadra aguerri : tension sur le terrain, tensions aussi au sein de la brigade... Plongée dans la vie de ces grands héros : courageux face au feu, mais aussi en 1ère ligne de notre quotidien.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Les Hommes du feu',
		code: 249655,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571441' },
		language: [{ _id: { $oid: '59adc7cda7c9d1abcf5d3c43' } }],
		release: {
			releaseDate: { $date: '2017-07-05T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [2],
		genreList: ['Drame'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7cea7c9d1abcf5d3c44' },
		statistics: {
			variationTopMovie: -6,
			rankTopMovie: 36,
			releaseWeekPosition: -5,
			theaterCountOnRelease: 524,
			theaterCount: 263,
			wantToSeeCount: 2038,
			fanCount: 725,
			userRatingCount: 2128,
			userReviewCount: 205,
			userRating: 3.4,
			pressReviewCount: 15,
			pressRating: 1.8
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19569414&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=89997.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Dwayne Johnson, Zac Efron, Alexandra Daddario, Priyanka Chopra, Kelly Rohrbach',
			directors: 'Seth Gordon'
		},
		runtime: 7020,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img1.acsta.net/pictures/17/08/04/23/23/176634.jpg',
		media: 'Affiche',
		synopsis:
			"Le légendaire sauveteur Mitch Buchannon  est contraint de s’associer à une nouvelle recrue, Matt Brody, aussi ambitieux que tête brûlée ! Ensemble, ils vont tenter de déjouer un complot criminel qui menace l'avenir de la Baie…",
		title: 'Mise à jour sur Google play',
		originalTitle: 'Baywatch - Alerte à Malibu',
		code: 89997,
		trailer: { href: 'http://www.allocine.fr/blogvision/19569414' },
		language: [{ _id: { $oid: '59adc7cea7c9d1abcf5d3c45' } }],
		release: {
			releaseDate: { $date: '2017-06-21T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [1, 4],
		genreList: ['Comédie', 'Action'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7cfa7c9d1abcf5d3c46' },
		statistics: {
			variationTopMovie: -14,
			rankTopMovie: 55,
			releaseWeekPosition: -2,
			theaterCountOnRelease: 312,
			theaterCount: 326,
			wantToSeeCount: 316,
			fanCount: 60,
			userRatingCount: 260,
			userReviewCount: 46,
			userRating: 3.3,
			pressReviewCount: 5,
			pressRating: 2.6
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571650&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=254179.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Élodie Fontan, Florent Peyre, Daniel Prévost, Nicolas Bridet, Barbara Cabrita',
			directors: 'Ludovic Bernard'
		},
		runtime: 6000,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img3.acsta.net/pictures/17/05/10/17/31/355020.jpg',
		media: 'Affiche',
		synopsis:
			'Sibylle, jeune Parisienne aux dents longues, entend briller dans ses nouvelles fonctions professionnelles en rachetant une quincaillerie au Pays Basque afin d’y implanter un supermarché. Elle s’imagine avoir « roulé » le vieux propriétaire mais ce dernier est sous curatelle. Sibylle doit donc faire affaire avec Ramon, le neveu, pour récupérer son argent et signer au plus vite. Sinon, c’est le siège éjectable assuré. Elle va rapidement s’apercevoir que les basques n’ont pas l’intention de se laisser faire par une parisienne, si jolie soit-elle.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Mission Pays Basque',
		code: 254179,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571650' },
		language: [{ _id: { $oid: '59adc7cfa7c9d1abcf5d3c47' } }],
		release: {
			releaseDate: { $date: '2017-07-12T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [4],
		genreList: ['Comédie'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7d0a7c9d1abcf5d3c48' },
		statistics: {
			variationTopMovie: -25,
			rankTopMovie: 114,
			releaseWeekPosition: -4,
			theaterCountOnRelease: 134,
			theaterCount: 262,
			wantToSeeCount: 289,
			fanCount: 69,
			userRatingCount: 464,
			userReviewCount: 93,
			userRating: 3.1,
			pressReviewCount: 13,
			pressRating: 3.1
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571846&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=239790.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Jean-Pierre Bacri, Arthur Dupont, Olivier Gourmet, Féodor Atkine, Marie Berto',
			directors: 'Gérard Pautonnier'
		},
		runtime: 5160,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img6.acsta.net/pictures/17/04/07/16/24/520830.jpg',
		media: 'Affiche',
		synopsis:
			'Dans une petite ville perdue au milieu de nulle part, le commerce de pompes funèbres d’Edmond Zweck bat de l’aile. L’entreprise ne compte plus que deux employés : Georges, le bras droit de Zweck, et Eddy, un jeune homme encore novice dans le métier. Un beau matin, pourtant, un mort pointe son nez. L’espoir renaît. Georges et Eddy sont chargés de mener le défunt jusqu’à sa dernière demeure. Mais, à la recherche du cimetière qui s’avère introuvable, le convoi funéraire s’égare et le voyage tourne au fiasco.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Grand froid',
		code: 239790,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571846' },
		language: [{ _id: { $oid: '59adc7d0a7c9d1abcf5d3c49' } }],
		release: {
			releaseDate: { $date: '2017-06-28T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [2, 4],
		genreList: ['Comédie dramatique'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7d1a7c9d1abcf5d3c4a' },
		statistics: {
			variationTopMovie: -1,
			rankTopMovie: 6,
			releaseWeekPosition: 0,
			theaterCount: 200,
			wantToSeeCount: 543,
			fanCount: 36,
			userRatingCount: 103,
			userReviewCount: 13,
			userRating: 2.1,
			pressReviewCount: 0
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19569498&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=249201.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Joey King, Ryan Phillippe, Ki Hong Lee, Shannon Purser, Sydney Park',
			directors: 'John R. Leonetti'
		},
		runtime: 5460,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img5.acsta.net/pictures/17/06/20/09/56/012529.jpg',
		media: 'Affiche',
		synopsis:
			"Pas facile de survivre à l'enfer du lycée, Claire Shannon et ses copines en savent quelque chose. Du coup, quand son père lui offre une ancienne boîte à musique dont les inscriptions promettent d'exaucer tous ses vœux, Claire tente sa chance. Et ça marche ! Argent, popularité, petit ami, tout semble parfait. Mais le rêve a un prix : au fur et à mesure de ses souhaits, des personnes de son entourage meurent dans des conditions particulièrement atroces. Claire le sait : elle doit se débarrasser de la boîte pour sauver sa vie et celle de ses proches avant de faire le voeu de trop.",
		title: 'Mise à jour sur Google play',
		originalTitle: 'I Wish - Faites un vœu',
		code: 249201,
		trailer: { href: 'http://www.allocine.fr/blogvision/19569498' },
		language: [{ _id: { $oid: '59adc7d1a7c9d1abcf5d3c4b' } }],
		release: {
			releaseDate: { $date: '2017-07-26T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [5, 6, 7],
		genreList: ['Epouvante-horreur', 'Thriller', 'Fantastique'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7d2a7c9d1abcf5d3c4c' },
		statistics: {
			variationTopMovie: -5,
			rankTopMovie: 32,
			releaseWeekPosition: -3,
			theaterCountOnRelease: 102,
			theaterCount: 306,
			wantToSeeCount: 577,
			fanCount: 133,
			userRatingCount: 692,
			userReviewCount: 84,
			userRating: 4,
			pressReviewCount: 22,
			pressRating: 3.9
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19572208&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=252157.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Fares Fares, Mari Malek, Yasser Ali Maher, Slimane Dazi, Hania Amar',
			directors: 'Tarik Saleh'
		},
		runtime: 6600,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img1.acsta.net/pictures/17/07/25/22/46/411441.jpg',
		media: 'Affiche',
		synopsis:
			'Le Caire, janvier 2011, quelques jours avant le début de la révolution. Une jeune chanteuse est assassinée dans une chambre d’un des grands hôtels de la ville. Noureddine, inspecteur revêche chargé de l’enquête, réalise au fil de ses investigations que les coupables pourraient bien être liés à la garde rapprochée du président Moubarak.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Le Caire Confidentiel',
		code: 252157,
		trailer: { href: 'http://www.allocine.fr/blogvision/19572208' },
		language: [{ _id: { $oid: '59adc7d2a7c9d1abcf5d3c4d' } }],
		release: {
			releaseDate: { $date: '2017-07-05T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [5],
		genreList: ['Policier', 'Thriller'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7d3a7c9d1abcf5d3c4e' },
		statistics: {
			variationTopMovie: -30,
			rankTopMovie: 125,
			releaseWeekPosition: -4,
			theaterCountOnRelease: 342,
			theaterCount: 207,
			wantToSeeCount: 411,
			fanCount: 91,
			userRatingCount: 388,
			userReviewCount: 51,
			userRating: 2.4,
			pressReviewCount: 5,
			pressRating: 2
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19569752&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=241156.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Isabelle Nanty, Pierre-François Martin-Laval, Thomas Solivérès, Manon Valentin, Leslie Medina',
			directors: 'Frédéric Forestier'
		},
		runtime: 5820,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img6.acsta.net/pictures/17/04/13/09/43/259464.jpg',
		media: 'Affiche',
		synopsis:
			'Vincent, 18 ans, se fait larguer par Elina. C’est son premier amour, c’est la fin du monde ! Ses parents décident donc de prendre les choses en main et vont tout tenter pour lui faire oublier cette fille : il devra les suivre dans une cure de désintoxication amoureuse dont ils vont imaginer le programme…',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Mon poussin',
		code: 241156,
		trailer: { href: 'http://www.allocine.fr/blogvision/19569752' },
		language: [{ _id: { $oid: '59adc7d3a7c9d1abcf5d3c4f' } }],
		release: {
			releaseDate: { $date: '2017-06-28T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [4],
		genreList: ['Comédie'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7d4a7c9d1abcf5d3c50' },
		statistics: {
			variationTopMovie: -7,
			rankTopMovie: 56,
			releaseWeekPosition: -9,
			theaterCountOnRelease: 721,
			theaterCount: 154,
			wantToSeeCount: 13861,
			fanCount: 3953,
			commentCount: 3284,
			userRatingCount: 6730,
			userReviewCount: 628,
			userRating: 3.8,
			pressReviewCount: 18,
			pressRating: 2.9
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19565364&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=189525.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Johnny Depp, Javier Bardem, Brenton Thwaites, Kaya Scodelario, Orlando Bloom',
			directors: 'Joachim Rønning, Espen Sandberg'
		},
		runtime: 7740,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img4.acsta.net/pictures/17/05/15/14/09/388080.jpg',
		media: 'Affiche',
		synopsis:
			'Les temps sont durs pour le Capitaine Jack, et le destin semble même vouloir s’acharner lorsqu’un redoutable équipage fantôme mené par son vieil ennemi, le terrifiant Capitaine Salazar, s’échappe du Triangle du Diable pour anéantir tous les flibustiers écumant les flots… Sparrow compris ! Le seul espoir de survie du Capitaine Jack est de retrouver le légendaire Trident de Poséidon, qui donne à celui qui le détient tout pouvoir sur les mers et les océans. Mais pour cela, il doit forger une alliance précaire avec Carina Smyth, une astronome aussi belle que brillante, et Henry, un jeune marin de la Royal Navy au caractère bien trempé. À la barre du Dying Gull, un minable petit rafiot, Sparrow va tout entreprendre pour contrer ses revers de fortune, mais aussi sauver sa vie face au plus implacable ennemi qu’il ait jamais eu à affronter…',
		title: 'Mise à jour sur Google play',
		originalTitle: 'Pirates des Caraïbes : la Vengeance de Salazar',
		code: 189525,
		trailer: { href: 'http://www.allocine.fr/blogvision/19565364' },
		language: [{ _id: { $oid: '59adc7d4a7c9d1abcf5d3c51' } }],
		release: {
			releaseDate: { $date: '2017-05-24T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [1, 7],
		genreList: ['Aventure', 'Fantastique', 'Action'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7d5a7c9d1abcf5d3c52' },
		statistics: {
			variationTopMovie: -6,
			rankTopMovie: 39,
			releaseWeekPosition: -7,
			theaterCountOnRelease: 601,
			theaterCount: 147,
			wantToSeeCount: 5781,
			fanCount: 2709,
			commentCount: 76,
			userRatingCount: 7337,
			userReviewCount: 680,
			userRating: 4.1,
			pressReviewCount: 18,
			pressRating: 3.1
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571367&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=173720.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: 'Gal Gadot, Chris Pine, Connie Nielsen, Robin Wright, Danny Huston',
			directors: 'Patty Jenkins'
		},
		runtime: 8460,
		statusList: 'nowshowing',
		productionYear: 2017,
		posterPath: 'http://fr.web.img4.acsta.net/pictures/17/06/01/08/58/448602.jpg',
		media: 'Affiche',
		synopsis:
			"C'était avant qu'elle ne devienne Wonder Woman, à l'époque où elle était encore Diana, princesse des Amazones et combattante invincible. Un jour, un pilote américain s'écrase sur l'île paradisiaque où elle vit, à l'abri des fracas du monde. Lorsqu'il lui raconte qu'une guerre terrible fait rage à l'autre bout de la planète, Diana quitte son havre de paix, convaincue qu'elle doit enrayer la menace. En s'alliant aux hommes dans un combat destiné à mettre fin à la guerre, Diana découvrira toute l'étendue de ses pouvoirs… et son véritable destin.",
		title: 'Mise à jour sur Google play',
		originalTitle: 'Wonder Woman',
		code: 173720,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571367' },
		language: [{ _id: { $oid: '59adc7d5a7c9d1abcf5d3c53' } }],
		release: {
			releaseDate: { $date: '2017-06-07T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [1, 7],
		genreList: ['Action', 'Aventure', 'Fantastique'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	},
	{
		_id: { $oid: '59adc7d6a7c9d1abcf5d3c54' },
		statistics: {
			variationTopMovie: -13,
			rankTopMovie: 64,
			releaseWeekPosition: -2,
			theaterCountOnRelease: 91,
			theaterCount: 333,
			wantToSeeCount: 331,
			fanCount: 32,
			commentCount: 1,
			userRatingCount: 128,
			userReviewCount: 27,
			userRating: 3.4,
			pressReviewCount: 18,
			pressRating: 2.4
		},
		hasShowtime: 1,
		trailerEmbed:
			"<div id='ACEmbed'><iframe src='http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19571670&amp;isApp=true' style='width:480px; height:270px' frameborder='0' allowfullscreen='true'></iframe><br /><a href=\"http://www.allocine.fr/film/fichefilm_gen_cfilm=217918.html\" target=\"_blank\">Mise à jour sur Google play</a></div>",
		castingShort: {
			actors: "Emir Kusturica, Monica Bellucci, Sloboda Micalovic, Predrag 'Miki' Manojlovic, Davor Janjic",
			directors: 'Emir Kusturica'
		},
		runtime: 7500,
		statusList: 'nowshowing',
		productionYear: 2016,
		posterPath: 'http://fr.web.img5.acsta.net/pictures/17/04/20/17/49/394277.jpg',
		media: 'Affiche',
		synopsis:
			'Sous le feu des balles, Kosta, un laitier, traverse la ligne de front chaque jour au péril de sa vie pour livrer ses précieux vivres aux soldats. Bientôt, cette routine est bouleversée par l’arrivée de Nevesta, une belle réfugiée italienne. Entre eux débute une histoire d’amour passionnée et interdite qui les entraînera dans une série d’aventures rocambolesques.',
		title: 'Mise à jour sur Google play',
		originalTitle: 'On the Milky Road',
		code: 217918,
		trailer: { href: 'http://www.allocine.fr/blogvision/19571670' },
		language: [{ _id: { $oid: '59adc7d6a7c9d1abcf5d3c55' } }],
		release: {
			releaseDate: { $date: '2017-07-12T00:00:00.000+0000' },
			releaseState: { value: 'Sortie en salle', code: 3004 },
			country: { code: 5001 }
		},
		castMember: [],
		genreListSimon: [2],
		genreList: ['Drame'],
		nationality: [],
		movieType: { value: 'Long-métrage', code: 4002 },
		__v: 0
	}
];

class Movies extends Component {
	renderCasting(movie) {
		return (
			<p>
				Acteurs: {movie.castingShort['actors']} <br />
				Réalisateur: {movie.castingShort['directors']}
			</p>
		);
	}

	renderMovies(arr) {
		const resMovies = arr.map((movie, index) => {
			return (
				<div key={index}>
					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{ color: 'white' }}>
						<Poster url={movie.posterPath} />
						<p>
							{movie.originalTitle} -{' '}
							{new Date(movie.release.releaseDate.$date.toString()).toLocaleDateString('fr-FR')}
						</p>
					</div>
				</div>
			);
		});
		return resMovies;
	}

	render() {
		return (
			<div
				className="container-fluid"
				style={{
					marginTop: 55,
					backgroundColor: 'black'
				}}
			>
				<div className="row">
					<div>{this.renderMovies(movies)}</div>;
				</div>
			</div>
		);
	}
}

export default Movies;
