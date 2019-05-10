// empty shell for students to do their quadcopter
// exercise

// see other files for explanation of these comments
 // @ts-check
/* jshint -W069, esversion:6 */

function copter () {
    // somewhere in your program (maybe not here) you'll want a line
    // that looks like:
    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("p6"));
    let slider1 = /** @type {HTMLInputElement} */ (document.getElementById("s1"));
    let launch = /** @type {HTMLInputElement} */ (document.getElementById("launch"));
    let auto = /** @type {HTMLInputElement} */ (document.getElementById("auto"));
    let ctx = canvas.getContext("2d");
    let speed = 0;
    let rotate = 0;
    let first_in = 1;
    // function to draw the than body
    function draw_main_body() {
    ctx.save();
        ctx.fillStyle = "#52BE80";
        ctx.fillRect(216, 204, 32, 60);
    ctx.restore();
    ctx.save();
        ctx.beginPath();
            ctx.moveTo(216, 264);
            ctx.bezierCurveTo(216, 264, 236, 236, 216, 204);
            ctx.save();
                ctx.moveTo(248, 264);
                ctx.bezierCurveTo(232, 240, 240, 220, 248, 204);
            ctx.restore();
        ctx.closePath();
        ctx.fillStyle = "#229954";
        ctx.fill();
    ctx.restore();
    };
    // function to build leg shape
    function leg_shape(){
        ctx.beginPath();
            ctx.moveTo(218, 220);
            ctx.lineTo(192, 204);
            ctx.lineTo(200, 204);
            ctx.lineTo(184, 204);
            ctx.lineTo(188, 212);
            ctx.lineTo(218, 228);
            ctx.lineTo(218, 220);
        ctx.closePath();
        ctx.fillStyle = "#229954";
        ctx.fill();
        ctx.beginPath();
            ctx.arc(190, 208, 1.6, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "#E5E8E8";
        ctx.fill();
    };
    // function to flip shapes
    function flip_shape(scale_x, scale_y, trans_x, trans_y) {
        ctx.scale(scale_x, scale_y);
        ctx.translate(trans_x, trans_y);
    };
    // function draw four legs
    function draw_legs(){ 
        ctx.save();
            leg_shape();
        ctx.restore();
        ctx.save();
            flip_shape(-1, 1, -460, 0);
            leg_shape();
            flip_shape(1, -1, 0, -460);
            leg_shape();
        ctx.restore();
        ctx.save();
            flip_shape(1, -1, 0, -460);
            leg_shape();
        ctx.restore();
    };
    // function to build blade shape
    function blade_shape() {
        ctx.beginPath();
            ctx.moveTo(190, 188);
            ctx.quadraticCurveTo(182, 208, 190, 228);
            ctx.quadraticCurveTo(198, 204, 190, 188);
        ctx.closePath();
        ctx.fillStyle = 'rgb(86, 101, 115, 0.8)';
        ctx.fill();
        ctx.beginPath();
            ctx.arc(190, 208, 1.6, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "#E5E8E8";
        ctx.fill();
    };
    function blade_rotate() {
        let x = 190, y = 208;
        let angle = performance.now() / 60;
        ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.translate(-x, -y);
            blade_shape();
        ctx.restore();
        ctx.save();
            flip_shape(-1, 1, -460, 0);
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.translate(-x, -y);
            blade_shape();
        ctx.restore();
        ctx.save();
            flip_shape(-1, 1, -460, 0);
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.translate(-x, -y);
            blade_shape();
        ctx.restore();
        ctx.save();
            flip_shape(-1, 1, -460, 0);
            flip_shape(1, -1, 0, -460);
            ctx.translate(x, y);
            ctx.rotate(angle * 2);
            ctx.translate(-x, -y);
            blade_shape();
        ctx.restore();
        ctx.save();
            flip_shape(1, -1, 0, -460);
            ctx.translate(x, y);
            ctx.rotate(angle * 2);
            ctx.translate(-x, -y);
            blade_shape();
        ctx.restore();
    };
    // function drawing the complete, single copter
    function draw_copter() {
        draw_main_body();
        draw_legs();
        blade_rotate();
    };
    if (first_in == 1) {
        // move copter around wanted center
        function copter_move_around_fixed_center() {
            let angle = performance.now() / 700;
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.translate(170, 170);
            ctx.rotate(angle);
            ctx.translate(-170, -170);
            draw_copter(); 
            ctx.restore();
            window.requestAnimationFrame(copter_move_around_fixed_center);
        };
        copter_move_around_fixed_center();
        slider1.oninput = function() {
            speed = Number(slider1.value);
        };
    // function to rotate copter with adjustable speed
        function copter_move_with_vary_speed() {
            ctx.clearRect(300, 300, 300, 300);
            ctx.save();
                ctx.translate(370, 450);
                ctx.rotate(rotate);
                ctx.translate(-370, -450);
                ctx.save();
                    ctx.translate(180, 150);
                    draw_copter();
                    ctx.translate(-180, -150);
                ctx.restore();
            ctx.restore();    
            rotate += speed * Math.PI/180;    
            window.requestAnimationFrame(copter_move_with_vary_speed);
        };
        copter_move_with_vary_speed();
    }
    auto.onclick = function() {
        first_in = 0;
    // move copter around wanted center
        function copter_move_around_fixed_center() {
            let angle = performance.now() / 700;
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.translate(170, 170);
            ctx.rotate(angle);
            ctx.translate(-170, -170);
            draw_copter(); 
            ctx.restore();
            window.requestAnimationFrame(copter_move_around_fixed_center);
        };
        copter_move_around_fixed_center();
        slider1.oninput = function() {
            speed = Number(slider1.value);
        };
    // function to rotate copter with adjustable speed
        function copter_move_with_vary_speed() {
            ctx.clearRect(300, 300, 300, 300);
            ctx.save();
                ctx.translate(370, 450);
                ctx.rotate(rotate);
                ctx.translate(-370, -450);
                ctx.save();
                    ctx.translate(180, 150);
                    draw_copter();
                    ctx.translate(-180, -150);
                ctx.restore();
            ctx.restore();    
            rotate += speed * Math.PI/180;    
            window.requestAnimationFrame(copter_move_with_vary_speed);
        };
        copter_move_with_vary_speed();
    };
    launch.onclick = function() {
        first_in = 0;
        let xpos = 0;
        let ypos = 0;
        let scale_factor = 0;
        function go_up(ctx, x, y) {
            ctx.scale(x, y);
        }
        function random_xpos(min, max) {
            return Math.round(Math.random() * (max - min)) + min;
        }
        function random_ypos(min, max) {
            return Math.round(Math.random() * (max - min)) + min;
        }
        xpos = random_xpos(-150, 300);
        ypos = random_ypos(-180, 230);
        function launch_copter() {
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.translate(xpos, ypos);
            go_up(ctx, scale_factor, scale_factor);
            draw_copter();
            ctx.restore();
            if (scale_factor <= 1)
                scale_factor += 0.01;
            window.requestAnimationFrame(launch_copter);
        };
        launch_copter();
    };
};


window.onload = function() {
    copter();
}