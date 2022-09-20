const body = document.body;
let inputFile, imgFoto ;

const cloudPreset = 'oudl6k3h';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dpsihj54h/upload'

const crearInputFileHtml = () => {

    const html = `
        <h1 class="mt-5">Subir Archivo</h1>
        <hr>

        <label for="">Selecciona una fotografia</label>
        <br>
        <input type="file" accept="image/png, image/jpeg">
        <br>
        <img src="" alt="" id="foto" class="img-thumbnail">

    
    `
    const div = document.createElement('div')
    div.innerHTML = html;

    body.appendChild(div)

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('img');
}


const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append("file", archivoSubir);

    try {
        const resp = await fetch(cloudUrl,
                {
                    method: 'POST',
                    body: formData,
                })

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
    
}

const eventos = () => {
    inputFile.addEventListener('change', (e) =>{
        const file = e.target.files[0];

        console.log(file);
        subirImagen(file)
        .then((url) => {
            imgFoto.src = url
        })

    })

}
export const init = () => {
    crearInputFileHtml();
    eventos();
}