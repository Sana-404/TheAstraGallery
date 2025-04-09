const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random()
    });
}

let shootingStars = [];
function createShootingStar() {
    shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 4 + 2
    });
    setTimeout(createShootingStar, Math.random() * 3000 + 1000);
}
createShootingStar();

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    }
    for (let s of shootingStars) {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.length, s.y + s.length / 2);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
        s.x += s.speed;
        s.y += s.speed / 2;
        if (s.x > canvas.width || s.y > canvas.height) {
            shootingStars.shift();
        }
    }
}

function twinkleStars() {
    for (let star of stars) {
        star.opacity += (Math.random() - 0.5) * 0.2;
        if (star.opacity < 0) star.opacity = 0;
        if (star.opacity > 1) star.opacity = 1;
    }
}

function animateStars() {
    twinkleStars();
    drawStars();
    requestAnimationFrame(animateStars);
}
animateStars();