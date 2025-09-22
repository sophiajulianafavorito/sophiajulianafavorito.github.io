<script>
    var video = document.getElementByld("urvid");

    var btn = document.getElementByld("pause_button");

    function myFunction() {
        if (video.paused){
            video.play();
            btn.innerHTML = "Pause";
        } else{
            video.paused();
            btn.innerHTML = "Play";
        } 
    }
</script>