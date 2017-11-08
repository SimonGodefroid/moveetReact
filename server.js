const express = require('express');
const path = require('path');
const logger = require('morgan');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
const React = require('react');
const ReactDOM = require('react-dom/server');
const StyleSheetServer = require('aphrodite').StyleSheetServer;
const Router = require('react-router');
const Provider = require('react-redux').Provider;
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const request = require('request');
const webpack = require('webpack');
const config = require('./webpack.config');
// require('dotenv').config();
// // Load environment variables from .env file
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// ES6 Transpiler
require('babel-core/register');
require('babel-polyfill');

// Models
const User = require('./models/User');
//

// Controllers
const userController = require('./controllers/user');
const contactController = require('./controllers/contact');

// React and Server-Side Rendering
const routes = require('./app/routes');
const configureStore = require('./app/store/configureStore').default;

var app = express();

var compiler = webpack(config);
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', function() {
	console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
	process.exit(1);
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
	req.isAuthenticated = function() {
		var token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
		try {
			return jwt.verify(token, process.env.TOKEN_SECRET);
		} catch (err) {
			return false;
		}
	};

	if (req.isAuthenticated()) {
		var payload = req.isAuthenticated();
		User.findById(payload.sub, function(err, user) {
			req.user = user;
			next();
		});
	} else {
		next();
	}
});

if (app.get('env') === 'development') {
	app.use(
		require('webpack-dev-middleware')(compiler, {
			noInfo: true,
			publicPath: config.output.publicPath
		})
	);
	app.use(
		require('webpack-hot-middleware')(compiler, {
			log: console.log,
			path: '/__webpack_hmr',
			heartbeat: 10 * 1000
		})
	);
}

// app.post('/contact', contactController.contactPost);
// app.put('/account', userController.ensureAuthenticated, userController.accountPut);
// app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
// app.post('/signup', userController.signupPost);
// app.post('/login', userController.loginPost);
// app.post('/forgot', userController.forgotPost);
// app.post('/reset/:token', userController.resetPost);
// app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
// app.post('/auth/facebook', userController.authFacebook);
// app.get('/auth/facebook/callback', userController.authFacebookCallback);
// app.post('/auth/google', userController.authGoogle);
// app.get('/auth/google/callback', userController.authGoogleCallback);

// React server rendering
app.use(function(req, res) {
	var initialState = {
		auth: {
			token: req.cookies.token,
			user: req.user
			// || JSON.parse(req.cookies.user)
		},
		messages: {}
	};
	var store = configureStore(initialState);
	Router.match({ routes: routes.default(store), location: req.url }, function(err, redirectLocation, renderProps) {
		if (err) {
			res.status(500).send(err.message);
		} else if (redirectLocation) {
			res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {
			var { html, css } = StyleSheetServer.renderStatic(() => {
				return ReactDOM.renderToString(
					React.createElement(
						Provider,
						{ store: store },
						React.createElement(Router.RouterContext, renderProps)
					)
				);
			});
			// var html = ReactDOM.renderToString(
			// 	React.createElement(Provider, { store: store }, React.createElement(Router.RouterContext, renderProps))
			// );

			// script.
			//- console.log('caca css',css)
			//- StyleSheet.rehydrate(JSON.stringify(css.renderedClassNames));
			//- ReactDOM.render(document.getElementsById('root'));
			res.render('layout', {
				html: html,
				// css: css,
				initialState: store.getState()
			});
		} else {
			res.sendStatus(404);
		}
	});
});

// Production error handler
if (app.get('env') === 'production') {
	app.use(function(err, req, res, next) {
		console.error(err.stack);
		res.sendStatus(err.status || 500);
	});
}

// server log
app.listen(app.get('port'), function() {
	console.log(
		'%s App is running at http://localhost:%d in %s mode',
		chalk.green('✓'),
		app.get('port'),
		app.get('env')
	);
});
// end of server log
module.exports = app;
