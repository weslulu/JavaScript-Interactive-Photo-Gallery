// homeWork :

function upDate(previewPic) {

    console.log('upDate function triggered');
    console.log('previewPic.alt: ', previewPic.alt)
    console.log('previewPic.src: ', previewPic.src)

    document.getElementById('bigimage').innerHTML = previewPic.alt;

    document.getElementById('bigimage').style.backgroundImage = `url(${previewPic.src})`;

}

function unDo() {
    console.log('undo function triggered');

    document.getElementById('bigimage').innerHTML = "Hover over an image below to display here."

    document.getElementById('bigimage').style.backgroundImage = 'url("")';
    
}


  


