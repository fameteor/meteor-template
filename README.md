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

## Accounts-password and [Meteor roles V3](https://github.com/Meteor-Community-Packages/meteor-roles)

`meteor add accounts-password`

`meteor add accounts-ui`

`meteor add alanning:roles`

Login button added in navbar component

Roles `DEV` and "ADMIN" added in `startup/both/commonParms.js`

`startup/server/mongoInit` function added to initialise from scratch the mongo db.

`ui/components/navbar` modified to display "dev" menu only if "DEV" rôle

## [Simple schema V1.3.3](https://github.com/aldeed/simple-schema-js)

`meteor npm install --save simpl-schema`


## Remaining issues

- TAP:i18N installation problem due to meteor 1.9 Jquery ^3.4.1 version (installed with NPM since 1.8)
- accounts-ui multilingual support (see if something can be done with accounts-ui-unstyled)
- login button do not fit nicely in Bootstrap navbar
- choose an I18n package without Jquery compatibility problem
- git version management to add
- (secondary) bcrypt native implementation to add (check when in prod)
- add linter
- manage permission and rôles
- see how to replace Toastr by Bootstrap 4 Toasts
- Meteor user status to be added
- simpl schema and autoform internationalosation to be done
- installer et tester : (https://github.com/GaetanRouzies/bootstrap-4-modal)


