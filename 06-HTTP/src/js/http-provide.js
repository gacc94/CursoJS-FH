const jokeUrl = 'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2'

const obtenerChiste = async() => {

    try {
        
        const resp = await fetch(jokeUrl);
    
        if(!resp.ok) throw ('No se pudo realixar la peticion')
    
        const {icon_url, id, value} = await resp.json();
    
        return {
            icon_url,
            id,
            value,
        }

    } catch (error) {

        throw error;
        
    }


}

const obtnerUsuarios = async() => {

    const resp = await fetch( urlUsuarios);
    const {data:usuarios } = await resp.json();

    return usuarios;
}


export{
    obtenerChiste,
    obtnerUsuarios,
}