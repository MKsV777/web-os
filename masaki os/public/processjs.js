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
                "init": "window.processes.process1.display = false;",
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
                "text": "",
                "code": "if (window._process2_listener) { window.removeEventListener('keydown', window._process2_listener); delete window._process2_listener; delete window._hasKeyListener; }"
            },
            {
                "x": 0,
                "y": 60,
                "w": 1200,
                "h": 150,
                "color": "#3a3a3a", 
                "text": "click and write here to browse", 
                "code": "if(this.text==='click and write here to browse'){this.text='';}if(!window.hasOwnProperty('searchbarbrowserxd')){window.searchbarbrowserxd='';}if(!window.hasOwnProperty('_hasKeyListener')){window._hasKeyListener=true;window._process2_listener=(e)=>{if(e.key==='Backspace'){window.searchbarbrowserxd=window.searchbarbrowserxd.slice(0,-1);}else if(e.key.length===1){window.searchbarbrowserxd+=e.key;}processCtx.clearRect(0,0,processCanvas.width,processCanvas.height);for(let i=0;i<processButtons.length;i++){let currentBtn=processButtons[i];let displayText=(i===2)?window.searchbarbrowserxd:currentBtn.text;drawButtonz(currentBtn.color,currentBtn.x,currentBtn.y,currentBtn.w-currentBtn.x,currentBtn.h-currentBtn.y,displayText,null,null,null);}};window.addEventListener('keydown',window._process2_listener);}else{processCtx.clearRect(0,0,processCanvas.width,processCanvas.height);for(let i=0;i<processButtons.length;i++){let currentBtn=processButtons[i];let displayText=(i===2)?window.searchbarbrowserxd:currentBtn.text;drawButtonz(currentBtn.color,currentBtn.x,currentBtn.y,currentBtn.w-currentBtn.x,currentBtn.h-currentBtn.y,displayText,null,null,null);}}"            
            },
            {
                "x": 1410,
                "y": 60,
                "w": 1510,
                "h": 150,
                "color": "#3a3a3a", 
                "text": "🔍︎", 
                "code": "if(window.hasOwnProperty('searchbarbrowserxd') && window.searchbarbrowserxd.trim() !== ''){let iframe=document.getElementById('myIframe') || document.querySelector(\"iframe[name='myIframe']\");if(iframe){let targetUrl=window.searchbarbrowserxd;if(!/^https?:\\/\\//i.test(targetUrl)){targetUrl='https://'+targetUrl;}iframe.src=targetUrl;}else{console.error('Iframe with name or ID \"myIframe\" not found.');}}"
            }
        ];
    }
if(localprocess == 3){
    processButtons = [
        {
            "x": 0,      
            "y": 0,
            "w": window.innerWidth, 
            "h": 50,      
            "color": "#171717",
            "text": "login",
        },
        {
            "x": 0,
            "y": 50,
            "w": window.innerWidth, 
            "h": window.innerHeight,
            "color": "rgba(200, 220, 240, 0.8)",
            "text": "",
            "code": "if (window._login_listener) { window.removeEventListener('keydown', window._login_listener); delete window._login_listener; delete window._hasLoginKeyListener; }"
        },
        {
            "x": 450,
            "y": 260,
            "w": 1100,
            "h": 350,
            "color": "#3a3a3a", 
            "text": "username", 
            "code": "if(this.text==='username'){this.text='';} if(!window.hasOwnProperty('loginUsernamexd')){window.loginUsernamexd='';} if(!window.hasOwnProperty('_hasLoginKeyListener')){window._hasLoginKeyListener=true; window._login_listener=(e)=>{ let localCanvas = document.getElementById('process3'); if(!localCanvas) return; let localCtx = localCanvas.getContext('2d'); if(e.key==='Backspace'){window.loginUsernamexd=window.loginUsernamexd.slice(0,-1);}else if(e.key.length===1){window.loginUsernamexd+=e.key;} localCtx.clearRect(0,0,localCanvas.width,localCanvas.height); let activeProc = window.processes['process3']; if(activeProc) { localCtx.fillStyle = '#171717'; localCtx.fillRect(0, 0, localCanvas.width, 50); localCtx.fillStyle = 'white'; localCtx.font = '20px Arial'; localCtx.textAlign = 'center'; localCtx.fillText('login', localCanvas.width / 2, 32); localCtx.fillStyle = 'rgba(200, 220, 240, 0.8)'; localCtx.fillRect(0, 50, localCanvas.width, localCanvas.height - 50); localCtx.fillStyle = '#3a3a3a'; localCtx.fillRect(450, 260, 1100 - 450, 350 - 260); localCtx.fillStyle = 'white'; localCtx.fillText(window.loginUsernamexd, 450 + (1100 - 450)/2, 260 + (350 - 260)/2 + 7); localCtx.fillStyle = '#3a3a3a'; localCtx.fillRect(600, 450, 950 - 600, 550 - 450); localCtx.fillStyle = 'white'; localCtx.fillText('login', 600 + (950 - 600)/2, 450 + (550 - 450)/2 + 7); }}; window.addEventListener('keydown',window._login_listener); }else{ let localCanvas = document.getElementById('process3'); if(!localCanvas) return; let localCtx = localCanvas.getContext('2d'); localCtx.clearRect(0,0,localCanvas.width,localCanvas.height); localCtx.fillStyle = '#171717'; localCtx.fillRect(0, 0, localCanvas.width, 50); localCtx.fillStyle = 'white'; localCtx.font = '20px Arial'; localCtx.textAlign = 'center'; localCtx.fillText('login', localCanvas.width / 2, 32); localCtx.fillStyle = 'rgba(200, 220, 240, 0.8)'; localCtx.fillRect(0, 50, localCanvas.width, localCanvas.height - 50); localCtx.fillStyle = '#3a3a3a'; localCtx.fillRect(450, 260, 1100 - 450, 350 - 260); localCtx.fillStyle = 'white'; localCtx.fillText(window.loginUsernamexd, 450 + (1100 - 450)/2, 260 + (350 - 260)/2 + 7); localCtx.fillStyle = '#3a3a3a'; localCtx.fillRect(600, 450, 950 - 600, 550 - 450); localCtx.fillStyle = 'white'; localCtx.fillText('login', 600 + (950 - 600)/2, 450 + (550 - 450)/2 + 7); }"            
        },
        {
            "x": 600,
            "y": 450,
            "w": 950,
            "h": 550,
            "color": "#3a3a3a", 
            "text": "login", 
            "code": "if(window.loginUsernamexd){alert('Intentando iniciar sesión con: ' + window.loginUsernamexd);}else{alert('Por favor escribe un usuario primero.');}"
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

            if (clickX >= btn.x && clickX <= btn.w && 
                clickY >= btn.y && clickY <= btn.h) {
                
                if (btn.code) eval(btn.code);
                break;
            }
        }
    }
}, 1);
}
setupprocess();
setupprocess();
setupprocess();