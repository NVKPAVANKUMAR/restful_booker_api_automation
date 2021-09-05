module.exports = {
  spec: ['api/test/*.js'],
  reporter: 'mochawesome',
  'reporter-option': [
    'overwrite=true',
    'reportTitle=RestfulBooker API Tests',
    'showPassed=true',
    'timestamp=default',
    'html=true',
    'json=false',
    'charts=true',
    'recursive=true',
  ],
  timeout: 7000,
};
