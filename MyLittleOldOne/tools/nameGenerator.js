var vowel = ["a", "o", "aiue", "ao", "en", "ui", "e", "aa", "ya"];
var consonant = ["bh", "th", "b", "gnsh", "l", "z", "zh", "rr", "c'th", "p", "cx", "x", "kl", "d'", "drr", "h", "ghr", "tl", "g", "ld", "jh'", "lbh", "s", "lzsch"];

function getRandomVowel()
{
	var vowelNb = Math.floor(Math.random() * vowel.length);
	return vowel[vowelNb];
}

function getRandomConsonant()
{
	var consonantNb = Math.floor(Math.random() * consonant.length);
	return consonant[consonantNb];
}

function firstCharToUpperCase(str)
{
	var res = str;
	res = res.charAt(0).toUpperCase() + res.substr(1, res.length-1);
	return res;
}

function getRandomName(minSyllables, randomAdditionalSyllables)
{
	var name = "";
	var nbLetters = Math.floor(Math.random() * minSyllables + randomAdditionalSyllables);

	for(var i = 0; i < nbLetters; i++)
	{
		name += getRandomConsonant();
		name += getRandomVowel();
	}

	name = firstCharToUpperCase(name);

	return name;
}