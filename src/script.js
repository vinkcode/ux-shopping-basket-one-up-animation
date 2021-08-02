const config = {
    duration: 1 //seconds
}

document.querySelectorAll(".one-up").forEach(item => {
    item.addEventListener("change", e => {
        console.log(e.target.value);

        var popUp = document.querySelector(".one-up::before");

        var popUpStyle = document.createElement("style");
        popUpStyle.appendChild(document.createTextNode(`
        ${'.' + 'one-up::before'} {
            font-weight: bold;
            content: "${e.target.value}";
            position: absolute;
            margin-left: 0px;
        }`));
        document.querySelector(".one-up").appendChild(popUpStyle);


        setTimeout(() => {
            popUpStyle.appendChild(document.createTextNode(`
            ${'.' + 'one-up::before'} {
                margin-top: -100px;
                margin-left: 100px;
                transform: scale(5);
                opacity: 0;
                transition-duration: ${config.duration}s;
            }`));
        });

        setTimeout(() => {
            function removeFromDOM(className) {
                document.body.querySelectorAll("." + className).forEach(n => n.remove());
            }
            removeFromDOM("one-up style");
        }, config.duration * 1000);
    })
})