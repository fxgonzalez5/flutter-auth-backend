const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '9162796066-cqa199snb131u29om2lmjio3hkkb9sqi.apps.googleusercontent.com';

const client = new OAuth2Client();

const validarGoogleIdToken =  async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '9162796066-q4sv02fe3lgmcq59bmn0s6e1lfrka17g.apps.googleusercontent.com'
            ],
            // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
    
        const payload = ticket.getPayload();
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }
    } catch (error) {
        return null;
    }

    
}

module.exports = {
    validarGoogleIdToken
}