
nameFunction = () => {
    document.getElementById('jame').innerHTML = 'Sudarat Suntipitak'
    document.getElementById('jame').style.fontSize = "35px"
}
pigtureFunction1 = () => {
    document.getElementById('myImage').src = 'Photo/pig_3.jpg'
    document.getElementById('myImage').style = "width: 550px"
    // document.getElementById('myImage').style = "height: 550px"
}
pigtureFunction2 = () => {
    document.getElementById('myImage').src = 'photo/pig_1.jpg'
    document.getElementById('myImage').style = "width: 800px"
}


<div className='center'>
    <p id="jame" style="font-size: 28px;">Differentlife</p>
    <button type="button" onclick="document.getElementById('jame').innerHTML = 'Sudarat Suntipitak'">Your Name</button>
    <button onclick="pigtureFunction1()">I like</button>
    <button onclick="pigtureFunction2()">I'm Very like</button>
    <br /> <br />
    <img id="myImage" style="height: ;" />
    <br />
</div>
