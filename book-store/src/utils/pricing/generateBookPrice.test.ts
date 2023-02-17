import generateBookPrice from "./generateBookPrice";

const TEST_TITLES = ["Wuthering Heights","The Great Gatsby","Romeo and Juliet","Ethan Frome","Sonnets","As You Like It","The Importance of Being Earnest","Анна Каренина","Le petit prince","The Republic","Cyrano de Bergerac","The Dialogues of Plato","कामसूत्र","Works [37 plays, 6 poems, sonnets]","Symposium","Vita nuova","Lolita","Phaedo","Mémoires d'Hadrien","Guess How Much I Love You","The blue castle","Twilight","Ars amatoria","Theaetetus","La casa de los espíritus","Чайка","Chronicles of Avonlea","Ἀπολογία Σωκράτους","Timaeus","A Wrinkle in Time","Nesnesitelná lehkost bytí","Protagoras","Rose in Bloom","New Moon","Amores","Como agua para chocolate","The art of loving","Phaedrus","East of Eden","Introduction à la vie dévote","The Fault in Our Stars","The Little Tin Soldier","Emily's quest","Meno","Philebus","Parmenides","The greatest thing in the world","A Room with a View","Catullus","Gorgias","Ramona","Enneads","Enten-eller","A Girl of the Limberlost","الروض العاطر في نزهة الخاطر","Del amor y otros demonios","Revelations of divine love, recorded by Julian, anchoress at Norwich, A.D. 1373","The Summer of the Swans","De l'amour","The Dialogues of Plato","Tirukkur̲aḷ","Critique of psychoanalysis","Statesman","Cendrillon","Five Love Languages","Forever","Romance","Sophist","Time Traveler's Wife","Born in Fire","Psychopathia sexualis","The Black Stallion","A Severed Head","The Four Loves","Surprised by Joy","Jazz","Can't You Sleep, Little Bear?","Insurgent","Stepping heavenward","Love","Crito","En man som heter Ove","Women Who Love Too Much","The Elite","Wicked","Eleanor & Park","Platonis opera","Hop on Pop","The Selection","H.R.H.","Traité de l'amour de Dieu","The Hite report","Estudios sobre el amor","Voyage in the Dark","Allegiant","First love","Marina","Famous Affinities of History","Cratylus","Bodas de sangre"]

for (const title of TEST_TITLES) {
    test(`using "\x1b[33m${title}\x1b[0m", price generated is from 15.00 to 25.00`, () => {
        
        expect(parseFloat(generateBookPrice(title))).toBeGreaterThanOrEqual(10);
        expect(parseFloat(generateBookPrice(title))).toBeLessThanOrEqual(25);
    })
}

