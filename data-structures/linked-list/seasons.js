const LinkedList = require('./LinkedList');

// 1
const seasons = new LinkedList();
seasons.printList();

// 2
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

// 3
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

// 4
seasons.removeHead();
seasons.printList();