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


