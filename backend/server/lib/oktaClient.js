import okta from '@okta/okta-sdk-nodejs';

// Note: a new orgUrl and token must be obtained as these will no longer be valid
// Use the following guide: https://developer.okta.com/blog/2018/02/06/build-user-registration-with-node-react-and-okta
const client = new okta.Client({
    orgUrl: 'https://dev-5855862.okta.com',
    token: '00gGO5Y_QKiKPzRqVJrvKLpcUYCNNisPQU3Mr2Vo1a'
});

export default client;