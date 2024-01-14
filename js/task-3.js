function getElementWidth(content, padding, border) {
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);
    const contentValue = parseFloat(content);
    const totalWidth = contentValue + 2 * paddingValue + 2 * borderValue;
    return totalWidth;
}
    
