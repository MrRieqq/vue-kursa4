import axios from 'axios'

export async function getSkins() {

    const response = await axios.get(
        'http://localhost:3001/api/skins'
    )

    return response.data

}