exports.handler = async function(event, context) {
    // your server-side functionality
    console.log({event})
    console.log({context})
    return {
        statusCode: 200,
        body: JSON.stringify({
            event: event,
            context: context
        }),
      };
};