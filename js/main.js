var container = ``;
for(i=0; i < 100 ; i++){
    container += `
    <div class="col-md-3 mb-3">
        <div class="result-box">
        <h6><span>Hospital name : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugit..</h6>
        <h6><span>Hospital Number : </span>Lorem, ipsum dolor.</h6>
        <h6><span>Location : </span>Lorem ipsum dolor sit amet. </h6>
        <h6><span>Rate : </span>Lorem</h6>
    </div>
</div>`
}
document.getElementById("demo").innerHTML=container;