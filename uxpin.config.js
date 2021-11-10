module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.jsx',
          'src/components/Checkbox/Checkbox.jsx',
          'src/components/NotificationMessage/NotificationMessage.jsx',
          'src/components/RatingStars/RatingStars.jsx',
          'src/components/Switch/Switch.jsx',
          'src/components/LoadingSpinner/LoadingSpinner.jsx',
          'src/components/Icon/Icon.jsx',
          'src/components/DatePicker/DatePicker.jsx',
          'src/components/Tag/Tag.jsx',
          'src/components/TextField/TextField.jsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'T-Systems'
};
