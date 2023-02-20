const API_TOKEN = process.env.API_TOKEN
const SMAP_ID = process.env.SMAP_ID

const API_ENDPOINT = `https://platform.smapone.com/Backend/v1/Smaps/${SMAP_ID}/Data?accessToken=${API_TOKEN}`

exports.handler = async (event, context) => {
    let response, json
    try {
        response = await fetch(API_ENDPOINT)
        json = await response.json()

    // Handle error
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({
                error: err.message
            })
        }
    }

    // Handle success
    return {
        statusCode: 200,
        body: JSON.stringify({
            data: json
        })
    }
}