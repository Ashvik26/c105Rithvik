Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90

});
camera=document.getElementById("cam");
Webcam.attach(camera);
function capture() {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
});
}
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vThXHLOc2/model.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}
function identify() {
image=document.getElementById("selfie");
classifier.classify(image,got_result);
}
function got_result(error,results) {
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("objectname").innerHTML=results[0].label;
document.getElementById("decimalaccuracy").innerHTML=results[0].confidence.toFixed(3);
}
}