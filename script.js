document.getElementById('wordInput').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchWord();
    }
});
async function searchWord() {
     const word = document.getElementById('wordInput').value.trim();

     if (!word) {
         document.getElementById('error').textContent = 'Please enter a word!';
         return;
     }

     document.getElementById('error').textContent = '';
     document.getElementById('definition').textContent = 'Searching...';

     const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

     // Clear previous dynamic results
     const resultElement = document.getElementById('result');
     resultElement.querySelectorAll('.meaning-block').forEach(el => el.remove());

     // Remove the previous audio element
     const previousAudio = resultElement.querySelector('audio');
     if (previousAudio) {
         previousAudio.remove();
     }

     try {
         const response = await fetch(apiUrl);

         if (!response.ok) {
             throw new Error('Word not found!');
         }

         const data = await response.json();
         const wordData = data[0];

         // Update the definition text
         document.getElementById('definition').textContent = `Word: ${wordData.word}, Phonetic: ${wordData.phonetic || 'Not available'}`;

         // Display audio if available
         if (wordData.phonetics && wordData.phonetics[0]?.audio) {
             const audio = document.createElement('audio');
             audio.controls = true;
             audio.src = wordData.phonetics[0].audio;
             resultElement.appendChild(audio);
         }

         // Display word origin if available
         if (wordData.origin) {
             const origin = document.createElement('p');
             origin.innerHTML = `<strong>Origin:</strong> ${wordData.origin}`;
             resultElement.appendChild(origin);
         }

         // Display meanings
         wordData.meanings.forEach(meaning => {
             const meaningBlock = document.createElement('div');
             meaningBlock.className = 'meaning-block';

             const partOfSpeech = document.createElement('p');
             partOfSpeech.innerHTML = `<strong>Part of Speech:</strong> ${meaning.partOfSpeech}`;
             meaningBlock.appendChild(partOfSpeech);

             // Display definitions
             meaning.definitions.forEach((definition, index) => {
                 const defParagraph = document.createElement('div');
                 defParagraph.className = 'definition-block'; // Adds gap between definitions

                 defParagraph.innerHTML = `<strong>Definition ${index + 1}:</strong> ${definition.definition}`;
                 meaningBlock.appendChild(defParagraph);

                 // Display example if available
                 if (definition.example) {
                     const exampleParagraph = document.createElement('p');
                     exampleParagraph.innerHTML = `<em>Example:</em> ${definition.example}`;
                     meaningBlock.appendChild(exampleParagraph);
                 }

                 // Display synonyms and antonyms if available
                 if ((definition.synonyms && definition.synonyms.length > 0) || (definition.antonyms && definition.antonyms.length > 0)) {
                     const synAntWrapper = document.createElement('div');
                     synAntWrapper.className = 'synonyms-antonyms'; // Ensures gap after synonyms/antonyms

                     if (definition.synonyms && definition.synonyms.length > 0) {
                         const synonymsParagraph = document.createElement('p');
                         synonymsParagraph.innerHTML = `<strong>Synonyms:</strong> ${definition.synonyms.join(', ')}`;
                         synAntWrapper.appendChild(synonymsParagraph);
                     }

                     if (definition.antonyms && definition.antonyms.length > 0) {
                         const antonymsParagraph = document.createElement('p');
                         antonymsParagraph.innerHTML = `<strong>Antonyms:</strong> ${definition.antonyms.join(', ')}`;
                         synAntWrapper.appendChild(antonymsParagraph);
                     }

                     meaningBlock.appendChild(synAntWrapper);
                 }

                 // Add space before the next definition
                 if (index < meaning.definitions.length - 1) {
                     const spacer = document.createElement('div');
                     spacer.style.marginBottom = '20px'; // Adds space between definitions
                     meaningBlock.appendChild(spacer);
                 }
             });

             resultElement.appendChild(meaningBlock);
         });
     } catch (error) {
         document.getElementById('definition').textContent = '';
         document.getElementById('error').textContent = error.message;
     }
 }

 async function searchWord() {
     const word = document.getElementById('wordInput').value.trim();

     if (!word) {
         document.getElementById('error').textContent = 'Please enter a word!';
         return;
     }

     document.getElementById('error').textContent = '';
     document.getElementById('definition').textContent = 'Searching...';

     const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

     // Clear previous dynamic results
     const resultElement = document.getElementById('result');
     resultElement.querySelectorAll('.meaning-block').forEach(el => el.remove());

     // Remove the previous audio element
     const previousAudio = resultElement.querySelector('audio');
     if (previousAudio) {
         previousAudio.remove();
     }

     try {
         const response = await fetch(apiUrl);

         if (!response.ok) {
             throw new Error('Word not found!');
         }

         const data = await response.json();
         const wordData = data[0];

         // Update the definition text
         document.getElementById('definition').textContent = `Word: ${wordData.word}, Phonetic: ${wordData.phonetic || 'Not available'}`;

         // Display audio if available
         if (wordData.phonetics && wordData.phonetics[0]?.audio) {
             const audio = document.createElement('audio');
             audio.controls = true;
             audio.src = wordData.phonetics[0].audio;
             resultElement.appendChild(audio);
         }

         // Display word origin if available
         if (wordData.origin) {
             const origin = document.createElement('p');
             origin.innerHTML = `<strong>Origin:</strong> ${wordData.origin}`;
             resultElement.appendChild(origin);
         }

         // Display meanings
         wordData.meanings.forEach(meaning => {
             const meaningBlock = document.createElement('div');
             meaningBlock.className = 'meaning-block';

             const partOfSpeech = document.createElement('p');
             partOfSpeech.innerHTML = `<strong>Part of Speech:</strong> ${meaning.partOfSpeech}`;
             meaningBlock.appendChild(partOfSpeech);

             // Display definitions
             meaning.definitions.forEach((definition, index) => {
                 const defParagraph = document.createElement('div');
                 defParagraph.className = 'definition-block'; // Adds gap between definitions

                 defParagraph.innerHTML = `<strong>Definition ${index + 1}:</strong> ${definition.definition}`;
                 meaningBlock.appendChild(defParagraph);

                 // Display example if available
                 if (definition.example) {
                     const exampleParagraph = document.createElement('p');
                     exampleParagraph.innerHTML = `<em>Example:</em> ${definition.example}`;
                     meaningBlock.appendChild(exampleParagraph);
                 }

                 // Display synonyms and antonyms if available
                 if ((definition.synonyms && definition.synonyms.length > 0) || (definition.antonyms && definition.antonyms.length > 0)) {
                     const synAntWrapper = document.createElement('div');
                     synAntWrapper.className = 'synonyms-antonyms'; // Ensures gap after synonyms/antonyms

                     if (definition.synonyms && definition.synonyms.length > 0) {
                         const synonymsParagraph = document.createElement('p');
                         synonymsParagraph.innerHTML = `<strong>Synonyms:</strong> ${definition.synonyms.join(', ')}`;
                         synAntWrapper.appendChild(synonymsParagraph);
                     }

                     if (definition.antonyms && definition.antonyms.length > 0) {
                         const antonymsParagraph = document.createElement('p');
                         antonymsParagraph.innerHTML = `<strong>Antonyms:</strong> ${definition.antonyms.join(', ')}`;
                         synAntWrapper.appendChild(antonymsParagraph);
                     }

                     meaningBlock.appendChild(synAntWrapper);
                 }

                 // Add space before the next definition
                 if (index < meaning.definitions.length - 1) {
                     const spacer = document.createElement('div');
                     spacer.style.marginBottom = '20px'; // Adds space between definitions
                     meaningBlock.appendChild(spacer);
                 }
             });

             resultElement.appendChild(meaningBlock);
         });
     } catch (error) {
         document.getElementById('definition').textContent = '';
         document.getElementById('error').textContent = error.message;
     }
 }
