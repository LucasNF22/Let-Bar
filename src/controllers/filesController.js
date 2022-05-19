{
    guardarArchivo: (req, nombreImagen, destinoImagen, dataImagen)=>{
        fs.writeFileSync(destinoImagen + nombreImagen, dataImagen);
    }
}