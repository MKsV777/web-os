  // i hate my code


function setupprocess() {
    let nameprocesselementxd;
let processCanvas;
let processCtx;
let processxd;
    if(!window.processes){
    window.processes = {};}
        
    let localprocess = Object.keys(window.processes).length + 1; 
    let processKey = `process${localprocess}`;
    nameprocesselementxd = processKey;

    window.processes[`process${localprocess}`] = {
        "display" : true,
        "x": 504,
        "y": 65,
        "width": 1000,
        "height": 485,
        "clickedX": 0,
        "clickedY": 0,
        "clicked": false,
    };

    const button_p ={
        x:0,
        y:0,
        width:1000,
        height:485,

    };
    let proc = window.processes[processKey];

    let contador = 0;

    let processButtons = [
        {
            "x": 0,       
            "y": 0,       
            "w": window.innerWidth, 
            "h": 50,      
            "color": "#171717", 
            "text": "file manager", // Default title for Process 1
        },
        {
            "x": 0,
            "y": 50,
            "w": window.innerWidth, 
            "h": window.innerHeight, 
            "color": "rgba(200, 220, 240, 0.8)",
            "text": ""
        },
        {
            "x": 100,
            "y": 100,
            "w": 400,
            "h": 200,
            "color": "#171717", 
            "text": "documents",
            "code": "alert('not finished feature')"
        }
    ];

    // --- ALTER PROCESS 2 HERE ---
    if(localprocess == 2){
        processButtons = [
            {
                "x": 0,       
                "y": 0,       
                "w": window.innerWidth, 
                "h": 50,      
                "color": "#171717", // Change Process 2 header to purple
                "text": "internet", // Process 2 custom title
            },
            {
                "x": 0,
                "y": 50,
                "w": window.innerWidth, 
                "h": window.innerHeight, 
                "color": "rgba(200, 220, 240, 0.8)", // Different background color
                "text": ""
            },
            {
                "x": 100,
                "y": 100,
                "w": 400,
                "h": 200,
                "color": "#171717", 
                "text": "download another app", 
                "code": "alert('not finished feature')" // Custom Process 2 logic
            }
        ];
    }

    window.addEventListener('load', function() {
        const canvas = document.createElement('canvas');
        canvas.style.display = 'none';
        canvas.id = nameprocesselementxd;
        document.body.appendChild(canvas);
        processCanvas = document.getElementById(nameprocesselementxd);
        processCtx = processCanvas.getContext('2d');
        processCanvas.width = window.innerWidth;
        processCanvas.height = window.innerHeight;

        window.processes[nameprocesselementxd].canvas = processCanvas;

        // FIX: Update your layout sizes dynamically now that processCanvas exists!
        processButtons[0].w = processCanvas.width;
        processButtons[1].w = processCanvas.width;
        processButtons[1].h = processCanvas.height;
        processxd = `process${localprocess}`;

        for(let i = 0; i < processButtons.length; i++) {
            let currentBtn = processButtons[i];
            if (!currentBtn || currentBtn.x === undefined) continue;
            
            if (currentBtn.init) eval(currentBtn.init);

            if (currentBtn.img) {
                let staticImg = new Image();
                staticImg.onload = () => {
                    drawButtonz(currentBtn.color, currentBtn.x, currentBtn.y, currentBtn.w - currentBtn.x, currentBtn.h - currentBtn.y, currentBtn.text, null, null, staticImg);
                };
                staticImg.src = currentBtn.img;
            } else {
                drawButtonz(currentBtn.color, currentBtn.x, currentBtn.y, currentBtn.w - currentBtn.x, currentBtn.h - currentBtn.y, currentBtn.text, null, null, null);
            }
        }
    });

    function drawButtonz(color, x, y, width, height, text, code, initCode, img) {
        if (x === undefined || y === undefined) return;

        if (img && img instanceof HTMLImageElement && img.complete && img.naturalWidth > 0) {
            processCtx.drawImage(img, x, y, width, height);
        }
        else if (color) {
            processCtx.fillStyle = color;
            processCtx.fillRect(x, y, width, height);    
        }
        

        processCtx.fillStyle = "white";
        processCtx.font = "20px Arial";
        processCtx.textAlign = "center";
        const lines = (text || "").split('\n');
        const lineHeight = 24;
        const totalTextHeight = lines.length * lineHeight;
        let startY = y + (height / 2) - (totalTextHeight / 2) + (lineHeight / 2) + 4;
        for (let i = 0; i < lines.length; i++) {
            processCtx.fillText(lines[i], x + width / 2, startY + (i * lineHeight));
        }
    }
setInterval(() => {
    if (!processCtx) return;
    
    // Check if a click was registered via bracket notation
    if (window.processes && window.processes[processKey] && window.processes[processKey].clicked) {
        
        let clickX = window.processes[processKey].clickedX;
        let clickY = window.processes[processKey].clickedY;

        // CRITICAL FIX: Turn the clicked flag off IMMEDIATELY here.
        // This consumes the click token so the next millisecond loop cycle skips this block.
        window.processes[processKey].clicked = false;

        for (let x = processButtons.length - 1; x >= 0; x--){
            let btn = processButtons[x];

            if (clickX >= btn.x - 39 && clickX <= (btn.w-150) && 
                clickY >= btn.y - 37 && clickY <= (btn.h - 71)) {
                
                if (btn.code) eval(btn.code);
                break;
            }
        }
    }
}, 1);
}
setupprocess();
setupprocess();