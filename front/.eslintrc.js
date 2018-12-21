// {
//   "parser": "babel-eslint",
//   "extends": "airbnb",
//   "rules": {
//       "react/jsx-no-bind": [
//           2,
//           {
//               "allowArrowFunctions": true
//           }
//       ],
//       "no-underscore-dangle": [
//           "error",
//           {
//               "allow": [
//                   "__REDUX_DEVTOOLS_EXTENSION__"
//               ]
//           }
//       ]
//   }
// }


module.exports = {
    extends: "airbnb",
    parser: "babel-eslint",
    globals: {
    localStorage: true,
    window: true
    }
    };