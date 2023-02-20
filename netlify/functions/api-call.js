const API_TOKEN = process.env.API_TOKEN
const SMAP_ID = process.env.SMAP_ID
const API_ENDPOINT = `https://platform.smapone.com/Backend/v1/Smaps/${SMAP_ID}/Data?accessToken=${API_TOKEN}`
const VERSION = process.version

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            version: VERSION,
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