const screenSize = {
	// media queries in px
	smartphone: '@media only screen and (max-width: 479px)',
	smartphoneLandscape: '@media only screen and (min-width: 480px) and (max-width:767px)',
	tablet: '@media only screen and (min-width: 768px) and (max-width:991px)',
	desktop: '@media only screen and (min-width: 992px)',
	// media queries in em base 16px
	smartphoneEm: '@media only screen and (max-width: 29.9375em)',
	smartphoneLandscapeEm: '@media only screen and (min-width: 30em) and (max-width:47.9375em)',
	tabletEm: '@media only screen and (min-width: 48em) and (max-width:61.9375em)',
	desktopEm: '@media only screen and (min-width: 62em)'
};

const navBarHeight = 80;
/* colors */
const mainColor = '#5bbcb2';
const secondColor = '#FFFFFF';
const goldColor = '#E2970D';
const fourthColor = '#92CFCD';
const fifthColor = '#26766B';
const sixthColor = '#2B4A46';
const heartColor = '#EF807E';
const moveetColor = '#000';
const moveetRed = '#e06666'; //#e06666 => red in use in titles !!!
const moveetRatingGreen = 'rgba(113, 229, 78,0.8)'; //#71e54e => green used in rating
const moveetRatingOrange = 'rgba(244, 125, 66,0.9)'; //#f47d42 => orange used in rating
const moveetRatingYellow = 'rgba(255, 224, 53,0.9)'; //#ffe035 => yellow used in rating

// 'rgb(224, 102, 102)'; red moveet
// webapp colors:
const buttonColor1 = 'black';
const buttonColor2 = 'rgba(100,255,200,0.9)';
const buttonColor3 = 'pink';
const buttonColor4 = 'red';

/* fonts */
const mainFontBold = 'Nunito-Bold';
const mainFont = 'Nunito-Regular';
const mainFontLight = 'Nunito-Light';
const secondFontBold = 'Montserrat-Bold';
const secondFont = 'Montserrat-Regular';
const thirdFont = 'RobotoMono-Regular';
const fourthFont = 'SpaceMono-Regular';
const fifthFont = 'Abel-Regular';

const globalColors = {
	colors: {
		primary: '#4D6DC3',
		secondary: '#27CCC0',
		accent: '#E12773',
		tchatColor: 'ghostwhite',
		backgroundEven: '#ffffff',
		backgroundOdd: 'white'
	}
};
export default {
	screenSize,
	globalColors,
	mainColor,
	secondColor,
	goldColor,
	fourthColor,
	fifthColor,
	sixthColor,
	moveetColor,
	moveetRed,
	moveetRatingGreen,
	moveetRatingOrange,
	moveetRatingYellow,
	heartColor,
	mainFontBold,
	mainFont,
	mainFontLight,
	secondFontBold,
	secondFont,
	thirdFont,
	fourthFont,
	fifthFont,
	navBarHeight,
	buttonColor1,
	buttonColor2,
	buttonColor3,
	buttonColor4
};
