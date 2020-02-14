# Meteor template

## Meteor 1.9 installation
`meteor create meteor-template --full`

## [SASS and SCSS](https://github.com/Meteor-Community-Packages/meteor-scss) support and [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/getting-started/introduction/) added
`meteor npm install --save bootstrap jquery popper.js`
Nb : popper V1.16.1 deprecated, V2 exists

SCSS compiler added :
`meteor add fourseven:scss`

`client/main.js` modified `import 'bootstrap';` added

`client/main.scss` added with `@import "../node_modules/bootstrap/scss/bootstrap.scss";`

`client/main.less` deleted

`ui/components/navbar` component added

`ui/layouts/body` modified to include navbar

## [Fontawesome 5.12.1](https://fontawesome.com/) added

`meteor npm install --save @fortawesome/fontawesome-free`

To use fontaweome : `import fontawesome from '@fortawesome/fontawesome-free/js/all.js';`

`ui/components/icon` component added and used in navbar

## Accounts-password and [Meteor roles](https://github.com/Meteor-Community-Packages/meteor-roles)

`meteor add accounts-password`

`meteor add accounts-ui`

`meteor add alanning:roles`

Login button added in navbar component


## Remaining issues

- accounts-ui multilingual support (see if something can be done with accounts-ui-unstyled)
- login button do not fit nicely in Bootstrap navbar
- choose an I18n package without Jquery compatibility problem
- (secondary) bcrypt native implementation to add (check when in prod)


