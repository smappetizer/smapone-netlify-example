const API_TOKEN = process.env.API_TOKEN
const SMAP_ID = process.env.SMAP_ID
const API_ENDPOINT = `https://platform.smapone.com/Backend/v1/Smaps/${SMAP_ID}/Data?accessToken=${API_TOKEN}`
const VERSION = process.version

exports.handler = async (event, context) => {
    let response
    let json
    try {
        response = await fetch(API_ENDPOINT)
        json = response.json()
        console.log(json)

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
    console.log("Nochmal response", {response})
    return {
        statusCode: 200,
        body: JSON.stringify({
            data: json,
            endpoint: API_ENDPOINT,
            version: VERSION
        })
    }
}