const API_TOKEN = process.env.API_TOKEN
const API_ENDPOINT = 'https://platform.smapone.com/Backend/v1/Smaps/6dc3a428-076f-4fd9-b257-c5cf94a78ed5/Data?accessToken=' + API_TOKEN

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            token: API_TOKEN,
            endpoint: API_ENDPOINT
        })
    }
    // let response
    // try {
    //     response = await fetch(API_ENDPOINT)
    // // Handle error
    // } catch (err) {
    //     return {
    //         statusCode: err.statusCode || 500,
    //         body: JSON.stringify({
    //             error: err.message
    //         })
    //     }
    // }

    // // Handle success
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         data: response
    //     })
    // }
}