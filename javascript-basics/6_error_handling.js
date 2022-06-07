function criticalCode() {
    throw "An exception";
}

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error")
    console.log(ex)
} finally {
    console.log("This will always run");
    
}
