function createParagraph () {

    var nounOne = document.getElementById("nounOne").value;
    var adjectiveOne = document.getElementById("adjectiveOne").value;
    var adjectiveTwo = document.getElementById("adjectiveTwo").value;
    var foodOne = document.getElementById("foodOne").value;
    var placeOne = document.getElementById("placeOne").value;
    var pluralNounOne = document.getElementById("pluralNounOne").value;
    var bodyPartOne = document.getElementById("bodyPartOne").value;
    var verbOne = document.getElementById("verbOne").value;
    var adjectiveThree = document.getElementById("adjectiveThree").value;
    var beverageOne = document.getElementById("beverageOne").value;
    var pluralNounTwo = document.getElementById("pluralNounTwo").value;
    



    var paragraph = '<p> Rick is the smartest ' + nounOne + ' in the galaxy, but he\'s also the most ' + adjectiveOne + '. He uses his intelligence for all the ' + adjectiveTwo + ' reasons, such as turning himself into a talking ' + foodOne + ' to avoid going to (the) ' + placeOne + ' with his family. He won\'t come to the rescue when some ' + pluralNounOne + ' are nibbling on my ' + bodyPartOne + ' unless there\'s something in it for him, and he definitely won\'t care if people ' + verbOne + ' horribly in one of his ' + adjectiveThree + ' schemes. He drinks too much ' + beverageOne + ' and I constantly have to clean up his ' + pluralNounTwo+ '</p>' 

    document.getElementById("answer").innerHTML = paragraph;
}

