"use strict";

// Create a BlogPost class that has the following properties:
//  - authorName
//  - title
//  - text
//  - publicationDate
//
// Make sure to set the default values of properties/fields to be an empty string
//
// Create a few BlogPost instances and set their properties according to the infos below:
//  - John Doe created a post at "2000.05.04." with the title "Lorem Ipsum". It's contents are:
//      "Lorem ipsum dolor sit amet"
//  - Tim Urban created a post at "2010.10.10." with the title "Wait, but why?" with the following content:
//      "A popular long-form, stick-figure-illustrated blog about almost everything."
//  - William Turton wrote "One Engineer Is Trying to Get IBM to Reckon With Trump" at "2017.03.28."
//      "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the
//       center of attention. When I asked to take his picture outside one of IBM’s
//       New York City offices, he told me that he wasn’t really into the whole
//       organizer profile thing."

export class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(authorName: string, title: string, text: string, publicationDate: string) {
      this.authorName = authorName;
      this.title = title;
      this.text = text;
      this.publicationDate = publicationDate;
  }
}

const post1 = new BlogPost(
  "John Doe",
  "Lorem Ipsum",
  "Lorem ipsum dolor sit amet",
  "2000.05.04."
);

const post2 = new BlogPost(
  "Tim Urban",
  "Wait, but why?",
  "A popular long-form, stick-figure-illustrated blog about almost everything.",
  "2010.10.10."
);

const post3 = new BlogPost(
  "William Turton",
  "One Engineer Is Trying to Get IBM to Reckon With Trump",
  "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.",
  "2017.03.28."
);

console.log(post1);
console.log(post2);
console.log(post3);