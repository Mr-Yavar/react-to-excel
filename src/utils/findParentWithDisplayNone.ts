export function findParentWithDisplayNone(element:any) {
    if (element === null || element.tagName === "BODY") {
        return null; // Reached the body element, no parent with display:none found
    }
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.display === "none") {
        return element; // Found the parent element with display:none
    }
    return findParentWithDisplayNone(element.parentElement); // Continue traversal with the parent element
}

