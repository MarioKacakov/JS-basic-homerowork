       const book = {
              author: 'Stephen King',
              bookTitle1: 'It',
              bookTitle2: 'It2',
              bookTitle3: 'Mr.Harrigans Phone',
              readingStatus: confirm('Did you read the book, if yes press ok if no press cancel'),
                     getStatus() {
                            if (this.readingStatus === true) {
                                   console.log(`You have already read the book '${this.bookTitle1}' by ${this.author}, you still need to read '${this.bookTitle2}' and '${this.bookTitle3}'`);
                            }else {
                                          console.log(`You havent read any books by ${this.author}, you need to read '${this.bookTitle1}', '${this.bookTitle2}' and '${this.bookTitle3}'`);
                     }

                     
              },


       }

       console.log(book);
       console.log(book.getStatus());
