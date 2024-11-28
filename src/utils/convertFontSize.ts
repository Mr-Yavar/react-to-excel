export function convertFontSize(fontSize : any) {
    // Check if the font size contains a valid unit
    const validUnits = ["px", "pt", "em", "rem"];
    const regex = /^([\d.]+)(\D+)$/;
    const match = fontSize.match(regex);

    if (match) {
        const value = parseFloat(match[1]);
        const unit = match[2];

        if (validUnits.includes(unit.toLowerCase())) {
            // Convert to points based on the unit
            switch (unit.toLowerCase()) {
                case "px":
                    return Math.round(value * 0.75);
                case "em":
                    return Math.round(value * 12);
                case "rem":
                    return Math.round(value * 12);
                case "pt":
                    return Number(fontSize.replace("pt", "")); // The font size is already in points
            }
        }
    }

    // Font size is either invalid or doesn't have a recognized unit, return as is
    return fontSize;
}


