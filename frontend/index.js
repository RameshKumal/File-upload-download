const formUpload = document.querySelector('.upload');
const download = document.querySelector('.download')

// download.addEventListener('click', (e) =>{
//     fetch("http://localhost:8000/download",{
//         method:"GET",
        
//     }).then(res => res.json({data:"success"}))
//     .then(data => {
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data);
//         }
//     });
// })

formUpload.addEventListener('submit', (e)=>{
    e.preventDefault();

    const data = e.target.uploadFile.files[0];
    const formData = new FormData();
    formData.append('upload-data', data);

    fetch("http://localhost:8000/upload",{
        method:"POST",
        body: formData
    }).then(res => res.json({data:"success"}))
    .then(data => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data);
        }
    });
})