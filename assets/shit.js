function speak(phrase) {
    if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
    let utterance = new window.SpeechSynthesisUtterance(phrase);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
}