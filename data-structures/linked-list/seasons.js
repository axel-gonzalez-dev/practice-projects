const LinkedList = require('./LinkedList');

// 1 - Create new linked list and print it
const seasons = new LinkedList();
seasons.printList();

// 2 - Add summer and spring to head and print list
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

// 3 - Add fall and winter to tail and print list
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

// 4 - Remove head and print list
seasons.removeHead();
seasons.printList();