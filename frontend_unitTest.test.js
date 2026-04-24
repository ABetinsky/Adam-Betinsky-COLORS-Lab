// Code written by Adam Betinsky on April 24th, 2026
import { checkIfInputNotEmpty } from "./public/js/colorChecker.js";

// This is my frontend unit test. It ensures that an input entered into a textbox is NOT empty (this uses a replicator function in my colorChecker.js file)
test ("Ensure color inputted to textbox is NOT empty", () => {
    // Try testing with a working case and not a working case
    expect(checkIfInputNotEmpty("Blue")).toBe(true);
    expect(checkIfInputNotEmpty("")).toBe(false);
});