// content array for easy editing

const content = [
  {
        "id":"1",
        "align": "c",
        "title": "LatinX Civil Rights",
        "contentHTML": ""
    },
   {
        "id":"2",
        "align": "l",
        "title": "example title and stuff 1",
        "contentHTML": "example description lorem ipsum dolor sit amet"
    },
    {
        "id":"3",
        "align": "r",
        "title": "example title and stuff 2",
        "contentHTML": "example description lorem ipsum dolor sit amet"
    },
    {
        "id":"4",
        "align": "l",
        "title": "example title and stuff 3",
        "contentHTML": "example description lorem ipsum dolor sit amet"
    },
    {
        "id":"5",
        "align": "r",
        "title": "example title and stuff 4",
        "contentHTML": "example description lorem ipsum dolor sit amet"
    },
    
]
content.forEach((slide) => {
    const titleElement = document.getElementById(`title-${slide.id}`);
    const contentElement = document.getElementById(`content-${slide.id}`);
    const sectionElement = titleElement.closest('div'); // Get the parent section element
    titleElement.innerText = slide.title;
    contentElement.innerHTML = slide.contentHTML;

    if (slide.align === 'l') {
        sectionElement.style.transform = 'translateX(-125%)';
    } else if (slide.align === 'r') {
        sectionElement.style.transform = 'translateX(25%)';
    } else {
     
    }
});
