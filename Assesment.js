/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eye_color, shirt_type, bling) {
    const NFT = {
        "Name": name,
        "EyeColor": eye_color,
        "ShirtType": shirt_type,
        "Bling": bling
    }
    NFTs.push(NFT);
    return NFT;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0 ; i<NFTs.length; i++){
        console.log("\nID:\t\t\t" + (i+1));
        console.log("Name:\t\t" + NFTs[i].Name);
        console.log("Eye Color:\t" + NFTs[i]. EyeColor);
        console.log("Shirt Type: " + NFTs[i].ShirtType);
        console.log("bling:\t\t" + NFTs[i].Bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs : " + NFTs.length);
}

// call your functions below this line
mintNFT("Anu","Brown","jacket","locket");
mintNFT("Tanu","Gray","jacket","locket");
mintNFT("Ravi","Black","jacket","Chain");

listNFTs();
getTotalSupply();
