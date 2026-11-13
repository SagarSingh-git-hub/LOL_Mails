exports.handler = async function (event, context) {
  // Extract endpoint after /request/ or /.netlify/functions/request/
  let endpoint = event.path
    .replace(/^\/\.netlify\/functions\/request\/?/, '')
    .replace(/^\/request\/?/, '');

  const apiKey = event.headers['x-rapidapi-key'] || process.env.RAPIDAPI_KEY;
  const apiHost = process.env.RAPIDAPI_HOST || 'privatix-temp-mail-v1.p.rapidapi.com';

  const queryString = event.rawQuery ? `?${event.rawQuery}` : '';
  const targetUrl = `https://${apiHost}/request/${endpoint}${queryString}`;

  try {
    const headers = {
      'x-rapidapi-host': apiHost,
      'x-rapidapi-key': apiKey
    };

    if (event.headers['content-type']) {
      headers['Content-Type'] = event.headers['content-type'];
    }

    const response = await fetch(targetUrl, {
      method: event.httpMethod,
      headers: headers,
      body: ['POST', 'PUT', 'PATCH'].includes(event.httpMethod) ? event.body : undefined
    });

    const data = await response.text();

    return {
      statusCode: response.status,
      headers: {
        'Content-Type': response.headers.get('content-type') || 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, x-rapidapi-key, x-rapidapi-host',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      },
      body: data
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};

