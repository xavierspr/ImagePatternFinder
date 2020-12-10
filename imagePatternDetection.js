let imageHeight = 15;
let imageWidth = 15;
let image = ["TG9yZW0gaXBzdW0",
             "gYW1ldCBkb25lYy",
             "BmYW1lcyBkb25lY",
             "yBhIGZldWdpYXQg",
             "bm9uLCByaG9uY3V",
             "zIGNvbnZhbGxpcy",
             "B2aXRhZSBub24ga",
             "W5jZXB0b3MgbnVs",
             "bGFtIHByYWVzZW5",
             "0IHBsYWNlcmF0LC",
             "BuaXNpIHF1aXNxd",
             "WUgYWRpcGlzY2lu",
             "ZyBjb25zZXF1YXQ",
             "gaGFiaXRhbnQgbW",
             "FsZXN1YWRhIHNvZ" ] 

let patternHeight = 3;
let patternWidth = 3;
let pattern = [ "lcm", // Got this from x=8, y=9 in the image
                "F1a",
                "Glz" ]

let patternCoord = {
	x: -1,
	y: -1
}


function findPattern(imageWidth, imageHeight, image, patternWidth, patternHeight, pattern) {
    
    for (let i = 0; i < (imageHeight - patternHeight); i++) {
        let x1 = image[i].search(pattern[0]);
        let found = false;
        // if pattern found in line
        if (x1 != -1) {
            found = true; // assume true until proven otherwise
            // search next lines
            for (let j = 1; j <  patternHeight; j++) { 
                let x2 = image[i + j].search(pattern[j]);
                // if not found or found different than x1
                if (x2 === -1 || x2 != x1) {
                    // pattern not found
                    found = false;
                    break;
                }
            }
            // if at this point, found is still true mark coordinates
            if (found == true) {
                patternCoord.x = x1;
                patternCoord.y = i;
                console.log("Pattern found at: ");
                break;
            }
        }
    }
    return patternCoord;
}

console.log(findPattern(imageWidth, imageHeight, image, patternWidth, patternHeight, pattern));
