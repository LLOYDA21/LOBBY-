window.onload = function () {

    window.update = function () {

        /* TEAM NAMES */
        const name1 = document.getElementById("nameInput1").value;
        const name2 = document.getElementById("nameInput2").value;

        document.getElementById("name1").textContent =
            name1 !== "" ? name1.toUpperCase() : "TEAM BLUE";

        document.getElementById("name2").textContent =
            name2 !== "" ? name2.toUpperCase() : "TEAM RED";

        /* TEAM LOGOS */
        const l1 = document.getElementById("logoInput1").files[0];
        const l2 = document.getElementById("logoInput2").files[0];

        if (l1) document.getElementById("logo1").src = URL.createObjectURL(l1);
        if (l2) document.getElementById("logo2").src = URL.createObjectURL(l2);

        /* SCORE */
        let s1 = parseInt(document.getElementById("scoreInput1").value);
        let s2 = parseInt(document.getElementById("scoreInput2").value);

        if (isNaN(s1)) s1 = 0;
        if (isNaN(s2)) s2 = 0;

        document.getElementById("score1").textContent = s1;
        document.getElementById("score2").textContent = s2;

        /* BO3 WINNER HIGHLIGHT */
        if (s1 >= 2) {
            document.getElementById("score1").style.color = "gold";
            document.getElementById("score2").style.color = "white";
        } 
        else if (s2 >= 2) {
            document.getElementById("score2").style.color = "gold";
            document.getElementById("score1").style.color = "white";
        } 
        else {
            document.getElementById("score1").style.color = "white";
            document.getElementById("score2").style.color = "white";
        }

        /* 🎮 GAME NUMBER (MANUAL 1–5) */
        let gameValue = parseInt(document.getElementById("gameInput").value);

        if (gameValue >= 1 && gameValue <= 5) {
            document.getElementById("gameLabel").textContent = "GAME " + gameValue;
        }
    };

    /* PARTICLES */
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            ctx.fillStyle = "orange";
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });

        requestAnimationFrame(animate);
    }

    animate();
};  