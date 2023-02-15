exports.handler = async function(event, context) {
    const apiToken = process.env.API_TOKEN

    fetch("/https://platform.smapone.com/Backend/v1/Smaps/6dc3a428-076f-4fd9-b257-c5cf94a78ed5/Data?accessToken=" + apiToken)
    .then((response) => response.json())
    .then((data) => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                event: event,
                context: context
            })
        }
    })
}