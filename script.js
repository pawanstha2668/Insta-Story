var arr = [
    {
        dp:"https://images.unsplash.com/photo-1645231881968-9c98338ee28d?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1675253290701-a7b7b2c6c9f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

       {dp:"https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1594843310428-7eb6729555e9?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

       {dp:"https://images.unsplash.com/photo-1490092374320-1ca36d69ff6a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1572112686886-5c0b5bc8dacd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

       {dp:"https://images.unsplash.com/photo-1467691965561-60bbe8ad30ab?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1661295612134-6138348c06e6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

];
var stroriyan = document.querySelector("#stroriyan")
var clutter = "";
arr.forEach(function(elem, idx) {
   clutter += ` <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
        </div>`
})
stroriyan.innerHTML=clutter
stroriyan.addEventListener("click",function(dets){
document.querySelector("#full-screen").style.display = "block"
document.querySelector("#full-screen").style.backgroundImage = `url(${ arr[dets.target.id].story})`

setTimeout(function(){
  document.querySelector("#full-screen").style.display = "none" 
},5000)
});
